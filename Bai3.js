let vowelsObj = { a: 0, o: 0, e: 0, u: 0, i: 0 };
let string = "aoeuiaoeui bbbbbbsdfsd"

function countVowel(string) {
    let total = 0;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < Object.keys(vowelsObj).length; j++) {
            if (string[i] === Object.keys(vowelsObj)[j]) {
                Object.values(vowelsObj)[j] += 1;
                total += 1;
            }
        }
    }
    if (total == 0) {
        return false;
    } else {
        return total;
    }
}

function main() {
    let stringToCount = inputStringToCount();
    let total = countVowel(stringToCount);

    document.write(`Input string: ${stringToCount}`)
    document.write("</br>");

    if (total) {
        document.write("Total vowel in string : " + total);
    } else {
        document.write("The string doesn't include vowel");
    }

}

function inputStringToCount() {
    return inputNumber = prompt("Input a string: ");
}