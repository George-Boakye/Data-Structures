/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const hashMap = new Map();
  const newArray = s.split("").sort();

  newArray.forEach((element) => {
    if (hashMap.has(element)) {
      let existingKeyValue = hashMap.get(element);
      hashMap.set(element, existingKeyValue + 1);
    } else {
      hashMap.set(element, 1);
    }
  });
  //   hashMap.forEach((value, key) => {
  //     console.log(value, key);
  //     for (let i = 0; i < value; i++) {
  //       finalArray.push(key);
  //     }
  //   });
  const ff = Array.from(hashMap.entries()).reduce((acc, curr) => {
    return [...acc];
  }, []);
  console.log(Array.from(hashMap.entries()));
};

frequencySort("Aabb");
