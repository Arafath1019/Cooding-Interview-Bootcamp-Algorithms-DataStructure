function palindromes(str) {
    return str.split("").every((char, i) => {
        return char === str[str.length - i - 1];
    });
}


console.log(palindromes("abba"));