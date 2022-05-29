balanceParens = (str) => {
  const res = [];
  const splitStr = str.split("");
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (item === "(") res.push(i);
    else if (item === ")") {
      if (res.length === 0) {
        splitStr[i] = "";
      } else {
        res.pop();
      }
    }
  }
  for (let i = 0; i < res.length; i++) {
    const item = res[i];
    splitStr[item] = "";
  }

  return splitStr.join("");
};

console.log(balanceParens("a(b)c)"));
console.log(balanceParens("()"));
console.log(balanceParens(")("));
// module.exports = { balanceParens };
