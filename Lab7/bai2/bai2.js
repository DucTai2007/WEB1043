function toTheRight() {
    let a =document.getElementById("block");
    let b = 0;
    setInterval(function () {
        if (b === 6000) {
            clearInterval();
        }else {
            b++;
            a.style.left = b + "px"
        }
    }, 2)
}