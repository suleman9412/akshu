/* ====================================
   BIRTHDAY WEBSITE JS — KIDDU
   ==================================== */

// ===== IMAGE LIST (all 40 photos) =====
const images = [
  "WhatsApp Image 2026-03-01 at 15.30.33 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.33 (2).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.33.jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.34 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.34.jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.35 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.35.jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.36 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.36 (2).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.36.jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.37 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.37.jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.38 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.38 (2).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.38.jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.39 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.39 (2).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.39.jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.40 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.40.jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.41 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.30.41.jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.44 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.44 (2).jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.44.jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.45 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.45 (2).jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.45.jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.46.jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.47 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.47 (2).jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.47.jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.48 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.48.jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.49 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.49.jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.50 (1).jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.50 (2).jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.50.jpeg",
  "WhatsApp Image 2026-03-01 at 15.44.51.jpeg"
];

const captions = [
  "Kiddu 🌷", "Meri Queen 👑", "Confidence Level: 💯", "Khubsoorat 💗",
  "Rockstar 🎤", "PVR Date 🎬", "Green is her color 💚", "Glow ✨",
  "Natural beauty 🌸", "That smile 😊", "Unstoppable 🔥", "Kiddu vibes 😼",
  "Paagal hai pyari hai 💗", "Smiley face 😄", "Zabardast zindagi 💫",
  "Always on point 💅", "Content creator mode 🎥", "Makkah wali duaa 🤲",
  "Ghumne wali 🏔️", "Badminton champion 🏸", "Dance star 💃", "4 medals 🏅",
  "Her world 🌍", "Tulip wali ladki 🌷", "Ziddi but lovely 😂",
  "Mystery mode 🌚", "Pasta queen 🍝", "School girl 📚", "Holiday mode ✌️",
  "White sauce supremacy 🍝", "Hogayi date 😄", "Ammi se daro mat 😂",
  "Mountain dreams ⛰️", "Dubai planning 🌇", "Hoodie gang 👕",
  "Kho-kho championship 🏃", "aakshubby vibes 📱", "Gajraula memories 🚗",
  "Birthday girl 🎂", "Our Kiddu 💗"
];

let currentLightboxIndex = 0;

// ===== LOADER =====
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initFloatingElements();
    initBalloons();
    initWishesSlider();
  }, 2800);
});

