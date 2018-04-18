
function printSquare(size) {
   var printedRow = ''; 
   for (var row = 0; row < size; row++) {
       
       for (var col = 0; col < size; col++) {
           printedRow += '*';
       }
       printedRow += '\n';
   }
   console.log(printedRow);
}

printSquare(5);