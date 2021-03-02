let arr = [2, 0, 6, 6];
let hour = 0;
var min1 = 0;
var min2 = 0;
var min = 0;
var hFlag = 0;
var mFlag = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        var temp = parseInt(arr[i] + "" + arr[j]);
        if (temp <= 23 && i != j) {
            if (hour <= temp) {
                hour = temp;
                hFlag = 1;
            }
        }
    }
}

hour += "";

console.log(arr);

if (hour < 10) {
    hour = "0" + hour;
}

for (var i = 0; i < arr.length; i++) {
    if (arr[i] == hour[0]) {
        arr.splice(i, 1);
        break;
    }
}
for (var i = 0; i < arr.length; i++) {
    if (arr[i] == hour[1]) {
        arr.splice(i, 1);
        break;
    }
}

console.log(arr);

min1 = parseInt(arr[0] + "" + arr[1]);
min2 = parseInt(arr[1] + "" + arr[0] + "");

console.log(min1, min2);

if (min1 <= min2 && min2 <= 59) {
    min = min2;
    mFlag = 1;
} else if (min1 <= 59) {
    min = min1;
    mFlag = 1;
} else if (min2 <= 59 && min2 < min1) {
    min = min2;
    mFlag = 1;
}

if (min < 10) {
    min = "0" + min;
}

if (hFlag === 1 && mFlag === 1) {
    console.log(hour + ":" + min);
} else {
    console.log("");
}
