const arr = [23, 4, 78, 5, 2, 65, 88, 40, 39, 4];
console.log(arr)
arr.push(55)
console.log(arr)
arr.unshift(67)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)

//to splice an array
arr.splice(1, 1)
console.log(arr)
// arr.splice(2, 3)
// to reverse an array
arr.reverse()
console.log(arr)

//to sort an array in ascending order
arr.sort(function (a,b){
    return a - b;
})
console.log(arr)

//to sort an array in descending order
arr.sort(function (a,b){
    return b - a;
})
console.log(arr)

//to find
function underFifty(num){
    return num < 50;
}

let val;
// this returns the first number below 50 in the array
val = arr.find(underFifty)
console.log(val)
