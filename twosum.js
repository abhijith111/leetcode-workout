var nums = [2, 7, 11, 15];
var target = 9;
var buffer = 0;


for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            console.log(i, j);
            process.exit();
        }
    }
}

