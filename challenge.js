const any = (obj = {}, path, value) => {
  obj.path = value;
  return obj;
};

const myObj = {
  name: "George",
};

console.log(any(myObj, "age", 12));
