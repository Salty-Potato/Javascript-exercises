function printBox(width, height) {
    for (var row = 0; row < height; row++) {
        var printedRow = '';
        if (row == 0 || row == height-1) {
            for (var col = 0; col < width; col++) {
                printedRow += '*';
            }
        } else {
            for (var col = 0; col < width; col++) {
                if (col == 0 || col == width-1) {
                    printedRow += '*';
                } else {
                    printedRow += ' ';
                }
            }
        }
        console.log(printedRow);
    }
    return;
}

printBox(7, 4);
