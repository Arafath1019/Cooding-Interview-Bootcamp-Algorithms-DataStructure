
// Given an integer, return an integer that is the reverse ordering of numbers.


function reverseInt(n) {
    const sign = Math.sign(n);
    const reversed = n.toString().split("").reverse().join("");
    const number = parseInt(reversed);

    if (n < 0) {
        return number * sign;
    }

    return number;
}


console.log(reverseInt(-10));