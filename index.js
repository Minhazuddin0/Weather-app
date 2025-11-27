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

function switchTab(clickedTab){
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

