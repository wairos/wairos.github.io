<?php require_once( 'edit/cms.php' ); ?>
<!DOCTYPE html>
<html>
<footer class="textCenter contact" style="border-top:2px solid radial-gradient(red, yellow, green); ;">
  <cms:editable name="thefooter" type="richtext">
  <h1 class="darkGreen">Contact Us</h1>
  <p>1314 East River Ave  Searcy, Arkansas 72143</p>
  <p>M-F 6:00 a.m. to 6:00 p.m.</p>
  <p  class="pink"><strong>(501) 268-7019</strong>   <a class="link" href="jwaire@mgoose.org">Email</a></p>
  </cms:editable>
  <a href="https://www.facebook.com/mothergoosedaycare" class="fa fa-facebook" style="border-radius:0px; width:200px;"></a>
  <a href="https://twitter.com/mgdaycare" class="fa fa-twitter" style="border-radius:0px; width:200px;"></a>
  </footer>
  <div class="greenBG textCenter" style="height:150px; width:100%;margin-bottom:-10;">
    <img src="img/MotherGooseNewleft.png" style="height:100%;padding:1em 0 1em 0;"/>
  </div>
</html>
<?php COUCH::invoke(); ?>