// ===== GALLERY =====
function initGallery() {
  const grid = document.getElementById('galleryGrid');
  images.forEach((img, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="images/${encodeURIComponent(img)}" alt="Kiddu ${i + 1}" loading="lazy" />
      <div class="gallery-overlay">💗 ${captions[i] || 'Kiddu'}</div>
    `;
    item.addEventListener('click', () => openLightbox(i));
    grid.appendChild(item);
  });
}

// ===== LIGHTBOX =====
function openLightbox(index) {
  currentLightboxIndex = index;
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightboxImg');
  img.src = `images/${encodeURIComponent(images[index])}`;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function nextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % images.length;
  document.getElementById('lightboxImg').src = `images/${encodeURIComponent(images[currentLightboxIndex])}`;
}

function prevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + images.length) % images.length;
  document.getElementById('lightboxImg').src = `images/${encodeURIComponent(images[currentLightboxIndex])}`;
}

document.addEventListener('keydown', (e) => {
  const lb = document.getElementById('lightbox');
  if (!lb.classList.contains('open')) return;
  if (e.key === 'ArrowRight') nextImage();
  if (e.key === 'ArrowLeft') prevImage();
  if (e.key === 'Escape') closeLightbox();
});

// ===== FLOATING ELEMENTS =====
function initFloatingElements() {
  const container = document.getElementById('floatingElements');
  const emojis = ['🌷', '💗', '✨', '🌟', '💫', '🎶', '🎵', '🌸', '🌺', '💖'];

  emojis.forEach((emoji, i) => {
    const el = document.createElement('div');
    el.className = 'floating-el';
    el.textContent = emoji;
    el.style.left = `${Math.random() * 95}%`;
    el.style.animationDuration = `${6 + Math.random() * 10}s`;
    el.style.animationDelay = `${Math.random() * 5}s`;
    el.style.fontSize = `${0.8 + Math.random() * 1.5}rem`;
    container.appendChild(el);
  });

  // Continuously add
  setInterval(() => {
    const el = document.createElement('div');
    el.className = 'floating-el';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = `${Math.random() * 95}%`;
    el.style.animationDuration = `${7 + Math.random() * 10}s`;
    el.style.animationDelay = '0s';
    el.style.fontSize = `${0.8 + Math.random() * 1.5}rem`;
    container.appendChild(el);
    setTimeout(() => el.remove(), 20000);
  }, 2000);
}

// ===== BALLOONS =====
function initBalloons() {
  const container = document.getElementById('balloonsContainer');
  const balloons = ['🎈', '🎀', '🎊', '🎉', '🎁', '🎂'];

  function addBalloon() {
    const b = document.createElement('div');
    b.className = 'balloon';
    b.textContent = balloons[Math.floor(Math.random() * balloons.length)];
    b.style.left = `${Math.random() * 90}%`;
    b.style.animationDuration = `${5 + Math.random() * 8}s`;
    b.style.animationDelay = '0s';
    b.style.fontSize = `${1.5 + Math.random() * 2}rem`;
    container.appendChild(b);
    setTimeout(() => b.remove(), 15000);
  }

  setInterval(addBalloon, 800);
}

// ===== WISHES SLIDER =====
let currentWish = 0;
let wishInterval;

function initWishesSlider() {
  const slides = document.querySelectorAll('.wish-slide');
  const dotsContainer = document.getElementById('sliderDots');

  slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => goToWish(i);
    dotsContainer.appendChild(dot);
  });

  wishInterval = setInterval(() => {
    goToWish((currentWish + 1) % slides.length);
  }, 3500);
}

function goToWish(index) {
  const slides = document.querySelectorAll('.wish-slide');
  const dots = document.querySelectorAll('.dot');

  slides[currentWish].classList.remove('active');
  dots[currentWish].classList.remove('active');

  currentWish = index;

  slides[currentWish].classList.add('active');
  dots[currentWish].classList.add('active');
}

// ===== LETTER & MYSTERY MODE =====
function checkPassword() {
  document.getElementById('letterEnvelope').style.display = 'none';
  document.getElementById('passwordModal').style.display = 'block';
  document.getElementById('secretPassword').focus();
}

function verifyPassword() {
  const pwd = document.getElementById('secretPassword').value.toLowerCase().trim();
  const errorText = document.getElementById('passwordError');

  // Acceptable passwords
  if (pwd.includes('tulip') || pwd.includes('kiddu') || pwd.includes('pasta') || pwd.includes('white sauce')) {
    document.getElementById('passwordModal').style.display = 'none';
    const content = document.getElementById('letterContent');
    content.classList.add('open');
    launchConfetti();
  } else {
    errorText.textContent = "Galat jawab 🌚 Wapas try karo!";
  }
}

// Accept enter key for password
document.getElementById('secretPassword')?.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') verifyPassword();
});

// ===== COUPONS =====
function redeemCoupon(el) {
  if (el.classList.contains('redeemed')) return;
  el.classList.add('redeemed');
  const status = el.querySelector('.coupon-status');
  status.textContent = 'Redeemed! 💖';
  launchConfetti();
}

// ===== VIRAL TIME TOGETHER COUNTER =====
function initTimeTogether() {
  // Set start date to May 1, 2023 to add 2 extra years
  const startDate = new Date('May 1, 2023 00:00:00').getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = now - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('t-days').innerText = days;
    document.getElementById('t-hours').innerText = hours;
    document.getElementById('t-mins').innerText = minutes;
    document.getElementById('t-secs').innerText = seconds;
  }, 1000);
}

// ===== VOICE NOTE =====
let vnPlaying = false;
function toggleVoiceNote() {
  const audio = document.getElementById('voiceNote');
  const icon = document.getElementById('vn-icon');
  const text = document.getElementById('vn-text');

  if (vnPlaying) {
    audio.pause();
    icon.textContent = '▶️';
    text.textContent = 'Play My Voice Message';
  } else {
    audio.play().catch(() => alert('Please add voice-note.mp3 to the folder!'));
    icon.textContent = '⏸️';
    text.textContent = 'Pause Message';
  }
  vnPlaying = !vnPlaying;

  audio.onended = () => {
    vnPlaying = false;
    icon.textContent = '▶️';
    text.textContent = 'Play My Voice Message';
  };
}

// ===== MUSIC =====
let musicPlaying = false;

function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  const icon = document.getElementById('music-icon');
  const label = document.getElementById('music-label');

  if (musicPlaying) {
    audio.pause();
    icon.textContent = '🎵';
    label.textContent = 'Play Music';
  } else {
    audio.play().catch(() => { });
    icon.textContent = '⏸️';
    label.textContent = 'Pause Music';
  }
  musicPlaying = !musicPlaying;
}

// ===== CONFETTI =====
let confettiAnimId = null;
const confettiParticles = [];

function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  const colors = ['#ff6b9d', '#ffd700', '#9b59b6', '#ff4757', '#2ed573', '#1e90ff', '#ffa502'];
  const shapes = ['circle', 'square', 'triangle'];

  for (let i = 0; i < 200; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: -20,
      vx: (Math.random() - 0.5) * 6,
      vy: Math.random() * 5 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      size: Math.random() * 12 + 5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 8,
      opacity: 1,
      gravity: 0.15
    });
  }

  if (confettiAnimId) cancelAnimationFrame(confettiAnimId);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiParticles.forEach((p, i) => {
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.008;

      if (p.opacity <= 0 || p.y > canvas.height + 20) {
        confettiParticles.splice(i, 1);
        return;
      }

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'square') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        ctx.beginPath();
        ctx.moveTo(0, -p.size / 2);
        ctx.lineTo(p.size / 2, p.size / 2);
        ctx.lineTo(-p.size / 2, p.size / 2);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    });

    if (confettiParticles.length > 0) {
      confettiAnimId = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.timeline-item, .fact-card').forEach(el => {
    observer.observe(el);
  });
}

// ===== WINDOW RESIZE =====
window.addEventListener('resize', () => {
  const canvas = document.getElementById('confettiCanvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initScrollAnimations();
  initTimeTogether();
});

// Add cursor sparkle effect
document.addEventListener('mousemove', (e) => {
  const spark = document.createElement('div');
  spark.style.cssText = `
    position: fixed;
    left: ${e.clientX}px;
    top: ${e.clientY}px;
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, #ff6b9d, transparent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    animation: sparkle 0.6s ease forwards;
  `;
  document.body.appendChild(spark);
  setTimeout(() => spark.remove(), 600);
});

const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
  @keyframes sparkle {
    0% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(3); }
  }
`;
document.head.appendChild(sparkleStyle);
