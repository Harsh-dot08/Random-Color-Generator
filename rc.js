const gen = (rc) => {
    // Generate three random numbers for the RGB color
    let idx = [];
    idx[0] = Math.floor(Math.random() * 256);
    idx[1] = Math.floor(Math.random() * 256);
    idx[2] = Math.floor(Math.random() * 256);

    // Get all elements with the specified class name
    let elements = document.getElementsByClassName(rc);

    // Construct the RGB color string
    let color = `rgb(${idx[0]}, ${idx[1]}, ${idx[2]})`;

    // Iterate over each element and change its background color
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = color;
    }
};
start=document.querySelector(".start");
exit=document.querySelector(".Exit");
exit.classList.add("hide")
function myTimer() {
  gen("f")
  gen("s")
  gen("t")
  gen("fo")
}
div=document.querySelectorAll("div")
console.log(div)
let myInterval;
start.addEventListener("click",()=>{
    myInterval = setInterval(myTimer, 1000);
    start.classList.add("hide");
    exit.classList.remove("hide");
})
exit.addEventListener("click",()=>{
    clearInterval(myInterval)
    start.classList.remove("hide")
    exit.classList.add("hide")
})
// Example usage: