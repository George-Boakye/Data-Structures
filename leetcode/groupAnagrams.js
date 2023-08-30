var groupAnagrams = function (strs) {
  const hashMap = new Map();
  const newArray = [];

  function sortWord(value) {
    return [...value].sort().join("");
  }

  for (let word of strs) {
    let sortedWord = sortWord(word);
    if (hashMap.has(sortedWord)) {
      hashMap.get(sortedWord).push(word);
    } else {
      hashMap.set(sortedWord, [word]);
    }
  }

  for (let key of hashMap.keys()) {
    newArray.push(hashMap.get(key));
  }
  return newArray;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
