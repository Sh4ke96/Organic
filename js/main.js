const countDownDate = new Date("Jul 31, 2021 15:37:25").getTime();

const countDownUpdate = setInterval(function () {
  const dateNow = new Date().getTime();
  const distance = countDownDate - dateNow;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = `${days} DAYS`;
  document.getElementById("hours").innerHTML = `${hours} HR`;
  document.getElementById("minutes").innerHTML = `${minutes} MIN`;
  document.getElementById("seconds").innerHTML = `${seconds} SEC`;
});

const scrollUpBtn = document.querySelector(".scroll__up");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

scrollUpBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
