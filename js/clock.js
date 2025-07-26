function showCurrentTime() {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    clockEl.innerText = `${hour}:${minutes}`;
}

const clockEl  = document.querySelector("#clock");
setInterval(showCurrentTime, 1000);