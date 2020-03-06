var i = 0;
var txt = 'General Hospital is committed to being a leading provider of health care services by delivering high quality outcomes for patients and ensuring long term profitability.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.querySelector(".banner-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}