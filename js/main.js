function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
  setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i;
}

const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
$(function () {
  let i = 0;
  $("#dvImage").css("background-image", "url(images/" + images[i] + ")");
  setInterval(function () {
    i++;
    if (i === images.length) {
      i = 0;
    }
    $("#dvImage").fadeOut("250", function () {
      $(this).css("background-image", "url(images/" + images[i] + ")");
      $(this).fadeIn("250");
    });
  }, 5000);
});

$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});
