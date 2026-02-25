const search  = document.querySelector(".search input");
const list_container = document.getElementById("list-container");
showData();

function addtask(){
    if(search.value === ''){
        alert("you must write something ");
    }else{
        let li = document.createElement("li");
        li.innerHTML = search.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        search.value = ""; 
        saveData();
    }
}

// delete and checked
list_container.addEventListener("click" , function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove(); 
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data" , list_container.innerHTML);
}
function showData(){
    list_container.innerHTML = localStorage.getItem("data");
}

document.querySelector(".search input").addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        addtask();
    }
});