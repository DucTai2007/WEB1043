loadMenu();

function loadMenu(){
    let t = document.getElementsByClassName("pMenu")[0];
    t.innerHTML=
    `<div class="logo"> 
          <a href="index.html">
          <center><i class="fa-solid fa-house"></i></center></a></div>
        <div class="menu">
          <ul class="menuTop">
              <b>
                <li><a href="#">Menu 1</a></li>
                <li><a href="#">Menu 2</a></li>
                <li><a href="tgkm.html">Thời gian khuyến mãi</a></li>
                <li><a href="#">Menu 4</a></li>
                <li><a href="#">Menu 5</a></li>
              </b>
          </ul>
        </div>
        <div class="DangNhapGioHangTongSL">
          <div class="DangNhap">
            <i class="fa-regular fa-user"></i>
          </div>
          <div class="GioHang">
            <a href="giohang.html" class="fa-solid fa-cart-shopping"></a> 
          </div>
          <div class="TongSL">
            0
          </div>
        </div>`
}