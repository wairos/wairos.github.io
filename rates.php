<?php require_once( 'edit/cms.php' ); ?>
<!DOCTYPE html>
<html>
  <head>
    <style type="text/css">
      .margin {
        padding-left: 10px;
      }
    .link  li {
        line-height: 1.5em;

      }
      td {
        padding:3px;
      }
    </style>
  </head>
  <body>
    <cms:editable name='rates' type='richtext'>
   <div class="container containerWidth">
   <h2>Rates</h2>
   <p>Rates are subject to change periodically. Please call (501) 268-7019 for the latest rate information.</p>
   <div class="container calendarWidth">


<table style="margin:0 auto;">
<h3 class="pink text-center">Weekly Rates</h3
  <tbody>
    <tr>

      <td  class="text-center">$95</td>
      <td class="text-left margin">6 Weeks - 3 Years</td>
    </tr>
    <tr>

      <td  class="text-center">$80</td>
      <td class="text-left margin">3 Years - 5 Years</td>
    </tr>
    <tr>

      <td  class="text-center">$50</td>
      <td class="text-left margin">School Age (In Session)</td>
    </tr>
    <tr>

      <td  class="text-center">$65</td>
      <td class="text-left margin">School Age (Summer)</td>
    </tr>
  </body>
</table>
<table style="margin:0 auto;">
  <tr>
  <thead><h3 class="text-center pink">One-Time Fees</h3></thead>
  </tr>
  <tr>
    <td>$25</td><td class="margin">Registration Fee</td>
  </tr>
  <tr>
    <td>$60</td><td class="margin">Summer Swim Fee (School Age)</td>
  </tr>

</table>
 </div>

  <hr>
  <h2>Weekly Tuition</h2>
  <p>Weekly tuition is due on Friday. Payment is accepted via cash, check, debit or credit card on-site and web payments via PayPal.</p>
  <p>Shirley's Mother Goose participates in the <a class="link" href="http://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&ved=0CCkQFjAA&url=http%3A%2F%2Fhumanservices.arkansas.gov%2Fdccece%2FPages%2FChildCareAssistance.aspx&ei=bfEVU_LbH8Wp2gWJpYHIAQ&usg=AFQjCNFs55cOv-QWwOrO8JJ3HvIA865HtA&bvm=bv.62286460,d.b2I" target="_blank">Arkansas Department of Human Service's voucher program</a> and the <a class="link" href="http://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&sqi=2&ved=0CCQQFjAA&url=http%3A%2F%2Fwww.arpathways.com%2F&ei=jfEVU67EOcWC2wWBvIGACg&usg=AFQjCNFsT-zqcQjM76IsE8VrL7qDgeYJRg&bvm=bv.62286460,d.b2I" target="_blank">Arkansas Career Pathways Initiative</a>.</p>
  <hr>

  <h2>Registration & Enrollment Forms</h2>
  <h3 class="text-center pink"> All 4 forms required</h3>
  <div class="container smallWidth">
  <ol class="text-center line-height">
    <li><a class="link" href="docs/Enrollment Form.docx">Enrollment Form</a></li>
    <li><a class="link" href="docs/Parent Handbook.docx">Parent Handbook</a></li>
    <li><a class="link" href="docs/Supplemental Program Policies.docx">Additional Policies</a></li>
    <li><a class="link" href="docs/USDAIEF.download">USDA Income Eligibility Form</a></li>
  </ol>
</div>
  <hr>
  <h2>Meals</h2>
  <p>Shirley's Mother Goose participates in the <a class="link" href="http://www.fns.usda.gov/cacfp/child-and-adult-care-food-program" target="_blank">US Department of Agriculture's Child Care Food Program</a> (CACFP). CACFP provides aid to child and adult care institutions and family or group day care homes for the provision of nutritious foods that contribute to the wellness, healthy growth and development of young children.</p>
  <p>As part of the program, Mother Goose serves breakfast, morning snack, lunch and afternoon snack each day.</p>
  <p>An income eligibility form will be included in each enrollment packet.</p>
  <hr>
</div>
</cms:editable>
  </body>
</html>
<?php COUCH::invoke(); ?>
