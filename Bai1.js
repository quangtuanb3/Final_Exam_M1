function quadraticEquation(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Invalid parameter");
        return;
    }
    let delta = b ** 2 - (4 * a * c);
    let x1, x2;
    if (delta < 0) {
        console.log("The equation has no solution");
    } else if (delta === 0) {
        x1 = -b / 2 * a;
        console.log(`The equation has duplicate solutions: x1 = x2 = ${x1}`);
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`The equation has two solutions: x1 = ${x1}; x2 = ${x2}`);
    }
}
quadraticEquation(8, 12, -20);
