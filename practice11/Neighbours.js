function neighbours(matrix) {
  let equals = 0;
  for (let index = 0; index < matrix.length - 1; index++) {
    let arr = matrix[index];
    let arr1 = matrix[index + 1];
      for (let s = 0; s < arr.length; s++) {
        if (arr[s] == arr1[s] || arr[s] == arr[s+1] || arr1[s] == arr1[s+1]) {
          equals++;
        }
      }
    }
  console.log(equals);
}
neighbours([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
neighbours([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]
);
neighbours([['2', '2', '5', '7', '4'],
            ['4', '0', '5', '3', '4'],
            ['2', '5', '5', '4', '2']]);