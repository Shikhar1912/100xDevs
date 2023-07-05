let i = 1;

const interval = function () {
    setTimeout(function () {
        console.clear();
        console.log(i);
        i++;
        interval();
    },1000)
}

interval();
