let canNang = prompt("Nhập cân nặng của bạn(kg): ");
let chieuCao = prompt("Nhập chiều cao của bạn(cm): ");
let bmi = canNang/chieuCao*canNang;

if(bmi<18.5){
    alert(`Chỉ số BMI ${bmi} của là thiếu cân`);
    }
    else if(bmi >=18.5 && bmi<25)
    {
    alert(`Chỉ số BMI ${bmi} của là bình thường`);
    }
    else if(bmi>=25 && bmi<30)
    {
    alert(`Chỉ số BMI ${bmi} của là thừa cân`);
    }
    else
    {
    alert(`Chỉ số BMI ${bmi} của là béo phì`);
    }
  