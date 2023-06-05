function getIndexOf(number, numbers) {
    let index = -1;
    numbers.forEach((element, i) => {
        if (number === element) {
            index = i;
        }
    });
    return index;
}

let numbers = [1, 5, 8, 11, 22, 19, 33, 6, 12, 15, 0, -4, -2, -15, -5];

function inputNumberToFind() {
    let inputNumber = 0;
    do {
        inputNumber = Number(prompt("Input a integer: "));
    } while (!Number.isInteger(inputNumber))
    return inputNumber;
}

function main() {
    let inputNumber = inputNumberToFind();
    let index = getIndexOf(inputNumber, numbers);
    document.write("Numbers array: " + numbers.toString())
    document.write("</br>");
    document.write("Number to find: " + inputNumber);
    document.write("</br>");

    if (index == -1) {
        document.write(`Numbers array doesn't include ${inputNumber}`)
    } else {
        document.write(`Number ${inputNumber} has index ${index}`)
    }
}
