// ===== 🎵 BACKGROUND MUSIC =====
window.addEventListener('click', () => {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
      music.volume = 0.5;
      music.play();
    }
  }, { once: true }); // plays once on first click (browser rule compliance)
  
  // ===== 💞 FLOATING HEARTS =====
  const heartsContainer = document.getElementById('hearts-container');
  
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-shape');
    heart.innerHTML = '♥';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heartsContainer.appendChild(heart);
  
    setTimeout(() => heart.remove(), 7000);
  }
  
  setInterval(createHeart, 400);
  
  // 🎁 Surprise Button Logic
const surpriseBtn = document.getElementById('surpriseBtn');
const hiddenMessage = document.getElementById('hiddenMessage');
const surpriseVideo = document.getElementById('surpriseVideo');

surpriseBtn.addEventListener('click', () => {
  const isHidden = hiddenMessage.classList.contains('hidden');
  hiddenMessage.classList.toggle('hidden');

  if (isHidden) {
    surpriseBtn.innerText = '💞 Hide Surprise';
    surpriseVideo.currentTime = 0; // restart video
    surpriseVideo.play(); // auto-play when shown
  } else {
    surpriseBtn.innerText = '🎁 Click Here for a Surprise';
    surpriseVideo.pause();
  }
});