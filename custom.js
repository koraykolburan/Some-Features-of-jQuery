$(document).ready(function () {
  // $(".writings").append("Hi");
  // $("#show").css({ backgroundColor: "lightblue" });
  // $("#hide").css({ color: "blue" });
  // $("body").css({ color: "white" });
  // $("body").css({ margin: "50px" });
  //$("body").css({ letterSpacing: "2px" });
  //$("body").css({ padding: "10px" });
  //$("li:even").css({ backgroundColor: "grey" });
  //$("li:odd").css({ backgroundColor: "lightgreen" });
  //$("li:nth-child(6)").css({ backgroundColor: "purple" });
  //$("button:first-child").css({ backgroundColor: "red" });
  //$("button:last-child").css({ backgroundColor: "red" });
  //$("#hide").click(function () { console.log("clicked...");
  let writings = $(".writings");
  $("#hide").click(function () {
    writings.hide(2000);
  });
  $("#show").click(function () {
    writings.show(500);
  });
  $("#show-hide").click(function () {
    writings.toggle(500);
  });
  $("#open-close").click(function () {
    writings.slideUp(750).slideDown();
  });
  $("#add-element").click(function () {
    writings.append("Last" + "<br />");
    writings.prepend("First" + "<br />");
    // writings.html("<ul><li>JavaScript</ul></li>");
  });
  $("#delete-element").click(function () {
    $("li:first-child").remove();
    //$("li").remove();
  });
  $("#add-class").click(function () {
    writings.addClass("adding");
  });
  $("#delete-class").click(function () {
    writings.removeClass("adding");
  });
  $("#change-class").click(function () {
    writings.toggleClass("adding");
  });
  ////////////////////

  var box1 = $(".box1");
  var box2 = $(".box2");
  var pos1 = box1.position();
  let left1 = pos1.left;
  var pos2 = box2.position();
  let left2 = pos2.left;
  $("#start-anim").click(function () {
    box1.css({ position: "relative" });
    while (left1 <= 1000) {
      box1.animate({
        left: "+=20",
      });
      left1 += 50;
    }
  });
  $("#start-anim").click(function () {
    box2.css({ position: "relative" });
    while (left2 <= 1500) {
      box2.animate({
        left: "+=40",
      });
      left2 += 50;
    }
  });
  var time1 = setInterval(how, 1000);
  function how() {
    var d = new Date();
    var hours = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    $(".hours").text(hours);
    $(".minute").text(min);
    $(".second").text(sec);
  }

  //console.log(pos1);
});
