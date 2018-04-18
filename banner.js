function printBanner(bannerText) {
    var bannerWidth = bannerText.length + 4;
    for (var row = 0; row < 3; row++) {
        var printedRow = '';
        if (row != 1) {
            for (var col = 0; col < bannerWidth; col++) {
                printedRow += '*';
            }
        } else {
            printedRow = "* " + bannerText + " *";
        }
        console.log(printedRow);
    }
}

printBanner("I Love Bananas");