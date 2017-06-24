<?php require_once( 'edit/cms.php' ); ?>
<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      .icon {
        font-size:2em;
        width:50px;
        height:auto;

      }
      .orange {
        color:rgb(255, 174, 122);
      }
      .building {

      }
      .float {
        float:left;
      }
      .clear {
        clear:both;
      }

    </style>
  </head>
  <body>
    <div class="container containerWidth">
    <cms:editable name='facility' type='richtext'>
      <h2>Open Door Policy</h2>
      <p>Shirley's Mother Goose maintains an open-door policy. Feel free to come by at anytime to tour our facility. Rest period is observed from noon to 2 p.m. Lunch is served between 10:45 a.m. and noon.</p>
      <hr>

      <h2>Building</h2>
      <p class="clear">Shirley's Mother Goose is located in a 7500 square ft. facility at 1314 East River Avenue in Searcy, Arkansas. The complex houses 10 classrooms with multiple bathrooms, three playgrounds, a dining room, a kitchen, an office, a resource/teacher's room, a staff bathroom and a library.</p>
      <img src="img/mother+goose.png" style="width:100%;"/>
      <hr>

      <h2>Classrooms</h2>
      <p>Children are divided into separate rooms according to age, developmental maturity and availability. There are two infant classrooms (6 weeks to 1 year), two toddler classrooms (1 year to 2 years), two preschool (2 to 3 1/2 years) classrooms, two pre-kindergarten classrooms (3 1/2 years to 5 years) and two school-age classrooms (5 to 12 years) providing roomy space for children to both learn and play.</p>
      <hr>
      <h2>Playgrounds</h2>
      <p>Shirley's Mother Goose has one infant and toddler playground, one large preschool and pre-kindergarten playground and one large school age playground. Each playground is fenced and has age appropriate manipulatives that promote both gross and fine motor play. Outdoor gross motor play is scheduled separately for each age group.</p>
</cms:editable>
      <hr>
    </div>
  </body>
</html>
<?php COUCH::invoke(); ?>
