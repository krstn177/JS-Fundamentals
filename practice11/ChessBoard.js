function printChess(input) {
  console.log('<div class="chessboard">');
  for (let index = 0; index < input; index++) {
     if (index % 2 == 0) {
         console.log(`  <div>`);
         for (let index = 0; index < input; index++) {
             if (index % 2 == 0) {
                 console.log(`    <span class="black"></span>`);
             } else{
                 console.log(`    <span class="white"></span>`);
             }
             
         }
         console.log(`  </div>`);
       }
       
      else {
        console.log(`  <div>`);
        for (let index = 0; index < input; index++) {
            if (index % 2 == 0) {
                console.log(`    <span class="white"></span>`);
            } else{
                console.log(`    <span class="black"></span>`);
            }
            
        }
        console.log(`  </div>`);
      }
    } 
    console.log("</div>");
}
printChess(4);
