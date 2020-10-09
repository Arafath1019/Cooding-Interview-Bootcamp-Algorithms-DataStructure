// Given a string, return the character that is most commonly used in the string.


function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxChar("abccccccd"));