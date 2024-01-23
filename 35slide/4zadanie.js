let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
let time = (hour < 10 ? '0' + hour : hour) + ':' +
            (minute < 10 ? '0' + minute : minute) + ':' +
            (second < 10 ? '0' + second : second);

console.log(time);