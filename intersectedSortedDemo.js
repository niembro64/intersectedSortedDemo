const intersect = (arrLeft, arrRight) => {
  const counterLeft = [];
  const counterRight = [];
  const returnArr = [];
  for (let i = 0; i < 10; i++) {
    counterLeft[i] = counterRight[i] = returnArr[i] = 0;
  }

  for (let i = 0; i < arrLeft.length; i++) {
    counterLeft[arrLeft[i]] += 1;
  }
  for (let i = 0; i < arrRight.length; i++) {
    counterRight[arrRight[i]] += 1;
  }
  p(counterLeft);
  p(counterRight);

  for (let i = 0; i < 10; i++) {
    if (counterLeft[i] > counterRight[i]) {
      returnArr[i] = counterRight[i];
    } else {
      returnArr[i] = counterLeft[i];
    }
  }
  return returnArr;
};

const p = (a) => {
  console.log(a);
};
var left = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var right = [0, 1, 1, 1, 9, 9, 9, 9, 9, 9];

console.log(intersect(left, right));
