function rangeOfNumbers(startNum, endNum) {
  if (startNum >= endNum + 1) {
    return [];
  } else {
    const num = rangeOfNumbers(startNum + 1, endNum);
    num.unshift(startNum);
    return num;
  }
}

console.log(rangeOfNumbers(2, 4));
