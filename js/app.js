//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");

function changeColor() {
  var redValue = $("#red").val();
  var greenValue = $("#green").val();
  var blueValue = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")");
}
//1. When clicking on control list items
$(".controls").on("click", "li", function() {
  //deselect sibling elements
  $(this).siblings().removeClass("selected");
  //select clicked element
  $(this).addClass("selected");
  color = $(this).css("background-color");
});

//2. When new color is pressed
$("#revealColorSelect").click(function() {
  changeColor();
  $("#colorSelect").fadeToggle(100);
});
//3. When color sliders change
$("input[type='range']").change(changeColor);

//4. When add color is pressed
$("#addNewColor").click(function() {
  var $addedColor = $("<li></li>");
  //append the color to the controls list
  $(".controls ul").append($addedColor);
  $addedColor.css("background-color", $("#newColor").css("background-color"));
  //select the new color
  $addedColor.click();
});

//5. On mouse event on the canvas
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
$canvas.mousedown(function(e) {
  mouseDown = true;
  lastEvent = e;
}).mousemove(function(e) {
  //Draw lines
  if (mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function() {
  mouseDown = false;
});
