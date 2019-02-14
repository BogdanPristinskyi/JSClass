let deductions;
let intSalary;

function calculate(){
    let salary = document.getElementById('input').value.trim();
    intSalary = parseInt(salary);

  taxCalculator();
}

function taxCalculator() {
 if (intSalary <= 42705){
     deductions = 0;
   } else if (intSalary > 42705 && intSalary <= 85405) {
      deductions = (intSalary - 42705) * 0.2;
   } else if (intSalary > 85405 && intSalary <= 103915){
      let  deductions1 = (intSalary - 85405) * 0.24;
      let deductions2 = (85405 - 42705) * 0.2;
      deductions = deductions1 + deductions2;}
     else{
      deductions1 = (intSalary - 103915) * 0.24;
      deductions2 = (85405 - 42705) * 0.2;
      let deductions3 =  (103915 - 85405) * 0.2575;
      deductions = deductions1 + deductions2 + deductions3;
        }

   let netSalary = intSalary - deductions;
   if (isNaN(intSalary)){
     document.querySelector('#netSalary').innerHTML = 'Your input is not a number! Try again.';
     document.querySelector('#deductions').innerHTML = 'Your input is not a number! Try again.';
    } else {
    document.querySelector('#netSalary').innerHTML = netSalary.toFixed(2);
    document.querySelector('#deductions').innerHTML = deductions.toFixed(2);
    }
}
