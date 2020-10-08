let reversed = "";

function reverse(str) {
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

console.log(reverse("Hello"));