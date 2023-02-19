const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return [3, 4]', () => {
    let array = [1, 2, 3, 4, 5, 6]
    assert.deepEqual(middle(array), [3, 4]);
  });

  it('should return [3]', () => {
    let array = [1, 2, 3, 4, 5]
    assert.deepEqual(middle(array), [3]);
  });

  it('should return []', () => {
    let array = [1, 2]
    assert.deepEqual(middle(array), []);
  });

  it('should return []', () => {
    let array = []
    assert.deepEqual(middle(array), []);
  });
});
