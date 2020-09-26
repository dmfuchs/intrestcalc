document.getElementById("intrestCalc").onclick = function (){

   let num1 = document.getElementById("randAmount").value;
   let num2 = document.getElementById("intField").value;

    let i = +num1 + +num1*((+num2/100))

    let intrest = i.toFixed(2)


 document.getElementById("calcAmount").innerHTML = 'R ' + intrest;
}