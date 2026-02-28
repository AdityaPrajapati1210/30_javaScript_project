    let passDiv = document.querySelector("#pass ");
    let copyBtn = document.getElementById("copy");
    let password;
    let length = 12;
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]/><";

    function generate() {
        password = "";

        for (let i = 0; i < length; i++) {
            password += char[Math.floor(Math.random() * char.length)];
        }

        // Change only text before icon
        passDiv.innerHTML = password + " ";
    }

    copyBtn.addEventListener("click", function () {

    if (!password){
        alert("Generate password first!");
        return;
    };

    navigator.clipboard.writeText(password);
    // alert("Copied!")*

    let icon = copyBtn.querySelector("i");


    icon.classList.remove("fa-copy");
    icon.classList.add("fa-check");

    setTimeout(() => {
        icon.classList.remove("fa-check");
        icon.classList.add("fa-copy");
    }, 1500);
});