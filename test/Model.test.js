import Model from '../src/Model';

describe('Model', () => {
  it('It should set userName', () => {
    Model.userName = 'Jessy';
    expect(Model.userName).toBe('Jessy');
  });
  it('It should throw an error if username is different', () => {
    Model.userName = 'Atkinson';
    expect(Model.userName).not.toBe('Akinson');
  });
  it('It should set the user\'s score ', () => {
    Model.score = '320';
    expect(Model.score).toBe('320');
  });
  it('It should throw an error if user\'s score is incorrect ', () => {
    Model.score = '320';
    expect(Model.score).not.toBe('220');
  });
  it('It should set user\'s name ans score in fullData object ', () => {
    Model.fullData = { user: 'Delph', score: 190 };
    expect(Model.fullData).toStrictEqual({ user: 'Delph', score: 190 });
  });
  it('It should throw an error if user\'s details are incorrect ', () => {
    Model.fullData = { user: 'Delph', score: 190 };
    expect(Model.fullData).not.toStrictEqual({ user: 'Delph', score: 109 });
  });
});