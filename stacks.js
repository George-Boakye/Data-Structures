var calPoints = function (operations) {
  let record = [];
  let prev1 = 0;
  let prev2 = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "+") {
      prev1 = record[record.length - 1];
      prev2 = record[record.length - 2];
      record.push(Number(prev1) + Number(prev2));
    } else if (operations[i] === "D") {
      const prev1 = record[record.length - 1];
      record.push(Number(prev1) * 2);
    } else if (operations[i] === "C") {
      record.pop();
    } else if (
      operations[i] !== "+" ||
      operations[i] !== "C" ||
      operations[i] !== "D"
    ) {
      record.push(Number(operations[i]));
    }
  }
  if (!record.length) {
    return 0;
  }

  return record.reduce((a, b) => Number(a) + Number(b), 0);
};

console.log(calPoints(["5", "2", "C", "D", "+"]));
