
$(document).ready(function(){

    $.getJSON("https://graph.facebook.com/v2.9/me?fields=name%2Cfeed.limit(5)&access_token=725038674323454|784aa8ef51451b402c48b7b138ded785",function (response){
      if(response){
      console.log(response);
        for(var i = 0; i < response.feed.data.length; i++){
          var timestamp = response.feed.data[i].created_time.slice(5,10) + "-" + response.feed.data[i].created_time.slice(0,4);
          $("#facebook").append("<li><h3 class=\"pink\">" + timestamp + "</h3>" + "<p>" + response.feed.data[i].message + "</p><hr></li>");
        }
      }else if(response.status === 400){
        $("#facebook").append("<li><h2>Error</h2><p>Sorry we are experiencing too much traffic. Check back later or go to our Facebook page for up-to-date announcements.);");
     }
    });

});
