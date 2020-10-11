function count_vowels(str) {
    let count = 0;

    const vowel = "aeiou";

    for (let char of str.toLowerCase()) {
        if (vowel.includes(char)) {
            count += 1;
        }
    }
    return count;
}

console.log(count_vowels("Why do you ask?"));