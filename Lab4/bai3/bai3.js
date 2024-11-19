function updateTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');

    let timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('clock').textContent = timeString;
}

updateTime();
setInterval(updateTime, 1000);
