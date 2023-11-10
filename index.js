let firstButton = document.getElementById("submit");
let popup = document.getElementById("pop-up");
let page = document.getElementById("grid-flow");
let email = document.getElementById("email").value;
myInput = ""

function clickone() {
    popup.classList.add("ggwp")
    page.classList.add("ggwp-two")

}

function clicktwo() {
    page.classList.remove("ggwp-two")
    popup.classList.remove("ggwp")
}

const form = document.querySelector('form');
let ggwp = document.getElementById("email").value
form.addEventListener('submit',(e)=> {
e.preventDefault()
/*const fd = new FormData(form) 

const obj = Object.fromEntries(fd)
console.log(obj)
const json = JSON.stringify(obj);
localStorage.setItem('value',json); 
// 

let obj = localStorage.setItem("value",document.getElementById("email").value)
console.log(localStorage.getItem("value"))
window.location.href = "index2.html"; */
if(document.getElementById("email").value.length > 5) {
    let obj = localStorage.setItem("value",document.getElementById("email").value)
    console.log(localStorage.getItem("value"))
    window.location.href = "index2.html"; 
} 
else {
    return alert("please enter an email address")
}

})




