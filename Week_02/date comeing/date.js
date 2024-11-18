const year = document.getElementById("year");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const CurrentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${CurrentYear + 1} 00:00:00`);
const loading = document.getElementById("loading");
const countDowen = document.getElementById("countdown");

function updateCuountDowen() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;
  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

  year.innerHTML = CurrentYear + 1;
}
// updateCuountDowen();
setInterval(updateCuountDowen, 1000);
//set time out
function hideAnimation() {
  loading.remove();
  countDowen.style.display = "flex";
}
setTimeout(hideAnimation, 1000);
