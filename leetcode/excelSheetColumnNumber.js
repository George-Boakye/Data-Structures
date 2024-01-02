/**
 * @param {string} columnTitle
 * @return {number}
 */

var titleToNumber = function (columnTitle) {
  var alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").reduce(
    (acc, [curr], value) => {
      return { ...acc, [curr]: value + 1 };
    },
    {}
  );
  console.log(columnTitle.split(""));

  return columnTitle.split("").reduceRight((accum, cur, index, arr) => {
    return accum + 26 ** (arr.length - 1 - index) * alphabet[cur.toUpperCase()];
  }, 0);
};

console.log(titleToNumber("zy"));
