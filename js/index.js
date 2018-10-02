function fibRecursive(n) {
    if (n < 2) {
        return n
    }
    return fibRecursive(n - 1) + fibRecursive(n - 2)
}

function fibCycle(n) {
    let x = 1;
    let y = 1;
    let res = 0;
    if (n <= 2) {
        return 1;
    }
    for (let i = 0; i < n - 2; i++) {
        res = x + y;
        console.log('res:' + res);
        x = y;
        console.log('x' + x);
        y = res;
        console.log('y' + y);
    }
    return res;
}

function fibMassive(n) {
    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];

    }
    return fib[n - 1];
}
cycle.onclick = function() {
    let display = document.getElementById("num").value;
    document.getElementById("res").innerHTML = fibCycle(display);
};
recurcive.onclick = function() {
    let display = document.getElementById("num").value;
    document.getElementById("res").innerHTML = fibRecursive(display);
};
