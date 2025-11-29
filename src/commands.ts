// game commands handler

const gameCommands = {
  start: function () {
    console.log('Game has started!');
  },
  stop: function () {
    console.log('Game has stopped!');
  },
  pause: function () {
    console.log('Game is paused!');
  },
  resume: function () {
    console.log('Game is resumed!');
  },
};

module.exports = gameCommands;
