function palindrome(mot) {
    for (let i = 0; i < mot.length/2; i++) {
        if (mot[i] !== mot[mot.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
let tableau = "kayak";
console.log(palindrome(tableau));