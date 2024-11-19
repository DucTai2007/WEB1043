const SaoUL = document.querySelector(".Sao");
const output = document.querySelector(".output");
const Sao = document.querySelectorAll(".sao");
Sao.forEach((sao,index) => {
    sao.saoValue = (index + 1);
    sao.addEventListener("click",saoRate);
});
function saoRate(e) {
    output.innerHTML = `You Rated this ${e.target.saoValue} Sao`;
    Sao.forEach((_sao,index) => {
        if(index < e.target.saoValue) {
            sao.classList.add ("orange");
        }
        else {
            sao.classList.remove("orange");
        }
    });
}