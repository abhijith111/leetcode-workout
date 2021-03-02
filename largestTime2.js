var arr = [1, 2, 3, 4];
var temp;
var newArr = [];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (i != j) {
            temp = arr[i] + "" + arr[j];
            newArr.push(temp);
        }
    }
}

for (var i = 0; i < newArr.length; i++) {
    for (var j = 0; j < newArr.length; j++) {
        if(i!=j){
            if(parseInt(newArr[i]) < 24 && parseInt(newArr[j]) < 60 ){
                console.log(newArr[i],newArr);
            }
        }
    }
}
