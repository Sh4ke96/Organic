let countDownDate = new Date("Jul 31, 2021 15:37:25").getTime();

let countDownUpdate = setInterval(function () {
  let dateNow = new Date().getTime();
  let distance = countDownDate - dateNow;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = `${days} DAYS`;
  document.getElementById("hours").innerHTML = `${hours} HR`;
  document.getElementById("minutes").innerHTML = `${minutes} MIN`;
  document.getElementById("seconds").innerHTML = `${seconds} SEC`;
});
