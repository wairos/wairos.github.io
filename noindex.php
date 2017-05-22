<?php require_once( 'edit/cms.php' ); ?>
<!DOCTYPE html>
<html>
<head>
  <link rel="shortcut icon" href="favicon.ico" />
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <link rel="stylesheet" type="text/css" href="style.css">
  <!-- Add icon library -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto" rel="stylesheet">
  <title>Shirley's Mother Goose</title>
</head>
<body>
<!-- NAV BAR -->
  <nav>
    <ul class="navul">
    <li class="navli active"><a class="nava" href="\index.php">Home</a></li>
    <li class="navli dropdown">
      <a class="dropbtn" style="text-decoration:none;color:white;" href="javascript:void(0)">About Us</a>
      <div class="dropdown-content">
        <a href="\contactus.php">Contact Us</a>
        <a href="\activities.php">Activities</a>
        <a href="\curriculum.php">Curriculum</a>
        <a href="\ourfacility.php">Our Facility</a>
      </div>
    </li>
    <li class="navli"><a class="nava" href="\rates.php">Registration & Rates</a></li>
    <li class="navli"><a class="nava" href="\payment.php">Payment</a></li>
    <li><a href="https://twitter.com/mgdaycare" class="hidden-xs navsocial fa fa-twitter"> </a></li>
    <li><a href="https://www.facebook.com/mothergoosedaycare" class="hidden-xs navsocial fa fa-facebook"></a></li>
    <li class="navphone white hidden-xs"><a style="padding: 0px 0px;" href="tel:15012687019"><strong>(501) 268-7019</strong></a></li>
  </ul>
  </nav>
<!-- HEADER -->
  <header class="greenBG header">
   <div class="container text-center" style="max-width:1400px;">
    <div class="row">
     <div  class="col-md-offset-1 col-md-1 col-sm-12 col-xs-12">
      <img class="" src="img/Mother+GooseNew).png" style="width:150px;"/>
     </div>
     <div class="col-md-8 col-sm-12 col-xs-12  white">
      <h1 class="" style="font-size:3.2em;"><strong>Shirley's Mother Goose</strong></h1>
      <h2 class="" style="margin-top:-10px;margin-bottom:10px;">Preschool & Daycare</h2>
      <p class="pink" style="margin-bottom:-.5px;"><strong>(501) 268-7019</strong></p>
      <p class="hidden-sm hidden-xs darkGreen text-center">M-F 6:00 a.m. to 6:00 p.m.<br>1314 East River Ave.<br>Searcy, AR 72143</p>
     </div>
    </div>
   </div>
  </header>
<!-- BETTER BEGINNINGS BANNER -->
  <div style="background-color:rgb(150, 150, 150);margin-top:-20px;">
    <h2 class="textCenter" style="color:white; font-family:'Open Sans';padding:.2em 0 .25em 0;">We are a <span><a class="link" href="http://www.arbetterbeginnings.com/" target="_blank">Better Beginnings</a></span>-certified licensed childcare facility in Searcy, Arkansas.</h2>
  </div>
  <!-- Editable ANNOUNCEMENT AREA -->
  <div id="programInfo" class="container containerWidth">
    <cms:editable name='announcement_area' type='richtext'>
    <h2 class="pink textCenter" id="Announcement" style="font-family:'Open Sans';"><strong><em></em></strong></h2>
  </cms:editable>
</div>
<!-- IMAGE CAROUSEL-->
    <div class="container carasel">
    <div id="myCarousel" class="carousel slide" data-ride="carousel" style="margin: 1em 0 1em 0;">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner">
        <div class="item active">

          <img src="img/April.001.png" alt="3-star Better Beginnings Provider" style="width:100%;">
        </div>

        <div class="item">
          <img src="img/Announcements-August.020.jpg" alt="Better Beginnings" style="width:100%;">
        </div>

        <div class="item">
          <img src="img/Announcements-August.018.jpg" alt="Like us on Facebook" style="width:100%;">
        </div>

      </div>

      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <!-- PROGRAM INFORMATION -->
  <cms:editable name="program_information" type="richtext">
  <div class="container containerWidth">
    <div class="row">
      <div class="col-xs-6 text-center">

        <h3 class="darkGreen" style="font-family:'Open Sans';">Our Commitment</h3>
        <p style="text-align:left; font-family:'Roboto';">Shirley's Mother Goose provides quality and affordable childcare to children 6 weeks and older.</p>
      </div>
      <div class="col-xs-6 text-center">
        <h3 class="darkGreen">Our Program</h3>
        <p style="text-align:left;">Shirley's Mother Goose is a licensed and Better Beginnings certified childcare facility that uses a theme-based approach to learning.</p>
      </div>
    </div>
  </div>
</cms:editable>
<!-- OWNER QUOTE -->
  <cms:editable name="owner_quote" type="richtext">
  <div class="container containerWidth headroom">
    <blockquote class="" style="background-color:rgb(255, 174, 122);">
    <p class="text-left white">“Mother Goose Preschool and Daycare Center is operated with the philosophy that all children deserve a safe, healthy, trusting and loving learning environment where their social, emotional, physical, language and cognitive skills can grow.”</p>
    <footer><cite class="white">Shirley Waire, Owner</cite></footer>
    </blockquote>
  </div>
  </cms:editable>
  <!-- BUILDING IMAGE -->
  <img class="headroom" style="width:100%" src="img/mother+goose.png"/>
<!-- FOOTER -->
  <?php include('footer.html');?>
</body>
</html>
<?php COUCH::invoke();?>
