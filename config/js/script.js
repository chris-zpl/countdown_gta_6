// Set the date we're counting down to
let countDownDate = new Date("May 26, 2026 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = `<div class="d-flex flex-column countdown-style m-0"><p>${days.toString().padStart(2, '0')}</p><span>DAYS</span></div>`;
  document.getElementById("hours").innerHTML = `<div class="d-flex flex-column countdown-style m-0"><p>${hours.toString().padStart(2, '0')}</p><span>HOURS</span></div>`;
  document.getElementById("minutes").innerHTML = `<div class="d-flex flex-column countdown-style m-0"><p>${minutes.toString().padStart(2, '0')}</p><span>MINUTES</span></div>`;
  document.getElementById("seconds").innerHTML = `<div class="d-flex flex-column countdown-style m-0"><p>${seconds.toString().padStart(2, '0')}</p><span>SECONDS</span></div>`;

  // If the count down is over
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = '<div class="d-flex flex-column countdown-style m-0"><p>00</p><span>DAYS</span></div>';
    document.getElementById("hours").innerHTML = '<div class="d-flex flex-column countdown-style m-0"><p>00</p><span>HOURS</span></div>';
    document.getElementById("minutes").innerHTML ='<div class="d-flex flex-column countdown-style m-0"><p>00</p><span>MINUTES</span></div>';
    document.getElementById("seconds").innerHTML = '<div class="d-flex flex-column countdown-style m-0"><p>00</p><span>SECONDS</span></div>';
  }
}, 1000);