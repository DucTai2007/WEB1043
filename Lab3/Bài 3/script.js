let temp = "";
let h5 = document.querySelector("#result");

const sum = (value) => {
    temp += value;

    h5.innerText = temp;
    h5.style.color = "blue";
}

const clearC = () => temp= "";

const tinhToan = () => {
    let ketQua = eval(temp);

    h5.innerText = ketQua;
    h5.style.fontSize = "32px";
}