 let salary = document.getElementById('salary').innerHTML.trim();
 let intSalary = parseInt(salary);
 console.log(intSalary);


 document.getElementById('salary').innerHTML = intSalary;

 let deductions = document.getElementById('deductions').innerHTML.trim();
 if (intSalary > 42705 & intSalary < 85405) {
  deductions = (intSalary - 42705) * 0.2;
} else if (intSalary > 85405 & intSalary < 103915){
 let  deductions1 = (intSalary - 85405) *0.24;
 let deductions2 = (85405 - 42705)  * 0.2;
 deductions = deductions1 + deductions2;}
 else {
    deductions1 = ((intSalary - 103915) /100)*24;
    deductions2 = ((85405 - 42705) / 100) * 20;
  let deductions3 =  ((103915 - 85405) / 100) * 25.75;
  deductions = deductions1 + deductions2 + deductions3;
 }




 console.log(deductions);
 document.getElementById('deductions').innerHTML = deductions.toFixed(2);//replace html with js

 // let netSalary = document.getElementById('netSalary').innerHTML.trim();
  let netSalary = intSalary - deductions;

console.log(netSalary);
 document.getElementById('netSalary').innerHTML = netSalary.toFixed(2);
