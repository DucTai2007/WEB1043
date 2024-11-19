const luaChonEle = document.querySelector("#luaChon");
const mayLuachonEle = document.querySelector("#mayLuachon");
const ketQuaEle = document.querySelector("#ketQua");

let keoBuaBao = ['✌🏻','✊🏻','✋🏻'];
let nguoiChoi;
let nguoiChoiNum;
let may;
let mayNum;

const luaChon = (value, num) => {
    nguoiChoi = value;
    nguoiChoiNum = num;

    luaChonEle.innerText = value;

    mayLuachon();
}

const mayLuachon = () => {
    mayNum = Math.floor(Math.random() * 3);
    may = keoBuaBao(mayNum);

    mayLuachonEle.innerText = may;
}

const soSanh = () => {
    let thang = true;
    let hoa = false;

    switch(nguoiChoiNum) {
        case 0: {
            if(mayNum == 1) thang = false;
        } break;
        case 1: {
            if(maynum == 2) thang = false;
        } break;
        case 2: {
            if(maynum == 0) thang = false;
        } break;
        default:
            break;
    }

    if(mayNum == nguoiChoiNum) hoa == true;
}