var times = 0;
var timem = 30;
setInterval(function() {
  var test = 80;
  if (times === 0) {
    times = 59;
    timem = timem - 1;
  }
  if (times < test) {
    times = times - 1;
  }

  if (times < 10) {
    $(".one").html("<h1 class='one'>" + timem + ":" + "0" + times + "<h/1>");
  } else {
    $(".one").html("<h1 class='one'>" + timem + ":" + times + "<h/1>");
  }
}, 1000);
