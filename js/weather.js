async function onSuccess(currentPos) {
    const lat = currentPos.coords.latitude;
    const lng = currentPos.coords.longitude;
    const apiKey = "a1fdbfcdebe86dbe0f99ba139cf92f65";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    if (response.status === 200) {
        const data = await response.json();

        imgEl.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        tempEl.innerText = `${data.main.temp}℃`;
        locationEl.innerText = data.name;

        weatherEl.classList.remove(CLASS_HIDDEN);
    } else {
        weatherEl.classList.add(CLASS_HIDDEN);
    }
}

function onFailure() {
    if (!weatherEl.classList.contains(CLASS_HIDDEN)) {
        weatherEl.classList.add(CLASS_HIDDEN);
    }
}

const weatherEl = document.querySelector("#weather");
const imgEl = document.querySelector("#weather img");
const tempEl = document.querySelector("#weather div span:first-child");
const locationEl = document.querySelector("#weather div span:last-child");

navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
