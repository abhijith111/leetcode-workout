var arr = [5, 0, 0, 0];
var hour = 0;
var minute = 0;
var minuteFlag = 0;
var hourFlag = 0;
var hourTemp;
var minuteTemp;

for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length-1; j > 0; j--) {
        hourTemp = parseInt(arr[i] + "" + arr[j]);
        if (hourTemp <= 23 && i != j) {
            hour = hourTemp;
            hour += "";
            hourFlag = 1;
            for (var k = 0; k < arr.length; k++) {
                for (var f = arr.length-1; f > 0; f--) {
                    minuteTemp = parseInt(arr[k] + "" + arr[f]);
                    if (
                        minuteTemp <= 59 &&
                        k != i &&
                        k != j &&
                        f != i &&
                        f != j &&
                        k != f
                    ) {
                        minute = minuteTemp;
                        minute += "";
                        minuteFlag = 1;
                    }
                }
            }
        }
    }
}

if (hour < 10) hour = "0" + hour;
if (minute < 10) minute = "0" + minute;
if (hourFlag != 1 || minuteFlag != 1) {
    console.log("");
} else {
    console.log(hour + ":" + minute);
}
