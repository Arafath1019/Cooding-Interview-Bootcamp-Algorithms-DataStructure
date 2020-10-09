function palindromes(str) {
    const reversed = str.split("").reverse().join("");

    if (reversed === str) {
        return true;
    }


    return false;
}

console.log(palindromes("abba"));