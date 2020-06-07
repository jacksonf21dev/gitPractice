function tipCalc (a,b) {
    return a * b;
}
function totalCalc (a, b) {
    return a + b;
}

var mealCost = parseFloat(prompt("What was the cost of your meal?"));
var tipRate = 0.2;
var tip = tipCalc(mealCost, tipRate);
var totalCost = totalCalc(tip, mealCost);
var roundedTip = tip.toFixed(2);
var roundedCost = totalCost.toFixed(2);



document.write("Tip: $",roundedTip, ", Total Cost: $", roundedCost);