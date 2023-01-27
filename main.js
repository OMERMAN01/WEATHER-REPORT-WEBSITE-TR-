const url = 'https://api.openweathermap.org/data/2.5/'
const key = '82652229f714348028dd9097acffda20'

var city = document.getElementsByClassName('city')
var temp = document.getElementsByClassName('temp')
var desc = document.getElementsByClassName('desc')
var minmax = document.getElementsByClassName('minmax')

const setQuerry = (e) => {
    if(e.keyCode == '13')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let querry = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(querry)
    .then(weather => {
        return weather.json()
    })
    .then(displayresult)  
}

const displayresult = (result) => {
    console.log(result); 
    
    city[0].innerHTML = result.name
    temp[0].innerHTML = `${result.main.temp}*c`
    desc[0].innerHTML = result.weather[0].description
    minmax[0].innerHTML = `${result.main.temp_min}*c ${result.main.temp_max}*c`
}

const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuerry)

