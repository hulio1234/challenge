const reverseFunc = (num) => {
  let number = num;
  let j; let
    reverse = 0;
  while (number > 0) {
    j = (number % 10);
    reverse = (reverse * 10) + j;
    number = Math.trunc(number / 10);
  }
  return reverse;
};

export default reverseFunc;
