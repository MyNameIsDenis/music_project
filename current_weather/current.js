const select = document.getElementById('cities');
let city = select.value;

const input = document.getElementById('enterCity');


function getData() {
  let xhr = new XMLHttpRequest()
  let url = `http://api.weatherapi.com/v1/current.json?key=5be5d4c23c00497fb41144549230306&q=${city}&aqi=no`;
  xhr.open("GET", url);
  xhr.send();
  xhr.onload = function () {
    let response = JSON.parse(xhr.response);
    
    let location = response.location.name;
    let temp_C = response.current.temp_c;
    let condition = response.current.condition.icon;

    document.getElementById("location").innerHTML = location;
    document.getElementById("temp").innerHTML =  temp_C + "°C";
    document.getElementById("img").src = 'http:' + condition;

    changeColor(temp_C);

    

  }
}

getData()

select.addEventListener('change', (event) => {
  city = event.target.value;
  getData()
})

input.addEventListener("change", (event) => {
  city = event.target.value;
  getData()
})