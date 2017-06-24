<?php require_once( 'edit/cms.php' ); ?>
<!DOCTYPE html>
<html>
 <head>
   <style type="text/css">
    .box {
      border-top:1px solid rgba(180,180,180,.4);
      height:200px;
    }
    .box h3, .box p {
      height: 20%;
    }
    .headroom {
      margin-top:2em;
    }

   </style>
 </head>
 <body>
<!-- HOURS OF OPERATION -->
    <div class="container containerWidth textCenter">
    <h2 class="darkGreen headroom">Hours of Operation</h2>
    <p><span class="pink">Open</span>: Weekdays<br>6:00 a.m. - 6:00 p.m.<br><span class="pink">Closed</span>: Weekends, 4th of July, Thanksgiving Day, Christmas Day, and New Year's Day.</p>
  <!-- CONTACT INFO -->

    <h2 class="headroom">Contact Information</h2>
    <div class="row">
     <div class="col-md-6 col-xs-12 box">
      <h3 class="pink">Phone Number</h3>
      <p><strong class="darkGreen">(501) 268-7019</strong><br>Feel free to call our friendly staff with any questions!</p>
    </div>
  <div class="col-md-6 col-xs-12 box">
    <h3 class="pink">Email</h3>
    <p><a class="link" href="jwaire@mgoose.org">jwaire@mgoose.org</a><br>Feel free to email our coorindinator Mr. Josh with any questions or concerns.</p>
  </div>
  </div>
  <div class="row">
  <div class="col-md-6 col-xs-12 box">
    <h3 class="pink">Social Sites</h3>
      <a href="https://www.facebook.com/mothergoosedaycare" class="fa fa-facebook"></a>
      <a href="https://twitter.com/mgdaycare" class="fa fa-twitter"> </a>
      <p>Subscribe to our Facebook page and follow us on Twitter for the lastest news and announcements!</p>
    </div>
    <div class="col-md-6 col-xs-12 box">
    <h3 class="pink">Address</h3>
    <p><strong class="darkGreen">1314 East River Ave<br>Searcy, Arkansas 72143</strong><br>Come tour our facility and meet our friendly staff in person.</p>
  </div>
  </div>
    </div>
    <div class="greenBG textCenter" style="height:150px; width:100%;margin-bottom:-10;">
      <img src="img/MotherGooseNewleft.png" style="height:100%;padding:1em 0 1em 0;"/>
    </div>
  </body>
</html>
<?php COUCH::invoke(); ?>
