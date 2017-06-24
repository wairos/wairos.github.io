$(document).ready(function (){
//Start Up
  $("#header").load("header.html");
  $("#content").load("indexfile.php");
  $("#footer").load("footer.php");
  $(".subMenu").hide();
  $("#home").addClass("active");
  $("#dthome").addClass("dtactive");
  $("#xbutton").hide();

// NAV MENU FOR DESKTOP AND MOBILE

//X mobile button close function
  function closeX(){
//  $(".navSubButton").fadeOut("fast",function(){
      $(".subMenu").slideUp("slow");
  //  });
  $("#xbutton").fadeOut("slow",function(){
    $(".navDropButton").fadeIn("fast");
  });
}
//Desktop Main Button function
  function clickButton(){

  }
//Bars Mobile Button
  $(".navDropButton").on(("tap","click"), function(){
  //  $(".navSubButton").fadeOut("fast");
    $(".subMenu").slideDown("slow",function(){
    });
    $(".navDropButton").fadeOut("fast",function(){
      $("#xbutton").fadeIn("slow");
    });
  });
//X Mobile Button
  $("#xbutton").on(("tap","click"),function() {
    closeX();
  });

//Home Mobile Button
  $("#home").on(("tap","click"),function () {
    if($("#xbutton").css("display","none")){
    closeX();
  }

    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $(this).addClass("active");
    $("#dthome").addClass("dtactive");
    $("#content").load("indexfile.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
//Home Desktop Button
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
//Contact Us Mobile Button
  $("#contactus").on(("tap","click"),function () {
    if($("#xbutton").css("display","none")){
    closeX();
  }
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
//Contact Us Desktop Button
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
//Activities Mobile Button
  $("#activities").on(("tap","click"),function () {
    if($("#xbutton").css("display","none")){
    closeX();
  }
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
//Activities Desktop Button
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
//Curriculum Mobile Button
  $("#curriculum").on(("tap","click"),function () {
    if($("#xbutton").css("display","none")){
    closeX();
  }
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
//Curriculum Desktop Button
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
//Our Facility Mobile Button
  $("#ourfacility").on(("tap","click"),function () {
    if($("#xbutton").css("display","none")){
    closeX();
  }
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
//Our Facility Desktop Button
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
//News Mobile Button
  $("#announcements").on(("tap","click"),function () {
    if($("#xbutton").css("display","none")){
    closeX();
  }

    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#announcements").addClass("active");
    $(".navDropButton").addClass("active");
    $("#dtabout").addClass("dtactive");
    $("#dtannouncements").addClass("dtactive");
    $("#content").load("announcements.html");
    $("#footer").show();
    closeX();
    $(document).scrollTop(0);
  });
//News Desktop Button
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
//Registration & Rates Mobile Button
  $("#rates").on(("tap","click"), function () {
    if($("#xbutton").css("display","none")){
    closeX();
  }
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#rates").addClass("active");
    $("#dtrates").addClass("dtactive");
    $("#content").load("rates.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
//Registration & Rates Desktop Button
  $("#dtrates").click(function() {
    $(".subMenu").hide();
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $(this).addClass("active");
    $("#dtrates").addClass("dtactive");
    $("#content").load("rates.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
//Pay/Payment Mobile Button
  $("#payment").on(("tap","click"),function () {
    if($("#xbutton").css("display","none")){
    closeX();
  }
    $("*").removeClass("active");
    $("*").removeClass("dtactive");
    $("#payment").addClass("active");
    $("#dtpayment").addClass("dtactive");
    $("#content").load("payment.php");
    $("#footer").show();
    $(document).scrollTop(0);
  });
//Pay/Payment Desktop Button
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
