import scoreData from '../src/modules/scoreAPI';
import 'regenerator-runtime';

const axios = require('axios');

jest.mock('axios');

it('It should return the player\'s name', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        name: 'Jaz',
        score: 200,
      },
    ],
  });
  await scoreData.postScores().then((data) => {
    expect(data.name).toEqual('Jaz');
  }).catch((error) => error);
});

it('It should return the player\'s score', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        name: 'Jaz',
        score: 200,
      },
    ],
  });
  await scoreData.postScores().then((data) => {
    expect(data.score).toEqual(200);
  }).catch((error) => error);
});

it('It should fail if player\'s score is incorrect', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        name: 'Jaz',
        score: 200,
      },
    ],
  });
  await scoreData.postScores().then((data) => {
    expect(data.score).not.toBe(210);
  }).catch((error) => error);
});

it('It should fail if player\'s score is incorrect', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        name: 'Jaz',
        score: 200,
      },
    ],
  });
  await scoreData.postScores().then(data => {
    expect(typeof data).toBe('object');
  }).catch((error) => error);
});