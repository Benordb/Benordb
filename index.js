// // const SumArr = (arr) => {
// //     let sum = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         sum = sum + arr[i];
// //     }
// //     return sum;
// // }
// // const SumArr0 = (arr) => {
// //     let sum = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] > 0) {
// //             sum += arr[i];
// //         }
// //     }
// //     return sum;
// // }
// // const Min=(arr)=>{
// // let min=arr[0];
// // for(let i=0;i<arr.length;i++)
// //   {
// //     if(arr[i]<min){
// //       min=arr[i];
// //     }
// //   }
// //   return min
// // }
// // const list = [-20, -2, -4, -2, -7]
//ben
// // const MaxIndex = (arr) => {
// //     let max = arr[0];
// //     let index;
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] >= max) {
// //             max = arr[i]
// //             index = i;
// //         }
// //     }
// //     return index
// // }
// // console.log(SumArr(list))
// // console.log(SumArr0(list))
// // console.log(Min(list))
// // console.log(MaxIndex(list))

// // 1. Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа
// const list1 = [20, 2, 24, 2, 7]
// Reverse = (arr) => {
//     const revList = [];
//     for (let i = 0; i < arr.length; i++) {
//         revList.push(arr[arr.length - 1 - i])
//     }
//     return revList;
// }
// console.log(Reverse(list1))
// // 2. Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа
// const list2 = [20, 2, 24, 2, 7]
// Bro = (arr) => {
//     let countBro = 0;
//     if (arr[0] > arr[1]) {
//         countBro++
//     }
//     if (arr[arr.length - 1] > arr[arr.length - 2]) {
//         countBro++
//     }
//     for (let i = 1; i < arr.length - 1; i++) {
//         if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
//             countBro++
//         }
//     }
//     return countBro
// }
// console.log(Bro(list2))
// // 3. Өгөгдсөн массивийн бүх хосыг хэвлэ
// const list3 = [20, 2, 24, 2, 7]
// Couple = (arr, n) => {
//     const couple = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let l = i+1; l < arr.length; l++) {
//             const cople = [arr[i], arr[l]]
//             couple.push(cople)

//         }
//     }
//     return couple
// }
// console.log(Couple(list3))
// // 4. Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол
// const list4 = [20, 2, 24, 2, 7]
// let n = 26;
// CoupleCount = (arr, n) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let l = i+1; l < arr.length; l++) {
//             if (arr[i] + arr[l] == n) {
//                 count++
//             }
//         }

//     }
//     return count
// }
// console.log(CoupleCount(list4, n))
// // 5. Өгөгдсөн 2 массивийн огтлолцлыг ол
// const list51 = [20, 24, 2, 8, 7]
// const list52 = [2, 24, 10, 28, 7]
// Inter = (arr, arr1) => {
//     let countBro = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let l = 0; l < arr1.length; l++) {
//             if (arr[i] == arr1[l]) {
//                 countBro.push(arr[i])
//             }
//         }
//     }
//     return countBro
// }
// console.log(Inter(list51, list52))
// // 6. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
// const list6 = [-20, 2, -24, -2, 7]
// Negative = (arr) => {
//     const list = [];
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] < 0) {
//     //         list.push(arr[i])
//     //     }
//     // }
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] > 0) {
//     //         list.push(arr[i])
//     //     }
//     // }
//     for (let i = 0; i < arr.length; i++) {
//         let s=arr[i];
//         if(s>arr[i+1]){
//             arr[i]=arr[i+1]
//             arr[i+1]=s
//         }
//     }
//     return arr
// }
// console.log(Negative(list6))
// // 7. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол
// const list7 = [7, 5, 9, 15, 11]
// Missing = (arr) => {
//     let m = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let s=arr[i];
//         if(s>arr[i+1]){
//             arr[i]=arr[i+1]
//             arr[i+1]=s
//         }
//     }
//     let count = arr[1] - arr[0]
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] !== arr[i + 1] - count) {
//             m = arr[i] + count;
//         }
//     }
//     return m
// }
// console.log(Missing(list7))

// 1. Массив болон тоо өгөгдөв. Өгөгдсөн тоо массив байгаа бол дугаарыг нь, байхгүй бол -1 буцаа

Negative = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return i;
        }
    }
    return -1;
}

// 2. Өгөгдсөн массивын элементүүдийг хойш нь нэг цикл шилжилт хий. Өөрөөр хэлбэл 1-рийг 2-рт, 2-рыг 3-рт, гэх мэт сүүлийн элементийг 1-рт тус тус шилжүүл.
//     Жич: 1 2 3 4 5 -> 5 1 2 3 4

