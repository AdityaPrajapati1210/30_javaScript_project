const apiKey = "be18136c9ddf2a5a7b106a5a1830bc86";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        document.querySelector(".error").style.display="none";
        document.getElementsByClassName("temp")[0].innerHTML = data.main.temp + "°C";
    document.getElementsByClassName("city")[0].innerHTML = data.name;
    document.getElementsByClassName("humadity")[0].innerHTML = data.main.humidity + "%";
    document.getElementsByClassName("wind")[0].innerHTML = data.wind.speed + " km/h";
    document.querySelector(".feel").innerHTML = "Feels like " + data.main.feels_like;

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }else if(data.weather[0].main == "Wind"){
        weatherIcon.src = "images/wind.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display="block";
    }

   
}
var btn = document.querySelector(".search button");

function handleSearch(){
    const city = document.querySelector(".cityname").value;
    checkweather(city);
}

//  Button click
btn.addEventListener("click", ()=>{
    handleSearch();
});

// Enter key press
document.querySelector(".cityname").addEventListener("keydown",function(e){
    if(e.key === "Enter"){
        handleSearch();
    }
});