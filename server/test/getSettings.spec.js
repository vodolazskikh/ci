const chai = require("chai");
const chaiHttp = require("chai-http");
const dbApiUrl = process.env.DB_API_URL;
const MockAdapter = require("axios-mock-adapter");
const { axiosInstance, app } = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Проверка метода getSettings", () => {
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

  it("В ответ на запрос должен прийти замоканый конфиг с удаленного api", () => {
    const mockConfig = {
      buildCommand: "Сделай то и это!",
      id: "configId",
      mainBranch: "master_branch",
      period: 14,
      repoName: "the_best_repo_name_ever",
    };

    // Мокаем ответ интересуеющего нас метода на стороне АПИ, чтобы проверить корректность проксирования
    mock.onGet(`${dbApiUrl}api/conf`).reply(200, {
      data: mockConfig,
    });

    return chai
      .request(app)
      .get("/api/settings")
      .then((res) => {
        chai.expect(res.body).to.deep.equal({ data: mockConfig });
      })
      .catch((err) => {
        throw err;
      });
  });
});
