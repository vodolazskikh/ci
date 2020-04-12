const assert = require("chai").assert;

describe("Главная страница", function () {
  it("Есть шапка с тайтлом School CI server", function () {
    return this.browser
      .url("/")
      .getText("#title")
      .then(function (title) {
        assert.equal(title, "School CI server");
      });
  });

  it("Появилась кнопка настроек - кликнули в неё - открылись настройки (появилась кнопка Save)", function () {
    return this.browser
      .url("/")
      .click("#settingsButton")
      .waitForVisible("#saveSettingsButton");
  });

  it("Если появился список билдов - кликнем в первый билд - он открылся (появится кнопка rebuild)", function () {
    const EMPTY_PAGE_TEXT = "Configure repository connection";
    return this.browser
      .url("/")
      .getText("#mainPage")
      .then(async (text) => {
        const hasNoBuildList = text.indexOf(EMPTY_PAGE_TEXT) !== -1;
        // Если билдов на страницы нет - ок
        if (!hasNoBuildList) {
          // Если билд есть - найдем его и кликнем
          await this.browser.click("#card_0").waitForVisible("#rebuildButton");
        }
      });
  });

  it("Если появился список билдов - кликнем в кнопку runBuild - открылся попап", function () {
    const EMPTY_PAGE_TEXT = "Configure repository connection";
    return this.browser
      .url("/")
      .getText("#mainPage")
      .then(async (text) => {
        const hasNoBuildList = text.indexOf(EMPTY_PAGE_TEXT) !== -1;
        // Если билдов на страницы нет - ок
        console.log("hasNoBuildList", hasNoBuildList);
        if (!hasNoBuildList) {
          // Если билды есть - кликнем в попап
          await this.browser
            .click("#runbuildButton")
            .waitForVisible("#newBuildPopup");
        }
      });
  });
});
