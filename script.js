const accessKey = '90e5111bb1e08d077b74fc1bc0e71b83'
const query = 'New York'

fetch(`http://api.weatherstack.com/current?access_key=${accessKey}&query=${query}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })