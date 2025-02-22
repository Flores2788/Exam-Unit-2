function square(number) {
    return number * number;
}

function americanToNormal(inches) {
    const mmForAnInch = 25.4;
    return inches * mmForAnInch;
}

function squareRoot (number) {
    return Math.sqrt(number);
}

function cubeRoot (number) {
    return Math.cbrt(number);
}

function areaCircle(radius) {
    return Math.PI * square(radius);
}

const areaofmyball = areaCircle(5);
console.log(areaofmyball);

function greet(name) {
    return `Hello ${name}`;
}

const sayhi = greet('Crismo');
console.log(sayhi);