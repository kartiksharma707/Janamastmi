
function getrendomcolor() {
    let r1 = Math.floor(Math.random() * 155);
    let r2 = Math.floor(Math.random() * 155);
    let r3 = Math.floor(Math.random() * 155);
    return `rgb(${r1},${r2},${r3})`;
}

// document.addEventListener("DOMContentLoaded", () => {
    setInterval(() => {
        document.querySelector(".hero").style.backgroundColor = getrendomcolor();
    }, 2000);

// });
let n=Math.floor(Math.random(60-20)*60);
console.log(n);