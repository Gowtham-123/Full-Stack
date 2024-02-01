function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height,2);
    return Math.round(bmi);
}

var bmi = bmiCalculator(110,1.76);
console.log(bmi);