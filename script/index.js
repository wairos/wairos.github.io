$(document).ready(function (){
  $("#header").load("header.html");
  $("#header").hide();
  $("#content").load("indexfile.php");
  $("#footer").load("footer.php");

  $("#home").click(function () {
    $("li").removeClass("active");
    $("a").removeClass("active");
    $(this).addClass("active");
    $("#header").hide();
    $("#content").load("indexfile.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#contactus").click(function () {
    $("li").removeClass("active");
    $("a").removeClass("active");
    $("#about").addClass("active");
    $(this).addClass("active");
    $("#header").show();
    $("#content").load("contactus.php");
    $("#footer").hide();
    $(document).scrollTop(0);
  });
  $("#activities").click(function () {
    $("li").removeClass("active");
    $("a").removeClass("active");
    $("#about").addClass("active");
    $(this).addClass("active");
    $("#header").show();
    $("#content").load("activities.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#curriculum").click(function () {
    $("li").removeClass("active");
    $("a").removeClass("active");
    $("#about").addClass("active");
    $(this).addClass("active");
    $("#header").show();
    $("#content").load("curriculum.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#ourfacility").click(function () {
    $("li").removeClass("active");
    $("a").removeClass("active");
    $("#about").addClass("active");
    $(this).addClass("active");
    $("#header").show();
    $("#content").load("ourfacility.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#announcements").click(function () {
    $("li").removeClass("active");
    $("a").removeClass("active");
    $("#about").addClass("active");
    $(this).addClass("active");
    $("#header").show();
    $("#content").load("announcements.html");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#rates").click(function () {
    $("li").removeClass("active");
    $("a").removeClass("active");
    $(this).addClass("active");
    $("#header").show();
    $("#content").load("rates.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#payment").click(function () {
    $("li").removeClass("active");
    $("a").removeClass("active");
    $(this).addClass("active");
    $("#header").show();
    $("#content").load("payment.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });


});
