console.log('i am minhaz');

const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

function renderWeatherinfo(data){
    let newPara =  document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`

    document.body.appendChild(newPara); 

  

    
} 

async function fetchWeatherDetails(){
    // let latitude = 15.3333;
    // let longitude = 74.0833;

    try {
    
    let city = "goa";  
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    const data = await response.json();
    console.log("Weather data:-> " , data);

    
        renderWeatherinfo(data);
    } catch (err) {
        // handlle the error here
    }

    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

   

    
}

async function getCustomWeatherDetails() {

    try{
    let latitude = 26.4499;
    let longitude = 80.3319;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    let data = await result.json();

    console.log(data); 


    } catch(err){
        console.log(" Error Found" , err);


    }
    

}
