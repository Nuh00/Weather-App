
const city = document.getElementById('city')


const accessKey = 'e010a098fe24fdbb489eb5b1bfe1451f'

// const query = city.value

// fetch(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${query}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })


function getWeather() {
    const query = city.value
    fetch(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${query}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

getWeather()