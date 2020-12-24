/* eslint-disable func-names */

import scoreData from './scoreAPI';

const Board = (function () {
  const sortData = (data) => {
    const arr = data;
    const len = arr.length;
    for (let i = 0; i < len; i += 1) {
      for (let j = 0; j < len - 1; j += 1) {
        if (arr[j].score < arr[j + 1].score) {
          const tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    return arr;
  };

  const board = (arr) => {
    const board = document.querySelector('.board');

    arr.slice(0, 5).forEach((item, i) => {
      const ranking = document.createElement('span', { class: 'ranking' });
      const name = document.createElement('span', { class: 'name' });
      const score = document.createElement('span', { class: 'score' });
      ranking.textContent = i + 1;
      name.textContent = item.user;
      score.textContent = item.score;
      board.appendChild(ranking);
      board.appendChild(name);
      board.appendChild(score);
    });
  };

  const create = () => {
    let data;
    scoreData.getScores().then((res) => {
      data = sortData(res.result);

      board(data);
    });
  };

  return { create };
}());

export default Board;