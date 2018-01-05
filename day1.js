// input is number or string representing number
function solveReverseCaptcha1(input) {
    console.log('inside', input);
    if (!input) return;

    if (typeof input != 'number' && typeof input != 'string') {
        return;
    }
    // we want to add up all digits that are repeated by the next digit (and input is circular/wraps around)
    var sum = 0;
    input = input.toString(); // to guarantee it's a string so can treat it like array of digits as char's
    var lastDigit = input.charAt(0);
    var currentDigit;
    for (var i = 1; i <= input.length; i++) {
        if (i == input.length) {
            currentDigit = input.charAt(0);
        } else {
            currentDigit = input.charAt(i);
        }
        if (currentDigit == lastDigit) {
            sum+= Number(currentDigit);
        }
        lastDigit = currentDigit;
    }
    return sum;
}

process.argv.forEach(function (val, index, array) {
    if (index == 2) {
        console.log(solveReverseCaptcha1(val));
    }
});