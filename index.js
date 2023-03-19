function clickhandler1(){
    document.querySelector(".option1").classList.remove("bgcolor");
document.querySelector(".option1").classList.add("bgcolorclick");
document.querySelector(".option1").classList.remove("bgcolor");
document.querySelector(".option2").classList.add("bgcolor");
document.querySelector(".option2").classList.remove("bgcolorclick");
document.querySelector(".option3").classList.add("bgcolor");
document.querySelector(".option3").classList.remove("bgcolorclick");
document.querySelector(".option4").classList.add("bgcolor");
document.querySelector(".option4").classList.remove("bgcolorclick");
}
function clickhandler2(){
    document.querySelector(".option1").classList.remove("bgcolor");
document.querySelector(".option2").classList.add("bgcolorclick");
document.querySelector(".option2").classList.remove("bgcolor");
document.querySelector(".option1").classList.add("bgcolor");
document.querySelector(".option1").classList.remove("bgcolorclick");
document.querySelector(".option3").classList.add("bgcolor");
document.querySelector(".option3").classList.remove("bgcolorclick");
document.querySelector(".option4").classList.add("bgcolor");
document.querySelector(".option4").classList.remove("bgcolorclick");
}
function clickhandler3(){
    document.querySelector(".option1").classList.remove("bgcolor");
document.querySelector(".option3").classList.add("bgcolorclick");
document.querySelector(".option3").classList.remove("bgcolor");
document.querySelector(".option2").classList.add("bgcolor");
document.querySelector(".option2").classList.remove("bgcolorclick");
document.querySelector(".option1").classList.add("bgcolor");
document.querySelector(".option1").classList.remove("bgcolorclick");
document.querySelector(".option4").classList.add("bgcolor");
document.querySelector(".option4").classList.remove("bgcolorclick");
}
function clickhandler4(){
    document.querySelector(".option1").classList.remove("bgcolor");
document.querySelector(".option4").classList.add("bgcolorclick");
document.querySelector(".option4").classList.remove("bgcolor");
document.querySelector(".option2").classList.add("bgcolor");
document.querySelector(".option2").classList.remove("bgcolorclick");
document.querySelector(".option3").classList.add("bgcolor");
document.querySelector(".option3").classList.remove("bgcolorclick");
document.querySelector(".option1").classList.add("bgcolor");
document.querySelector(".option1").classList.remove("bgcolorclick");
}
function alerty(){
    alert("Are you sure you want to submit the test");
}
var countDownDate = new Date("Mar 13, 2024 23:30:25").getTime();

var distance = 5400;
var x = setInterval(function() {

  var now = new Date().getTime();

  distance--;

  var hours = Math.floor((distance / (60 * 60 )) );
  var minutes = Math.floor((distance % (60 * 60)) / (60));
  var seconds = Math.floor((distance % (60)));
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";

}, 1000);