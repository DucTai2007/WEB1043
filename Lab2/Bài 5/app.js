var  x = 10 + Math.round(5 * Math.random());
var a = prompt("Số nhập từ 10 đến 15");
if(a==x){
    document.write("Chúc mừng bạn đã đoán đúng.");
}
else if(a>x){
    document.write("Giá trị của bạn lớn hơn số bí mật là "+ (a-x));
}
else{
    document.write("Giá trị của bạn nhỏ hơn số bí mật là "+ (x-a));
}