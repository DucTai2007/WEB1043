let a = window.location.search;
let ThongSo = new URLSearchParams(a);
for (let a of ThongSo) {
    console.log(a);
    alert(a);
}
console.log(name)