var x = "";
var num = 0;
let i=0;

while (i < 17) {
    num = Math.pow(2, i);
    x = x + (num + "- ");
    i++;
}

console.log(x);