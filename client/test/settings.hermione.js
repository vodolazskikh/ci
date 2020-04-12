const assert = require("chai").assert;

describe("Страница настроек", function () {
  it("Есть шапка с тайтлом School CI server", function () {
    return this.browser
      .url("/settings")
      .getText("#title")
      .then(function (title) {
        assert.equal(title, "School CI server");
      });
  });

  it("Кликнули в кнопку закрыть страницу настроек - открылась главная страница", function () {
    return this.browser
      .url("/settings")
      .click("#closeSettingsButton")
      .waitForVisible("#mainPage");
  });
});
