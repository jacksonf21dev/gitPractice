function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
/*used to get input for price of meal */
var mealCost = parseFloat(prompt("What was the cost of your meal?"));
var tipRate = 0.2;
/*Calculate tip*/
var tip = (mealCost * tipRate);
/*Round tip to 2nd decimal place. */
tip = round(tip, 2);
/*Caclulate the cost of the meal plus the tip. */
var totalCost = (mealCost + tip);
/* Change totalCost to a string so it will always include the zero in the hundredths place (12.60 instead of 12.6) */
totalCost = totalCost.toFixed(2);

document.write("Tip: $",tip, ", Total Cost: $", totalCost);