const assert = require('assert');
const twoNumbersSum = require('../../src/easy/twoNumbersSum');

describe('two numbers sum', () => {
  const nums = [3, 5, -4, 8, 11, -1, 6];
  it('returns array of two numbers', () => {
    assert.deepStrictEqual([-1, 11], twoNumbersSum(nums, 10).sort());
  });

  it('returns empty array if no result was found', () => {
    assert.deepStrictEqual([], twoNumbersSum(nums, 200).sort());
  });

  it('returns empty array if nums parameter is not array', () => {
    assert.deepStrictEqual([], twoNumbersSum('wrong', 200).sort());
  });

  it('returns empty array if expected parameter is not a number', () => {
    assert.deepStrictEqual([], twoNumbersSum(nums, 'not a number').sort());
  });
});
