const userTab =document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccesContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

// initialy variable needs

let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
oldTab.classList.add("current-tab");


// ek kaam pending hai ???

function switchTab(new Tab){
    if(newTab != oldTab){
        oldTab.classList.remove("current-tab");
        oldTab = newTab; 
        oldTab.classList.add("current-tab");

        if(!searchForm.classList.contain("active")) {
            // kya search form wala is visible, if yes then make it visible 
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active"); 
        }
        else{
            
            // main pehle search wale tab par tha, ab your weather tab visible karna hai

            searchForm,classList.remove("active"); 
            userInfoContainer.classList.remove("active");
            
            // ab main your weather tab mai aa gya hu, to weather bho display karna pdega, so lets check local storage firt for coordinates, if we have saved them there

            getfromSessionStorage ();
        }
    }
}


userTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    // pass clicked tab as input parameter
    switchTab(searchTab);
});



// check if coordinates are already present in session storage 
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinnates");
    if (! localCoordinates){
        // agar local coordinates nahi mile 
        grantAccesContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);

    }
}


async function fetchUserWeatherInfo(coordinates){
    const {lat, lon}= coordinates;
    // make grant container incisible
    grantAccesContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    // api call

    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();

        loadingScreen.classList.remove(active);
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);


    }
    catch(err){
        loadingScreen.classList.remove("active");
        // HW

    }

}

function renderWeatherInfo(weatherInfo){
    // firstly we have to fetch the elements

    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");  
    const temp = document.querySelector("[data-temp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const clouds = document.querySelector("[data-clouds]");

    // fetch values from weather info object & put in UI element

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;




}
