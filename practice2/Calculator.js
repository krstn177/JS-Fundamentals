function calculate(n1, char, n2) {
  switch (char) {
    case "+":
      console.log((n1 + n2).toFixed(2));
      break;
    case "-":
        console.log((n1 - n2).toFixed(2));
      break;
    case "*":
        console.log((n1 * n2).toFixed(2));
      break;
    case "/":
        console.log((n1 / n2).toFixed(2));

      break;

    default:
      break;
  }
}
calculate(121,'+',2)
