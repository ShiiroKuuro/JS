function avgArray(array){
    let sum = 0;
    let avg;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    avg = sum / array.length;
    return avg;
}
let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(avgArray(tableau));