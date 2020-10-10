function capitalization(str) {
    let arr = str.split(" ");

    let output = [];
    for (let item of arr) {
        let temp_arr = item.split("");
        temp_arr[0] = temp_arr[0].toUpperCase();
        temp_arr = temp_arr.join("");
        output.push(temp_arr);
    }
    return output.join(" ");
}

console.log(capitalization("look, it is working"));
