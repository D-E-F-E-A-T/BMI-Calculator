$(document).ready(function(){
  $("#calc-btn").click(function(){
    $("#title-box").fadeOut(4000);
  });
});

$(document).ready(function(){
  $("#reset-btn").click(function(){
    $("#title-box").fadeIn(2000);
  });
});

function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
if(weight > 0 && height > 0){	
var finalBmi = weight/(height/100*height/100)
document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
document.bmiForm.meaning.value = "Under-Weight.";
}
if(finalBmi > 18.5 && finalBmi < 25){
document.bmiForm.meaning.value = "Normal-Weight.";
}
if(finalBmi > 25 && finalBmi < 40){
document.bmiForm.meaning.value = "Over-Weight.";
}
if(finalBmi > 40 && finalBmi < 55.5){
document.bmiForm.meaning.value = "Obese.";
}
if(finalBmi > 55.5){
document.bmiForm.meaning.value = "Extremely-Obese.";
}
}
else{
alert("Please Fill in everything correctly")
}
}