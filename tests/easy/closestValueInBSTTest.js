const assert = require('assert');
const { closestValueInBSTRecursive, closestValueInBSTIterative } = require('../../src/easy/closestValueInBST');

const BST = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 2,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 15,
    left: {
      value: 13,
      left: null,
      right: {
        value: 14,
        left: null,
        right: null,
      },
    },
    right: {
      value: 22,
      left: null,
      right: null,
    },
  },
};

describe('closest value in BST recursive', () => {
  it('returns closest value to 12', () => {
    assert.equal(13, closestValueInBSTRecursive(BST, 12));
  });
});

describe('closest value in BST iterative', () => {
  it('returns closest value to 12', () => {
    assert.equal(13, closestValueInBSTIterative(BST, 12));
  });
});
