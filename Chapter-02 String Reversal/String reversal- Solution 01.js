function reverse(str) {
    const arr = str.split('');
    arr.reverse()
    return arr.join("");
}

console.log(reverse("Hello"));