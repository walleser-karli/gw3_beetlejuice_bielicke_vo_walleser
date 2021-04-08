// Play "Betelgeuse" audio
var x = document.getElementById("callAudio");

function playAudio() {
  x.play();
}

// Counter on Betelgeuse clicks
var nextTime = document.getElementById("counter");

var callout = document.getElementById("clickable"),
  count = 0;
callout.onclick = function () {
  setTimeout( function() {
  count += 1;
  nextTime.innerHTML = count;
  if(count > 3) {
    count = 0;
    nextTime.innerHTML = "&nbsp;";
  }
}, 1000)};

// Bring up Betelgeuse image and play "showtime" audio on 3rd click
var click_count = 0;

$("#clickable").on( "click", function() {
  click_count++;

    if(click_count == 3){
        click_count = 0;
         setTimeout(function(){ document.getElementById("contact-form").innerHTML = "<figure class = 'betelgeuse-showtime'><img src = 'betelgeuse.jpg'></figure><audio autoplay autobuffer><source src='audio/showtime.ogg' type='audio/ogg'></source><source src='audio/showtime.mp3' type='audio/mpeg'></source></audio>";}, 1500);
    }

});
