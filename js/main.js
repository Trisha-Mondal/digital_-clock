// function reverseString(str) {
//     return str.split("").reverse().join("");;
// }
// console.log(reverseString("hello world");

// function showTime() {
//     var date = new Date();
//     var h = date.getHours();
//     var m = date.getMinutes();
//     var s = date.getSeconds();
//     var session = "AM";
//     if (h == 0) {
//         h = 12;
//     }
//     if (h > 12) {
//         h = h - 12;
//         session = "PM";
//     }
// if (h < 10) {
//     h = "0" + h;
// }
// if (m < 10) {
//     m = "0" + m;
// }
// if (s < 10) {
//     s = "0" + s;
// }
//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;
//     document.getElementById("digitalclock").innerHTML = h + ":" + m + ":" + s + "" + session;
// }
// setTimeout(showTime, 1000);


setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" +
        min + ":" + sec + am_pm;

    document.getElementById("clock")
        .innerHTML = currentTime;
}

showTime();