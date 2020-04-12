const chai = require("chai");
const chaiHttp = require("chai-http");
const dbApiUrl = process.env.DB_API_URL;
const MockAdapter = require("axios-mock-adapter");
const { axiosInstance, app } = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Проверка метода postBuild", () => {
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

  it("В ответ на пост-запрос от апи должен прийти отправленный в очередь билд", () => {
    const commitData = {
      comment: "commitMessage",
      commit: "commitHash",
      branch: "branchName",
      author: "v.makeev ",
    };

    // Мокаем ответ интересуеющего нас метода на стороне АПИ, чтобы проверить корректность проксирования
    mock.onPost(`${dbApiUrl}api/build/request`).reply(200, {
      data: commitData,
    });

    return chai
      .request(app)
      .post(`/api/builds/${commitData.commit}`)
      .then((res) => {
        chai.expect(res.body).to.deep.equal({ data: commitData });
      })
      .catch((err) => {
        throw err;
      });
  });
});
