const myFunc = (area) => {
  let array = [];
  let holder = 0;
  let tempArea = area;
  if (area <= 0 || area > 1000000) {
    console.log("area is not accepted");
    return;
  }
  while (holder !== area) {
    let a = Math.floor(Math.sqrt(tempArea));
    let b = a * a;
    holder += b;
    array.push(b);
    tempArea -= b;
  }
  console.log(array);
};

myFunc(1000000);
