// Set target date
const targetDate = new Date("November 22, 2025 00:00:00").getTime();
const countdown = document.getElementById("countdown");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // When countdown ends
  if (distance < 0) {
    clearInterval(timer);
    countdown.innerHTML = "It’s time! 🎉";
    setTimeout(() => window.location.href = "main.html", 2000);
  }
}, 1000); 