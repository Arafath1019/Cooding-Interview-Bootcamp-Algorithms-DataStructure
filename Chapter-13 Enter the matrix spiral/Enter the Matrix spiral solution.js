function matrix(n) {
    let result = [];
    for (let i = 0; i < n; i++){
        let temp = [];
        for (let j = 0; j < n; j++){
            let a = Math.random() * 10;
            a = Math.round(a);
            temp.push(a);
        }
        result.push(temp);
    }

    return result;
}

console.log(matrix(4));