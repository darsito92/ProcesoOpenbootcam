//factorial break
let factorial = 1;
let i = 1;
while (i <= 10) {
  factorial *= i;
  if (i === 10) {
    break;
  }
  i++;
}
console.log(factorial);