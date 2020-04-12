const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Проверка метода postSettings", () => {
  it("В случае успешного пост-запроса, cервер вернет 404, так как такого репозитория не существует", () => {
    const mockConfig = {
      buildCommand: "Сделай то и это!",
      id: "configId",
      mainBranch: "master_branch",
      period: 14,
      repoName: "the_best_repo_name_ever",
    };

    return chai
      .request(app)
      .post("/api/settings")
      .send({
        repoName: mockConfig.repoName,
        buildCommand: mockConfig.buildCommand,
        mainBranch: mockConfig.mainBranch,
        period: mockConfig.period,
      })
      .then((res) => {
        chai.expect(res.status).to.equal(404);
      })
      .catch((err) => {
        throw err;
      });
  });
});
