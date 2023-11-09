const select = document.getElementById('cities');
let city = select.value;
let daysSelect = document.getElementById("days");
let days = daysSelect.value;
const input = document.getElementById('enterCity');

function getData() {
    let xhr = new XMLHttpRequest()
    let url = `http://api.weatherapi.com/v1/forecast.json?key=5be5d4c23c00497fb41144549230306&q=${city}&days=${days}&aqi=no&alerts=no`;
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
        let response = JSON.parse(xhr.response);
        document.querySelector("main").innerHTML = null;
        for (let day of response.forecast.forecastday) {
            let date = new Date(day.date).toDateString();

            let temp_C = day.day.avgtemp_c
            let condition = day.day.condition.icon

            document.querySelector("main").innerHTML += `
            <div id="marg">
            <div id="block">${date}</div>
                 <div id="info">
            
                    <p id="date"></p>
                    <p id="location"></p>
                    <p id="condition"></p>
                    <img src=" http:${condition}" id="img">
                    <p id="temp">${temp_C}</p>
                    <a href="../current_weather/current.html">Current weather</a>
                </div>
            </div>
            `
        }



    }
}
getData()


select.addEventListener('change', (event) => {
    city = event.target.value;
    getData()
  })

daysSelect.addEventListener("change", (event) => {
    days = event.target.value;
    getData();
})

input.addEventListener("change", (event) => {
    city = event.target.value;
    getData()
  })