NextArr = (arr) => {
    let next = 0;
    let z = 0;
    for (let i = 0; i < arr.length; i++) {
        next = arr[i];
        arr[i] = z;
        z = next;
        if (arr.length > i) {
            arr[0] = z;
        }
    }
    return arr
}
NextArr1 = arr => {
    let temp = 0;
    for (let i = arr.length - 1; i > 0; i--) {
        temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }
    return arr
}
console.log(NextArr([0, 1, 2, 3, 4]))
console.log(NextArr1([0, 1, 2, 3, 4]))
// 3. Өгөгдсөн массив өсөх эрэмбээр байвал true үгүй бол false буцаа

Grow = (arr) => {
    let count = arr[1] - arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1] - 1) {
            return false
        }
    }
    return true
}
console.log(Grow([1, 2, 3, 4, 6]))
// 4. 
//     HackerLand University has the following grading policy:
//         - Every student receives a  in the inclusive range from  to .
//         - Any  less than  is a failing grade.
//     Sam is a professor at the university and likes to round each student's  according to these rules:
//     If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
//     If the value of  is less than , no rounding occurs as the result will still be a failing grade.
//     Examples:
//     84 - round to  (85 - 84 is less than 3)
//     28 - do not round (result is less than 40)
//     57 - do not round (60 - 57 is 3 or higher)
//     Given the initial value of  for each of Sam's  students, write code to automate the rounding process.
University = (grade) => {
    if (grade > 0 && grade <= 100) {
        if (grade == 100) {
            return `${grade} - ${grade} congratulation🥳 University has very very easy🤣🥳🔥`
        } else if (grade < 40) {
            return "result is less than 40"
        } else if (grade % 5 < 3) {
            return `${grade + 5 - grade % 5} - ${grade} is 3 or higher`
        } else {
            return `${grade + 5 - grade % 5} - ${grade} is less than 3`
        }
    }
    return "grade range is 0-100"
}

console.log(University(100))
Univ = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 40) {
            arr[i] = arr[i]
        } else if ((arr[i] % 5) >= 3) {
            arr[i] = arr[i] + 5 - arr[i] % 5
        }
    }
    return arr
}
console.log(Univ([87, 77, 3, 99, 90, 91]))
// Mix=(arr)=>{
//     min=arr[0];
//     max=arr[0];
//     mix=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<min){
//             min=arr[i]
//         }
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     mix=min+max;
//     return mix;
// }
// console.log(Mix([76,74,3,5]))

// switchs = () => {
//     switch (nums) {
//         case "bb":
//         case "bb":
//             return "bba";
//         case "tt":
// case "tt":
//             return "tta";
//         default:
//             return nums;
//     }
// }
// for (let i = 0; i < 10; i++) {
//     if (i == 3) continue;
//     if (i == 8) break;
//     console.log(i)
// }
const list = [5, 4, 3, 2, 9];
list.reverse().forEach((el, index) => { console.log(el, index) })
let max = list[0];
list.forEach((n) => { if (max < n) max = n })
list.forEach((n) => { if (max < n) max = n })
console.log(max)




const func = (consle) => {
    console.log(consle)
}
const callback = (call) => {
    call("Hello")
}
callback(func)
useMap = (grade) => {
    return grade.map((n) => n % 5 < 3 ? n = (n + 5 - n % 5) : n)
}
console.log()
let inde = 0;
console.log(useMap([56, 43, 41, 99]).filter((el, index) => el % 2 === 0 ? inde = index : false))

// Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.
const arr = [-8, 598, 4, -3, -73, 3, 2, 9];
// console.log(arr.reduce((n, m) => n + m, 0))
// Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.
// console.log(arr.reduce((n, m) => {
//     console.log(`n==${n}`)
//     console.log(`m==${m}`)
//     if (m > 0) {
//         return m + n
//     }
//     return n
// }, 0))
// Өгөгдсөн массивын хамгийн бага элементийг ол.
min = arr[0]
arr.map((n) => n < min ? min = n : n)
console.log(min)
// Өгөгдсөн массивын хамгийн их элемент хэд дэх нь вэ? Хэрэв хамгийн их элементийн тоо 1-ээс олон бол бага дугаарыг нь хэвлэнэ.
max = 0
arr.map((n, index) => arr[max] < n ? max = index : n)
console.log(max)
// 1. Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа
console.log(arr.reverse())
// 2. Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа

// 3. Өгөгдсөн массивийн бүх хосыг хэвлэ

// 4. Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол
// 5. Өгөгдсөн 2 массивийн огтлолцлыг ол
// 6. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул
// 7. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол
const arr3 = [-3,-1,0,1, 2, 3, 4,5, 6, 7]
let too = 0;
console.log(arr3.filter((n, index) => {
    if (arr3.length-1==index) {
        return false
    } else if (n + 1 !== arr3[index + 1]) {
        too = n
        return true
    }
    return false
}))
console.log(too+1)

//forEach() map()-үйлдэл хийгээд тэр массиваа буцаана reduce()утга буцаана үйлдэл хийгэд filter()-