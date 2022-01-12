function add(x, y) {
    var result = x + y;
    return result;
}

const x = 10, y = 20;
console.log("x + y = "+add(x, y));

function repeadConsoleLog(count) {
    for (let index = 0; index < count; index++) {
        console.log("Repeat : "+(index+1));
    }
}

repeadConsoleLog(3);
repeadConsoleLog(10);