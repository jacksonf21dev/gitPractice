function tipCalc (a,b) {
    return a * b;
}
function totalCalc (a, b) {
    return a + b;
}

var mealCost = input(parseFloat("What was the cost of your meal?"))
var tipRate = 0.2
var tip = tipCalc(mealCost, tipRate)
var totalCost = totalCalc(tip, mealCost)