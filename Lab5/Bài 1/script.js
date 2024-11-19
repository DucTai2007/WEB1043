function display() {
    var pro = document.getElementById("pro");
    var name = pro.innerText;
    var price = pro.getAttribute("data-price");
    var quantity = document.getElementById("qty").value;
    var amount = price * quantity;
    document.getElementById("name").innerText = name;
    document.getElementById("amount").innerText = amount;
}