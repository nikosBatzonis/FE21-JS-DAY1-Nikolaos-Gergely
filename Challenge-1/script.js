let arr = [
    ["Vienna"],
    ["is"],
    ["a"],
    ["nice"],
    ["city"]
];

console.log(arr);

console.log(arr[0][0]);
console.log(arr[1][0]);
console.log(arr[2][0]);
console.log(arr[3][0]);
console.log(arr[4][0]);

let arr1 = [
    ["Vienna"],
    [" ", "is"],
    [" ", " ", "a"],
    [" ", " ", " ", "nice"],
    [" ", " ", " ", " ", "city"]
];

console.log(arr1);

console.log(arr1[0][0]);
console.log(arr1[1][1]);
console.log(arr1[2][2]);
console.log(arr1[3][3]);
console.log(arr1[4][4]);

document.write(arr1[0][0] + " " + arr1[1][1] + " " + arr1[2][2] + " " + arr1[3][3] + " " + arr1[4][4]);

