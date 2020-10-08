function reverse(str) {
    return str.split("").reduce((reversed, character) => {
        return character + reversed;
    }, "");
}

console.log(reverse("hello"));