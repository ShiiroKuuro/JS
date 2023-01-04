var x = "";
var num = 0;

for (let i = 0; i < 17; i++) {
    num = Math.pow(2, i);
    x = x + (num + "- ");
}

console.log(x);