const chai = require("chai");
const chaiHttp = require("chai-http");
const dbApiUrl = process.env.DB_API_URL;
const MockAdapter = require("axios-mock-adapter");
const { axiosInstance, app } = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Проверка метода getBuilds", () => {
  let mock;

  before(() => {
    mock = new MockAdapter(axiosInstance);
  });

  afterEach(() => {
    mock.reset();
  });

  after(() => {
    mock.restore();
  });

  it("В ответ на запрос должен прийти список замоканых билдов с удаленного api", () => {
    const mockData = [
      {
        id: "buildId_0",
        configurationId: "configurationId",
        buildNumber: 0,
        commitMessage: "commitMessage",
        commitHash: "commitHash",
        branchName: "branchName",
        authorName: "v.makeev ",
        status: "Waiting",
      },
    ];

    // Мокаем ответ интересуеющего нас метода на стороне АПИ, чтобы проверить корректность проксирования
    mock.onGet(`${dbApiUrl}api/build/list?limit=25`).reply(200, {
      data: mockData,
    });

    return chai
      .request(app)
      .get("/api/builds")
      .then((res) => {
        chai.expect(res.body).to.deep.equal({ data: mockData });
      })
      .catch((err) => {
        throw err;
      });
  });
});
