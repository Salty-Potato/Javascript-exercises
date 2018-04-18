function leetSpeak(entry) {
    var upper = entry.toUpperCase();
    var input = upper.split("");
    var leet = []
    for (var count = 0; count < input.length; count++) {
        if (input[count] == "A") {
            leet.push("4");
        } else if (input[count] == "E") {
            leet.push("3");
        } else if (input[count] == "G") {
            leet.push("6");
        } else if (input[count] == "I") {
            leet.push("1");
        } else if (input[count] == "O") {
            leet.push("0");
        } else if (input[count] == "S") {
            leet.push("5");
        } else if (input[count] == "T") {
            leet.push("7");
        } else {
            leet.push(input[count]);
        }
    }
    var answer = leet.join('');
    console.log(answer);
}
leetSpeak('Armadillos are cool')