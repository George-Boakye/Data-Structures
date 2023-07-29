var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        console.log(stack);
        break;
      case "[":
        stack.push("]");
        console.log(stack);
        break;
      case "{":
        stack.push("}");
        console.log(stack);
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  console.log(stack);

  return stack.length === 0;
};

console.log(isValid("()[]{}"));
