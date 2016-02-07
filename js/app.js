//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately
var color = $(".selected").css("background-color");
//1. When clicking on control list items
$(".controls li").click(function() {
  //deselect sibling elements
  $(this).siblings().removeClass("selected");
  //select clicked element
  $(this).addClass("selected");
});

//2. When new color is pressed
//3. When color sliders change
//4. When add color is pressed
  //append the color to the controls list
  //select the new color

//5. On mouse event on the canvas
  //Draw lines
