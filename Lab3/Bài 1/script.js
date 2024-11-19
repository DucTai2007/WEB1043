let a = prompt ("Nhập a: ");
let b = prompt ("Nhập b: ");
let o = prompt ("Toán tử: ");

a = Number(a);
b = Number(b);

let result;

switch(o){
    case '+': {
        result = a + b;
    }
    case '-': {
        result = a - b;
    }
    case 'x': {
        result = a * b;
    }
    case ':': {
        result = a / b;
    }
    default:
        break;
}

alert(`Kết quả phép toán là: ${result}`);