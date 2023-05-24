document.getElementById("color").addEventListener("click",changeBackground);
function changeBackground() {
  const symbols = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];

let color = "#";
for (let i = 0; i < 6; i++) {
  color += symbols[Math.floor(Math.random() * 16)];
}
document.body.style.background=color;
document.getElementById("hexa").innerHTML=color;
}