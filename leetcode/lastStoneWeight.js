/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  if (stones.length === 0) {
    return 0;
  }

  while (stones.length !== 1) {
    let indexOfFirstMax = stones.indexOf(Math.max(...stones));
    let elementOfFirstMax = stones.splice(indexOfFirstMax, 1);

    let indexOfSecondMax = stones.indexOf(Math.max(...stones));
    let elementOfSecondMax = stones.splice(indexOfSecondMax, 1);

    let crashedResult = Math.abs(elementOfFirstMax - elementOfSecondMax);

    stones.push(crashedResult);
  }

  return stones[0];
};
