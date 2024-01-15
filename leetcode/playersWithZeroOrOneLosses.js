/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  let losses = new Map();
  let winners = [];
  let losers = [];

  for (i = 0; i < matches.length; i++) {
    let winner = matches[i][0];
    let loser = matches[i][1];

    if (!losses.has(winner)) {
      losses.set(winner, 0);
    }

    if (losses.has(loser)) {
      losses.set(loser, losses.get(loser) + 1);
    } else {
      losses.set(loser, 1);
    }
  }

  losses.forEach((value, key) => {
    if (value === 0) winners.push(key);
    if (value === 1) losers.push(key);
  });

  winners.sort((a, b) => a - b);
  losers.sort((a, b) => a - b);
  return [winners, losers];
};

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
);
