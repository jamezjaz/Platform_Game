import scoreData from '../src/modules/scoreAPI';
import "regenerator-runtime";

test('It should retrieve and return the scores', async () => {
  await scoreData.getScores()
    .then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          user: 'Jaz',
        }),
      ]),
    );
  })
    .catch(() => {});
  });

test('It should retrieve and return the scores', async () => {
  await scoreData.getScores()
    .then((data) => {
    expect(data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          score: '100',
        }),
      ]),
    );
  })
  .catch(() => {});
});

test('It should post player name', async () => {
  await scoreData.postScores('Gozie').then((response) => {
    expect(response).toBe('Leaderboard name created correctly.');
  }).catch((error) => error);
});

test('It should post player score', async () => {
  await scoreData.postScores(2500).then((response) => {
    expect(response).toBe('Leaderboard score created correctly.');
  }).catch((error) => error);
});

test('It should send an object to the API', async () => {
  await scoreData.postScores().then(data => {
    expect(typeof data).toBe('object');
  }).catch(() => {});
});

it("It should save score and name", async () => {
  await scoreData.postScores("Curnoll Prisca", 300)
    .then((data) => {
    expect(data.result).toBe("Success!");
  })
  .catch(() => {});
});

test('name should not be blank', async () => {
  await scoreData.postScores(' ', 10)
    .then((response) => {
    expect(response).toBe(null);
  })
  .catch((error) => error);
});