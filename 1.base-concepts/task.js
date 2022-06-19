"use strict";



  function solveEquation(a, b, c) {
    let arr;
    let root1;
    let root2;
    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0){
      arr = [];
    }
    else if (discriminant == 0){
      root1 = - b /( 2 * a );
      arr = [root1];
    } else {
      root1 = (-b + Math.sqrt(discriminant) )/(2*a);
      root2 = (-b - Math.sqrt(discriminant) )/(2*a);
      arr = [ root1, root2];
    }
    
    return arr; // array
  }

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
