//today varibles

let todayName=document.getElementById('todayName')
let todayNumber=document.getElementById('todayNumber')
let todayMonth=document.getElementById('todayMonth')
let todayLocation=document.getElementById('todayLocation')
let todayTemp=document.getElementById('todayTemp')
let todayCondintion=document.getElementById('todayCondintion')



//nextday varibles

let nextDay = document.getElementById('nextDay')
let nextMaxtemp = document.getElementById('nextMaxtemp')
let nextMintemp=document.getElementById('nextMintemp')
let nextCondintion=document.getElementById('nextCondintion')


// after nextday varibles


let anextDay = document.getElementById('anextDay')
let anextMaxtemp = document.getElementById('anextMaxtemp')
let anextMintemp=document.getElementById('anextMintemp')
let anextCondintion=document.getElementById('anextCondintion')


// search input

let search=document.getElementById('search')






async function getWeatherData(){
let weatherResponse= await fetch("http://api.weatherapi.com/v1/current.json?key=73b857c3ae6e460e899183927241301&q=London")
let weatherData=await weatherResponse.json()
console.log()
return weatherData

}

function displayTodayData(data){
    todayLocation.innerHTML=data.location.name
    todayTemp.innerHTML=data.current.temp_c
}

function displaynextDayData(data){
    let forecastData=data.forecastday 
    for( let i=0; i<2;i++)
    nextMaxtemp[i].innerHTML=forecastData[i+1].day.maxtemp_c
    nextMintemp[i].innerHTML=forecastData[i+1].day.mintemp_c

}

function displayAnextDayData(data){
    let forecastData=data.forecastday 
    for( let i=0; i<2;i++)
    anextMaxtemp[i].innerHTML=forecastData[i+1].day.maxtemp_c
    anextMintemp[i].innerHTML=forecastData[i+1].day.mintemp_c

}


async function start(){
    let weatherData=await getWeatherData()
    displayTodayData(weatherData)
    displaynextDayData(weatherData)
    displayAnextDayData(weatherData)


}


start()
