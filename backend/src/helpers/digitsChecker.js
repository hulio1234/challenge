const digitChecker = (num) => {
  let sum = num;
  let k; let flag = 0;
  while (sum > 0) {
    k = sum % 10;
    if (k % 2 === 0) flag += 1;
    sum = Math.trunc(sum / 10);
  }
  return flag;
};

export default digitChecker;
