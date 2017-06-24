<?php require_once( 'edit/cms.php' ); ?>
<!DOCTYPE html>
<html>
  <head>
    <title>Shirley's Mother Goose</title>
  </head>
  <body>
      <!-- Editable ANNOUNCEMENT AREA -->
      <div id="programInfo" class="container containerWidth">
        <cms:editable name='announcementarea' type='richtext'>
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
      <cms:editable name="program_info" type="richtext">
      <div class="container containerWidth">
        <div class="row">
          <div class="col-xs-6 text-center">

            <h3 class="darkGreen" style="font-family:'Open Sans';">Our Commitment</h3>
            <p style="text-align:center; font-family:'Roboto';">Shirley's Mother Goose provides quality and affordable childcare to children 6 weeks and older.</p>
          </div>
          <div class="col-xs-6 text-center"  style="border-left:2px solid rgba(180,180,180,.4);">
            <h3 class="darkGreen">Our Program</h3>
            <p style="text-align:center;">Shirley's Mother Goose is a licensed and Better Beginnings certified childcare facility that uses a theme-based approach to learning.</p>
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

  </body>
</html>
<?php COUCH::invoke();?>
