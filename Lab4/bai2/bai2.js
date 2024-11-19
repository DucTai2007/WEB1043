function taoSinhVien() {
    var sv = new Object();
    
    sv.hoTen = prompt("Mời bạn nhập họ và tên:");
    sv.diem = parseFloat(prompt("Mời bạn nhập số Điểm:"));
    
    
    sv.hienThi = function() {
        if (this.diem >= 5) {
            this.hocLuc = "Qua môn";
        } else {
            this.hocLuc = "Rớt môn";
        }
        
        document.write("<h3>Họ và tên: " + this.hoTen + "</h3>");
        document.write("<h3>Điểm TB: " + this.diem + "</h3>");
        document.write("<h3>Học lực: " + this.hocLuc + "</h3>");
    };
    

    sv.hienThi();
}