//revers
function reverse(str){
    return str.split("").reverse().join("");
}
console.log(reverse('Revers'));

//poli
function polindrom(str){
    return str === str.split("").reverse().join('')
}
console.log(polindrom("kak"))
console.log(polindrom("kaka"))

//num
let nums = [1, 2, 3, 4, 5, 6];
function isEven(number) {
    return number % 2 === 0;
}
let evenNums = nums.filter(isEven).reverse().join('');
console.log(evenNums)

