// Check to see if two provided strings are anagrams of eachother. One string is an anagram of other if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuations. Consider capital letters to be the same as lower case.


function anagrams(stringA, stringB) {
    
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    return charMap;
}


console.log(anagrams("rail safety", "fairy tales"));