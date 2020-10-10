function steps(n) {
    for (let i = 0; i < n; i++){
        temp = "";
        for (let j = 0; j < n; j++){
            if (j <= i) {
                temp += "#";
            } else {
                temp += " ";
            }
        }

        console.log(temp);
    }
}

steps(10);