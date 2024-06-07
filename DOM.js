// const box = document.querySelector(".box");
// const [button1, button2] = document.querySelectorAll("button");
// console.log(button2);
// let num = 0;
// box.addEventListener("click", () => {
//   if (box.style.borderRadius == "50%") {
//     box.style.borderRadius = "16px";
//   } else {
//     box.style.borderRadius = "50%";
//   }
// });
// button1.addEventListener("click", () => {
//   num--;
//   box.textContent = num;
// });
// button2.addEventListener("click", () => {
//   num++;
//   box.textContent = num;
// });

// const box = document.querySelectorAll("body>div>div");
// const rest = document.querySelector("body>:nth-Child(3)");
// const check = document.querySelector("body>:nth-Child(4)");
// let nums = 0;
// let winX = [];
// let winO = [];
// box.forEach((card, index) => {
//   card.addEventListener("click", () => {
//     if (card.textContent !== "") return;
//     if (nums % 2 == 0) {
//       card.textContent = "x";
//       winX.push(index);
//     } else {
//       card.textContent = "o";
//       winO.push(index);
//     }
//     if (winCheck(winX)) {
//       alert("winner");
//     }
//     if (winCheck(winO)) {
//       alert("winner");
//     }
//     nums++;
//   });
// });
// winCheck = (arr) => {
//   if (arr.includes(0) && arr.includes(1) && arr.includes(2)) return true;
//   if (arr.includes(3) && arr.includes(4) && arr.includes(5)) return true;
//   if (arr.includes(6) && arr.includes(7) && arr.includes(8)) return true;
//   if (arr.includes(0) && arr.includes(3) && arr.includes(6)) return true;
//   if (arr.includes(1) && arr.includes(4) && arr.includes(7)) return true;
//   if (arr.includes(2) && arr.includes(5) && arr.includes(8)) return true;
//   if (arr.includes(0) && arr.includes(4) && arr.includes(8)) return true;
//   if (arr.includes(2) && arr.includes(4) && arr.includes(6)) return true;
//   return false;
// };
// // console.log(win);
// rest.addEventListener("click", () => {
//   box.forEach((card) => {
//     card.textContent = "";
//   });
//   winO = [];
//   winX = [];
//   nums = 0;
// });
// // check.addEventListener("click", () => {});
// const box = document.querySelector(".box>:nth-Child(2)");
// const next = document.querySelector(".box>:nth-Child(3)");
// const prev = document.querySelector(".box>:nth-Child(1)");
// const img = document.querySelector("ul");
// const li = document.querySelectorAll("ul>li").length;
// console.log(img);
// let temp = img[2];
// let rem = 0;
// next.addEventListener("click", () => {
//   if (rem <= -((li - 1) * 12)) return;
//   rem += -12;
//   img.style.marginLeft = `${rem}rem`;
//   img.style.transition = "0.8s";
// });
// prev.addEventListener("click", () => {
//   if (rem >= 0) return;
//   rem += 12;
//   img.style.marginLeft = `${rem}rem`;
//   img.style.transition = "0.8s";
// });
const box = document.querySelector(".box>:nth-Child(2)");
const next = document.querySelector(".box>:nth-Child(3)");
const prev = document.querySelector(".box>:nth-Child(1)");
const img = document.querySelector("ul");
const li = document.querySelectorAll("ul>li");

const go = document.querySelectorAll(".go>div");
console.log(go);
let rem = 0;
let liLength = li.length;
let index = 0;
next.addEventListener("click", () => {
  if (rem <= -((liLength - 1) * 12)) return;
  rem += -12;
  img.style.marginLeft = `${rem}rem`;
  img.style.transition = "0.8s";
  index++;
  go[index].style.backgroundColor = "black";
  go[index - 1].style.backgroundColor = "white";
});
prev.addEventListener("click", () => {
  if (rem >= 0) return;
  rem += 12;
  img.style.marginLeft = `${rem}rem`;
  img.style.transition = "0.8s";
  index--;
  go[index].style.backgroundColor = "black";
  go[index + 1].style.backgroundColor = "white";
});
