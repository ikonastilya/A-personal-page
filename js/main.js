function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes(); // PC time
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


let clickCount = 1;
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
setTimeout(() => {
  document.getElementById("dvImage").style.backgroundImage = 'url(images/' + images[0] + ')';
})
setTimeout(() => {
  document.getElementById("dvImage").addEventListener("click", () => {
    if (clickCount === images.length) {
      clickCount = 0;
    }

    let someimage = images[clickCount];

    let dvImage = document.getElementById("dvImage");
    dvImage.style.backgroundImage = 'url(images/' + someimage + ')';
    clickCount++;
  })
})


window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
    document.body.querySelector("h1").style.color = "#222222";
  }, 3000);
});
