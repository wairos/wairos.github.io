$(document).ready(function (){
  $("#header").load("header.html");
  $("#header").addClass("hideheader");
  $("#content").load("indexfile.php");
  $("#footer").load("footer.php");
  $(".subMenu").hide();

  $(".navDropButton").on(("tap","click"), function(){
    $(".subMenu").toggle();
  });

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
    $(".subMenu").toggle();
    $(this).addClass("active");
    $("#content").load("contactus.php");
    $("#footer").hide();
    $(document).scrollTop(0);
  });
  $("#activities").on(("tap","click"),function () {
    $("#header").removeClass("hideheader");
    $(".subMenu").toggle();
    $("#content").load("activities.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#curriculum").on(("tap","click"),function () {
    $("#header").removeClass("hideheader");
    $(".subMenu").toggle();
    $(this).addClass("active");
    $("#content").load("curriculum.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#ourfacility").on(("tap","click"),function () {
    $("#header").removeClass("hideheader");
    $(".subMenu").toggle();
    $("#content").load("ourfacility.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#announcements").on(("tap","click"),function () {
    $("#header").removeClass("hideheader");
    $(".subMenu").toggle();
    $("#content").load("announcements.html");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#rates").on(("tap","click"), function () {
    $("#header").removeClass("hideheader");
    $("li").removeClass("active");
    $("a").removeClass("active");
    $(this).addClass("active");
    $("#content").load("rates.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
  $("#payment").on(("tap","click"),function () {
    $("#header").removeClass("hideheader");
    $("li").removeClass("active");
    $("a").removeClass("active");
    $(this).addClass("active");
    $("#content").load("payment.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });


});
