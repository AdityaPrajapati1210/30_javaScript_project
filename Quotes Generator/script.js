async function getQuote() {

    const url = "https://corsproxy.io/?https://zenquotes.io/api/random?t=" + Date.now();

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    document.querySelector(".quotes").innerHTML = data[0].q;
    document.querySelector(".author").innerHTML = "- " + data[0].a;


}

getQuote();

function tweet(){
    const q = document.querySelector(".quotes").innerText;
    const a = document.querySelector(".author").innerText;

    window.open(`https://twitter.com/intent/tweet?text=${q}${a}`,"Tweet Window", "height=300,width=600");

}

