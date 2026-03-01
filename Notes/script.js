const note_container = document.getElementById("note");
const btn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input")


btn.addEventListener("click",()=>{
    let p = document.createElement("p");
    let img = document.createElement("img");
    p.className = "input";
    p.setAttribute("contenteditable", "true");
    img.src="images/delete.png";
    note_container.appendChild(p).appendChild(img);

});

note_container.addEventListener("click",function(e){
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
});

function updateStorage(){
    localStorage.setItem("data",note_container.innerHTML);
}

function showStorage(){
    note_container.innerHTML =localStorage.getItem("data");
}
showStorage();

note_container.addEventListener("keyup", function(){
    updateStorage();
});