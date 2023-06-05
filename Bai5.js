function compareTriplets(a, b) {
    let score = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            score[0]++;
        } else if (a[i] < b[i]) {
            score[1]++;
        }
    }
    return score;
}

let a = [1, 1, 7];
let b = [3, 6, 10];
let score = compareTriplets(a, b);
console.log(score.toString())