const chai = require("chai");
const chaiHttp = require("chai-http");
const { app } = require("../index");

chai.should();
chai.use(chaiHttp);

describe("Проверка запуска сервера", () => {
  it("В ответ на / должно прийти 'Добрейший вечерочек - API функционирует!'", () => {
    return chai
      .request(app)
      .get("/")
      .then((res) => {
        chai
          .expect(res.text)
          .to.equal("Добрейший вечерочек - API функционирует!");
      })
      .catch((err) => {
        throw err;
      });
  });
});
