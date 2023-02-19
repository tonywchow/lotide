const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should return [\'Lighthouse\', \'Labs\']', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });

  it('should return [\'2\', \'3\']', () => {
    const words = ["1", "2", "3"];
    assert.deepEqual(tail(words), ['2', '3']);
  });



});