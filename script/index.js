$(document).ready(function (){
  $("#header").load("header.html");
  $("#content").load("indexfile.php");
  $("#footer").load("footer.php");
  $(".subMenu").hide();
  $("#home").addClass("active");
  $("#dthome").addClass("dtactive");

  $(".navDropButton").on(("tap","click"), function(){
    $(".subMenu").toggle();
  });

  $("#home").on(("tap","click"),function () {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $(this).addClass("active");
    $("#dthome").addClass("dtactive");
    $("#content").load("indexfile.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#dthome").click(function() {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("#home").addClass("active");
    $("*").removeClass("dtactive");
    $(this).addClass("dtactive");
    $("#content").load("indexfile.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#contactus").on(("tap","click"),function () {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $(this).addClass("active");
    $(".navDropButton").addClass("active");
    $("#dtabout").addClass("dtactive");
    $("#dtcontactus").addClass("dtactive");
    $("#content").load("contactus.php");
    $("#footer").hide();
    $(document).scrollTop(0);
  });

  $("#dtcontactus").click(function(){
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#contactus").addClass("active");
    $(".navDropButton").addClass("active");
    $("#dtabout").addClass("dtactive");
    $("#dtcontactus").addClass("dtactive");
    $("#content").load("contactus.php");
    $("#footer").hide();
    $(document).scrollTop(0);
  });

  $("#activities").on(("tap","click"),function () {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#activities").addClass("active");
    $(".navDropButton").addClass("active");
    $("#dtabout").addClass("dtactive");
    $("#dtactivities").addClass("dtactive");
    $("#content").load("activities.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#dtactivities").click(function () {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#activities").addClass("active");
    $(".navDropButton").addClass("active");
    $("#dtabout").addClass("dtactive");
    $("#dtactivities").addClass("dtactive");
    $("#content").load("activities.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#curriculum").on(("tap","click"),function () {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#curriculum").addClass("active");
    $(".navDropButton").addClass("active");
    $("#dtabout").addClass("dtactive");
    $("#dtcurriculum").addClass("dtactive");
    $("#content").load("curriculum.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#dtcurriculum").click(function () {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#curriculum").addClass("active");
    $(".navDropButton").addClass("active");
    $("#dtabout").addClass("dtactive");
    $("#dtcurriculum").addClass("dtactive");
    $("#content").load("curriculum.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#ourfacility").on(("tap","click"),function () {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#ourfacility").addClass("active");
    $(".navDropButton").addClass("active");
    $("#dtabout").addClass("dtactive");
    $("#dtourfacility").addClass("dtactive");
    $("#content").load("ourfacility.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#dtourfacility").click(function() {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#ourfacility").addClass("active");
    $(".navDropButton").addClass("active");
    $("#dtabout").addClass("dtactive");
    $("#dtourfacility").addClass("dtactive");
    $("#content").load("ourfacility.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#announcements").on(("tap","click"),function () {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#announcements").addClass("active");
    $(".navDropButton").addClass("active");
    $("#dtabout").addClass("dtactive");
    $("#dtannouncements").addClass("dtactive");
    $("#content").load("announcements.html");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#dtannouncements").click(function() {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#announcements").addClass("active");
    $(".navDropButton").addClass("active");
    $("#dtabout").addClass("dtactive");
    $("#dtannouncements").addClass("dtactive");
    $("#content").load("announcements.html");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#rates").on(("tap","click"), function () {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#rates").addClass("active");
    $("#dtrates").addClass("dtactive");
    $("#content").load("rates.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#dtrates").click(function() {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#rates").addClass("active");
    $("#dtrates").addClass("dtactive");
    $("#content").load("rates.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#payment").on(("tap","click"),function () {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#payment").addClass("active");
    $("#dtpayment").addClass("dtactive");
    $("#content").load("payment.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });

  $("#dtpayment").click(function() {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#payment").addClass("active");
    $("#dtpayment").addClass("dtactive");
    $("#content").load("payment.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });


});
