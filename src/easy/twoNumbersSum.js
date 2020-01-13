const twoNumbersSum = (arr, expected) => {
  if (!expected || !Array.isArray(arr)) return [];
  const nums = {};

  for (let i = 0; i < arr.length; i += 1) {
    const x = arr[i];
    const y = expected - x;
    if (nums[y]) return [x, y];
    nums[x] = true;
  }

  return [];
};

module.exports = twoNumbersSum;
