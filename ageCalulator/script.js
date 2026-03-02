const date = document.getElementById("input");
date.max = new Date().toISOString().split("T")[0];

const container = document.querySelector(".container");

function calculateDate(){

    if(date.value === ""){
        alert("Please select your birth date.");
        return;
    }

    let birthdate = new Date(date.value);
    let today = new Date();

    let ageYear = today.getFullYear() - birthdate.getFullYear();
    let ageMonth = today.getMonth() - birthdate.getMonth();
    let ageDay = today.getDate() - birthdate.getDate();

    if(ageDay < 0){
        ageMonth--;
        ageDay += 30;
    }

    if(ageMonth < 0){
        ageYear--;
        ageMonth += 12;
    }

    // Remove old result if exists
    let oldResult = document.querySelector(".h3");
    if(oldResult){
        oldResult.remove();
    }

    let h3 = document.createElement("h3");
    h3.className = "h3";
    h3.innerHTML = `You are ${ageYear} years ${ageMonth} months ${ageDay} days old.`;

    container.appendChild(h3);

    
}

document.querySelector("#input").addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        calculateDate();
    }
});

