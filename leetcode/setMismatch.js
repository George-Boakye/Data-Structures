/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const n = nums.length;
  const numSet = new Set(nums);
  let duplicate, missing;

  for (let i = 1; i <= n; i++) {
    if (!numSet.has(i)) {
      missing = i;
    } else if (nums.indexOf(i) !== nums.lastIndexOf(i)) {
      duplicate = i;
    }
  }

  return [duplicate, missing];
};

console.log(findErrorNums([1, 2, 2, 4]));
