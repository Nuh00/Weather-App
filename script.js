const button = document.querySelector('button');


const ACCESS_KEY = '5118544c57c975459d781470ece91c5f'

const container = document.querySelector('.container');
const template = document.querySelector('#weather-template');
const templateContainer = document.querySelector('.entire-Forecast');



button.addEventListener('click', ()=>{
    getWeather();
    templateContainer.style.backgroundColor= 'white';
}); 



























function getWeather() {
    const city = document.querySelector('input').value;
    const url = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${city}`;


    

    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            renderWeather(data);
        })


    


    
}


function renderWeather(data) {
    const clone = template.content.cloneNode(true);
    const city = clone.querySelector('#cityName');
    const description = clone.querySelector('#description');
    const temp = clone.querySelector('#temp');
    const wind = clone.querySelector('#wind');
    const humidity = clone.querySelector('#humidity');
    let image = clone.querySelector('img');


    if(templateContainer.children.length > 0) {
        templateContainer.innerHTML = '';
    }
    

    

    city.textContent = data.location.name;
    description.textContent = data.current.weather_descriptions[0];
    temp.textContent = `${data.current.temperature}°C`;
    wind.textContent = `${data.current.wind_speed} km/h`
    humidity.textContent = `${data.current.humidity}%`
    image.src = data.current.weather_icons[0];

    templateContainer.appendChild(clone);
}
    