const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return [3, 4]', () => {
    let array = [1, 2, 3, 4, 5, 6]
    assert.deepEqual(middle(array), [3, 4]);
  });
});
