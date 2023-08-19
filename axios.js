let getCity = document.getElementById("getCity");
let weatherOutput = document.getElementById("weatherOutput");
const apikey = "99637571efbd1288b5b43df68797c6da";

let getSearchUrl = (cityName, apikey) => {
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;
  return apiUrl;
};

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${apikey}`;

getCity.addEventListener("click", () => {
  let inputCity = document.getElementById("cityName").value;
  let MySearchApiUrl = getSearchUrl(inputCity, apikey);
  console.log(MySearchApiUrl);

  axios
    .get(MySearchApiUrl)
    .then((response) => {
      let weatherData = response.data;
      let name = weatherData.name;
      let temperature = weatherData.main.temp;
      let humidity = weatherData.main.humidity;
      let weather = weatherData.weather[0].main;
      let description = weatherData.weather[0].description;
      console.log(name, temperature, humidity, weather, description);

      weatherOutput.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature >> ${temperature}</p>
        <p>Humidity >> ${humidity}</p>
        <p>Weather >> ${weather}</p>
        <p>Description >> ${description}</p>
        `;
    })
    .catch((error) => {
      weatherOutput.innerHTML = `<p>Not Found</p>`;
      console.log(error);
    });
});

// to git pull
