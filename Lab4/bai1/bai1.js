function DanhMucSanPham(name,model,cost,quantity){
    this.name = name;
    this.model = model;
    this.cost = cost;
    this.quantity = quantity
}

function taoDanhMucSanPham(){
    let Sp1 = new DanhMucSanPham ("Laptop","MSI bravo 15",1000,10);
    let Sp2 = new DanhMucSanPham ("Điện thoại","Iphone 16 Promax",2000,8);
    let Sp3 = new DanhMucSanPham ("Điện thoại","Iphone 15 Promax",5000,20);
    console.log(Sp1);
    console.log(Sp2);
    console.log(Sp3);
}
taoDanhMucSanPham();