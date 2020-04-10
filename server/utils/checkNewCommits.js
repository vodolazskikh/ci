const { exec } = require("child_process");
const state = require("../state");
const path = require("path");

const checkNewCommits = myEventEmitter => {
  // Директория, куда был клонирован репозиторий
  const dir = !!state.repo
    ? `../../${state.repo.match(/([\d\w.-]+?)(\.git)?$/)[1]}`
    : "../";

  const resolvedDir = `${path.resolve(__dirname, dir)}`;

  // Проверяем новые коммиты в дочернем процессе
  exec(`git -C ${resolvedDir} log`, function(error, stdout, stderr) {
    if (error) {
      console.log("Ошибка чтения коммитов!");
      return;
    }

    const str = stdout.toString();
    const commits = str.split(/\n\nc/);

    const commit = commits[0].match(/[\da-f]{40}/);
    const author = commits[0].match(/Author:\s([^<]+)?/);
    const comment = commits[0].match(/\n\n\s*(.+)/);

    resCommit = {
      commit: commit[0],
      author: author[1],
      comment: comment[1]
    };

    if (!state.builds.length) {
      // Нужно хотя бы раз запросить билды с сервера
      console.log("Запросите билды с сервера");
      return;
    }

    const hasBuildAlready = !!state.builds.filter(
      build => build.commitHash === resCommit.commit
    ).length;

    if (hasBuildAlready) {
      console.log("Все коммиты уже есть в очереди");
      return;
    }
    // Если билда в очереди нет - эмитим событие, чтобы положить билд в очередь
    myEventEmitter.emit("newCommit", resCommit);
  });
};

module.exports = checkNewCommits;
