console.log('i am minhaz');

async function showWeather(){
    let latitude = 15.3333;
    let longitude = 74.0833;

    const response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    
}