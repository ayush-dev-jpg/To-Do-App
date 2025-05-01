let btn = document.querySelector("button");
let lis = document.querySelectorAll("li");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click",function(){
// Step 1: create a new <li>
let newLi = document.createElement("li");
let btnDel = document.createElement("button");

// Step 2: set its text
newLi.innerText = inp.value;
btnDel.innerText="Delete";

// Step 3: add it to the <ul>
newLi.appendChild(btnDel);
ul.appendChild(newLi);

//Crating delte event listner
// btnDel.addEventListener("click",function (){
//     newLi.remove();
// })
btnDel.classList.add('delete')

// Step 4: clear the input
inp.value = "";
})

//Event Delegation better approach:
ul.addEventListener("click", function (event) {
if (event.target.nodeName == "BUTTON") {
let listItem = event.target.parentElement;
listItem.remove();
 console.log("deleted");
}
});