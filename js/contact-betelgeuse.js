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

let summoningSpot = document.getElementById("summoningSpot");
let showtime = document.getElementById("showTimeAudio");
let mirror = document.getElementById("mirror");
let wallpaper = document.getElementById("wallpaper");
let counter = document.getElementById("counter");

function showTimeAudio() {
  showtime.play();
};

function hideMirror() {
  mirror.style.opacity = "0";
};

function hideSummoningSpot() {
  summoningSpot.style.opacity = "0";
}

function showBG () {
  wallpaper.style.background = "url('images/betelgeuse-showtime.png') no-repeat center";
};

function fullCover () {
  wallpaper.style.backgroundSize = "cover";
};

function removeCounter() {
  counter.style.display = "none";
};

$("#clickable").on( "click", function() {
  click_count++;

    if(click_count == 3){
        click_count = 0;
         setTimeout(removeCounter, 1200);
         setTimeout(showTimeAudio, 1500);
         setTimeout(hideMirror, 1500);
         setTimeout(hideSummoningSpot, 1500);
         setTimeout(showBG, 1500);
         setTimeout(fullCover, 1500);
    }

});
