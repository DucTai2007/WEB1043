var countdownInterval;
var endDate; 
checkSaleTimeIsEmpty()
function checkSaleTimeIsEmpty() {
    var saveTime = localStorage.getItem('saveTime') || false;
    if(!saveTime) {
        return;
    }
    endDate = parseInt(saveTime, 10);
    countdownInterval = setInterval(updateSaleTime, 1000);
}

function updateSaleTime () {
    const now = Date.now();
    const distance = endDate - now;

    
    if(distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.clock').style.display = 'none'
        return;
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

function saveSaleTime() {
    const dateInput = document.getElementById('dateInput').value;
    if(!dateInput) {
        alert('Vui lòng chọn một ngày!')
        return
    }

    var endDate = new Date(dateInput).getTime();
    if(endDate <= Date.now()) {
        alert('Phải nhập 1 ngày ở tương lai!');
        return
    }

    localStorage.setItem('saveTime', endDate)
    alert('Thiết lập thời gian thành công')
    checkSaleTimeIsEmpty();
}