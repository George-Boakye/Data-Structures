/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let newArray = [];
  let counter = 0;

  nums.forEach((num) => {
    if (num === 1) {
      counter++;
    } else if (num === 0) {
      newArray.push(counter);
      counter = 0;
    }
  });

  newArray.push(counter);

  console.log(newArray);
  return Math.max(...newArray);
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
