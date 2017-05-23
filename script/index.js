$(document).ready(function (){
  $("#header").load("header.html");
  $("#header").addClass("hideheader");
  $("#content").load("indexfile.php");
  $("#footer").load("footer.php");

  $("#home").on(("tap","click"),function () {
    $("#header").addClass("hideheader");
    $("li").removeClass("active");
    $("a").removeClass("active");
    $(this).addClass("active");
    $("#content").load("indexfile.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#contactus").on(("tap","click"),function () {
    $("#header").removeClass("hideheader");
    $("li").removeClass("active");
    $("a").removeClass("active");
    $("#about").addClass("active");
    $(this).addClass("active");
    $("#content").load("contactus.php");
    $("#footer").hide();
    $(document).scrollTop(0);
  });
  $("#activities").on(("tap","click"),function () {
    $("#header").removeClass("hideheader");
    $("li").removeClass("active");
    $("a").removeClass("active");
    $("#about").addClass("active");
    $(this).addClass("active");
    $("#content").load("activities.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#curriculum").on(("tap","click"),function () {
    $("#header").removeClass("hideheader");
    $("li").removeClass("active");
    $("a").removeClass("active");
    $("#about").addClass("active");
    $(this).addClass("active");
    $("#content").load("curriculum.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#ourfacility").on(("tap","click"),function () {
    $("#header").removeClass("hideheader");
    $("li").removeClass("active");
    $("a").removeClass("active");
    $("#about").addClass("active");
    $(this).addClass("active");
    $("#content").load("ourfacility.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#announcements").on(("tap","click"),function () {
    $("#header").removeClass("hideheader");
    $("li").removeClass("active");
    $("a").removeClass("active");
    $("#about").addClass("active");
    $(this).addClass("active");
    $("#content").load("announcements.html");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#rates").on(("touchend","click"), function () {
    $("#header").removeClass("hideheader");
    $("li").removeClass("active");
    $("a").removeClass("active");
    $(this).addClass("active");
    $("#content").load("rates.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#payment").on(("touchend","click"),function () {
    $("#header").removeClass("hideheader");
    $("li").removeClass("active");
    $("a").removeClass("active");
    $(this).addClass("active");
    $("#content").load("payment.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });


});
