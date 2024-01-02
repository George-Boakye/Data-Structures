/**
 * Returns an array of arrays containing unique numbers from the input array.
 * @param {number[]} nums - The input array of numbers.
 * @return {number[][]} - The array of arrays containing unique numbers.
 */
function findMatrix(nums) {
  const generalArray = [];

  // Continue looping until there are no more numbers in the input array
  while (nums.length !== 0) {
    const tempArray = [];
    const uniqueSet = new Set();

    // Iterate through the remaining numbers in the input array
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];

      // Check if the number is unique
      if (!uniqueSet.has(num)) {
        uniqueSet.add(num);
        tempArray.push(num);
      }
    }

    // Add the temporary array to the general array
    generalArray.push(tempArray);

    // Remove the numbers in the unique set from the input array
    for (const num of uniqueSet) {
      const index = nums.indexOf(num);
      if (index !== -1) {
        nums.splice(index, 1);
      }
    }
  }

  return generalArray;
}

console.log(findMatrix([1, 3, 4, 1, 2, 3, 1]));
