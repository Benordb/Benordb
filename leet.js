// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// let arr = nums;
// let count = nums.length;
// for (let i = 0; i < count; i++) {
//     nums.push(arr[i])
// }
// console.log(nums)
// // console.log(removeDuplicates(nums))
// // nums.splice(4,1)
// // console.log(nums)
// // let b=0;
// // let arr1=0;
// // for(let i=0;i<7;i++){
// //     arr1=arr1*10;
// //     b=x%10;
// //     x=Math.floor(x/10)
// //     arr1=x%10+arr1
// //     console.log(arr1)
// // }
// const arr2 = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]]

// matrik = (arr) => {
//     for (let z in arr) {
//         console.log(arr[z][arr[z].length-1-z])
//     }
// }
// matrik(arr2)
let s = "abccccdd"
s.split('')
for (let j = 0; j < s.length; j++) {
    let count = 1;
    for (let i = j + 1; i < s.length; i++) {
        if (s[j] == s[i]) {
            count++
        }
    }
    console.log(count)
}
// for (let i = 0; i < s.length; i++) {
//     let rev = s.split('').reverse().join('');
//     if (s == rev) {
//         console.log(rev.length)
//     }
//     s=s.substring(1)
//     s=s.substring(0,s.length-1)
//     console.log(s)
// }