function distance(x1, y1, x2, y2) {
  let result = 0;
  /* if (x1>x2) {
        if (y1 > y2) {
            result = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2))
        } else if(y2>y1){
            result = Math.sqrt((x1-x2)*(x1-x2) + (y2-y1)*(y2-y1))
        } else {
            result = x1 - x2;
        }
    } else if (x2>x1) {
        if (y1 > y2) {
            result = Math.sqrt((x2-x1)*(x2-x1) + (y1-y2)*(y1-y2))
        } else if(y2>y1){
            result = Math.sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1))
        } else {
            result = x2 - x1;
        }
    } else {
        result = Math.abs(y1-y2)
    }
    */
  result = Math.sqrt(
    Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2)
  );
  console.log(result);
}
distance(2, 4, 5, 0);
