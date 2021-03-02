var x = 1534236469;
var y = "";

x += "";
for (var i = x.length - 1; i >= 0; i--) {
    y += "" + x[i];
}
if (y[y.length - 1] === "-") {
    y = parseInt(y) * -1;
}
if(y <= -2147483648 || y> 2147483648){
    return 0;
}else{
    return(y);
}
