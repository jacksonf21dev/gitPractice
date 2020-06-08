function calcTip() {
  /*used to get inputs for price, percentage and amount of people */
  var mealCost = document.getElementById("costInput").value;
  var tipRate = document.getElementById("selectRate").value;
  var peopleCount = document.getElementById("peopleInput").value;
  
  /* Validate all inputs */
  if (isNaN(mealCost)) {
    alert("Please enter a numerical value.");
    return;
  }
  if (mealCost === "" || tipRate == 0) {
    alert("Please enter the values.");
    return;
  }
  
  /* Determine whether var peopleCount is one, or more people, and if it is properly inputted. */
  if (isNaN(peopleCount) || peopleCount < 1) {
    alert("Please enter a numerical value greater than 0");
    return;
  }
  else if (peopleCount == 1) {
    peopleCount = 1;
    document.getElementsByClassName("each")[0].style.display = "none";
  }
  else {
    document.getElementsByClassName("each")[0].style.display = "inline";
  }
  
  /*Calculation of the tip */
  var tip = (mealCost * tipRate);
  
  /*Round tip to 2nd decimal place. */
  var roundedTip = Number(Math.round(tip+'e2')+'e-2');

  mealCost = parseFloat(mealCost);
  roundedTip = parseFloat(roundedTip);
  peopleCount = parseFloat(peopleCount);
  
  var dividedTip = (roundedTip/peopleCount);
  /*Caclulate the cost of the meal plus the tip.  */
  var totalCost = ((mealCost + roundedTip)/peopleCount); 
  /*Round total to 2nd decimal place. */
  var roundedTotal = Number(Math.round(totalCost+'e2')+'e-2');

  
  /* Next line ensures that two decimal points will always show up. */
  roundedTip = roundedTip.toFixed(2);
  dividedTip = dividedTip.toFixed(2);
  roundedTotal = roundedTotal.toFixed(2);
  

  document.getElementsByClassName("tipDisplay")[0].style.display="block";
  if (peopleCount == 1) {
    peopleCount = 1;
    document.getElementsByClassName("dividedDisplay")[0].style.display="none";
    document.getElementsByClassName("each")[1].style.display="none";
  }
  else {
    document.getElementsByClassName("dividedDisplay")[0].style.display="block";
  }
  document.getElementsByClassName("totalDisplay")[0].style.display="block";

  document.getElementById("finalTip").innerHTML = roundedTip;
  document.getElementById("dividedTip").innerHTML = dividedTip;
  document.getElementById("finalTotal").innerHTML = roundedTotal;
  

}  

/* Hide the output before the action is completed. */
document.getElementsByClassName("tipDisplay")[0].style.display="none";
document.getElementsByClassName("totalDisplay")[0].style.display="none";
document.getElementsByClassName("dividedDisplay")[0].style.display="none";

  /* Call the function with the Button */
document.getElementById("calc-btn").onclick = function(){
  calcTip();
}