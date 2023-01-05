"use strict" /* Inpede o browser de ignorar algum erro  */

var btn_go = document.querySelector('.go');
var btn_stop = document.querySelector('.stop');
var btn_clear = document.querySelector('.clear');
var hours = document.querySelector('.hours');
var min = document.querySelector('.min');
var second = document.querySelector('.second');
var box = document.querySelector('.box-time');
var infor = document.querySelector('.infor');

var hh = 0;
var mm = 0;
var ss = 0;
var time = 1000;
var cron = 0;

btn_go.addEventListener('click', go);
btn_stop.addEventListener('click', stop);
btn_clear.addEventListener('click', clear);

function go() {
    cron = setInterval(() => { timer() }, time);
}

function stop() {
    clearInterval(cron);
    if (hh == 0 && mm == 0 && ss == 0) {
        infor.innerText = "Before, start stopwatch";
    }
    setTimeout(() => {
        infor.innerText = "";
    }, 3000);

    return;
}

function clear() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    box.innerText = "00:00:00";
}

function timer() {
    ss++;
    if (ss == 60) {
        ss = 0;
        mm++;
        if (mm == 60) {
            mm = 0;
            hh++;
        }
    }

    var format = (hh < 10 ? "0" + hh : hh) + ":" + (mm < 10 ? "0" + mm : mm) + ":" + (ss < 10 ? "0" + ss : ss);
    box.innerText = format;
}
