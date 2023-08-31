var topKFrequent = function (nums, k) {
  let hashMap = new Map();

  nums.forEach((number) => {
    if (hashMap.has(number)) {
      hashMap.set(number, hashMap.get(number) + 1);
    } else {
      hashMap.set(number, 1);
    }
  });

  let numberFrequencyArray = Array.from(hashMap.entries()).map(
    ([num, freq]) => ({
      number: num,
      frequency: freq,
    })
  );

  numberFrequencyArray.sort((a, b) => b.frequency - a.frequency);

  return numberFrequencyArray.slice(0, k).map((entry) => entry.number);
};

console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 1));
