var groupAnagrams = function (strs) {
  const hashMap = new Map();

  strs.forEach((word) => {
    let sortedWord = word.split("").sort().join("");
    if (hashMap.has(sortedWord)) {
      hashMap.get(sortedWord).push(word);
    } else {
      hashMap.set(sortedWord, [word]);
    }
  });
  return Array.from(hashMap.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
