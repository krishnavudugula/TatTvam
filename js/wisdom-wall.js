/* =============================================
   TATTVAM - Anonymous Wisdom Wall JS
   ============================================= */

(function () {
  'use strict';

  const SEED_WISDOM = [
    { text: "The day I stopped asking 'why me?' and started asking 'what now?' - everything changed.", author: "A seeker", tag: "Perspective", time: "3 days ago" },
    { text: "Forgiveness is not about the other person. It's about freeing your own mind from the prison of resentment.", author: "A seeker", tag: "Forgiveness", time: "1 week ago" },
    { text: "Reading the Gita didn't give me answers. It gave me the strength to sit with the questions.", author: "A seeker", tag: "Scripture", time: "2 weeks ago" },
    { text: "My grandfather said: 'Dharma is not what is easy. It is what is right.' I finally understand.", author: "A seeker", tag: "Dharma", time: "5 days ago" },
    { text: "I used to think detachment meant not caring. Now I know it means caring without clinging.", author: "A seeker", tag: "Detachment", time: "4 days ago" },
    { text: "The biggest battle is not outside. It's the one between who you are and who you're afraid to become.", author: "A seeker", tag: "Battlefield", time: "1 week ago" },
    { text: "Meditation taught me that silence is not empty. It's full of answers you're too busy to hear.", author: "A seeker", tag: "Meditation", time: "6 days ago" },
    { text: "Serve without counting. Give without remembering. Receive without forgetting. That is Karma Yoga.", author: "A seeker", tag: "Karma", time: "2 days ago" },
    { text: "Anger is like a hot coal - you hold it hoping to throw it at someone else, but you are the one who gets burned.", author: "A seeker", tag: "Anger", time: "10 days ago" },
    { text: "Your right is to action alone, not to its fruits. Focus on the quality of your step, not the destination.", author: "A seeker", tag: "Gita", time: "12 days ago" },
    { text: "Peace is not the absence of storm, but the stillness at the center of it. Krishna in the chariot.", author: "A seeker", tag: "Peace", time: "3 weeks ago" },
    { text: "We suffer more in imagination than in reality. The fears Arjuna had were larger than the actual battle.", author: "A seeker", tag: "Mindset", time: "11 days ago" },
    { text: "In a world of constant noise, satya (truth) is the ultimate filter. Speak only what is true, kind, and useful.", author: "A seeker", tag: "Truth", time: "8 days ago" },
    { text: "Grief is the price we pay for love. It does not go away; we simply grow around it.", author: "A seeker", tag: "Grief", time: "4 weeks ago" },
    { text: "Consistency beats intensity every single time. 5 minutes of daily reflection is better than a 2-hour retreat once a year.", author: "A seeker", tag: "Discipline", time: "Today" },
    { text: "Comparison is the thief of joy. Duryodhana's palace was grand, but his envy turned it into a prison.", author: "A seeker", tag: "Comparison", time: "2 days ago" },
    { text: "The mind is a restless wind. Do not fight it; simply build the banks of practice (Abhyasa) to guide it.", author: "A seeker", tag: "Mind", time: "1 day ago" },
    { text: "Svadharma means doing what you are designed for. Better to fail at your own calling than succeed at another's.", author: "A seeker", tag: "Purpose", time: "9 days ago" },
    { text: "When you feel lost, remember that the compass of dharma only shows the next step, not the whole map. Take it.", author: "A seeker", tag: "Dilemma", time: "5 days ago" },
    { text: "True charity (Dana) is done silently. If your left hand knows what your right hand gives, it is business, not seva.", author: "A seeker", tag: "Charity", time: "1 week ago" }
  ];

  // --- State ---
  let wisdomList = [];

  // --- DOM Selectors ---
  const wallContainer = document.getElementById('wallContainer');
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalOverlay = document.getElementById('modalOverlay');
  const submitWisdomBtn = document.getElementById('submitWisdomBtn');
  const wisdomTextarea = document.getElementById('wisdomTextarea');
  const wisdomTagInput = document.getElementById('wisdomTagInput');

  // --- Init ---
  function init() {
    loadWisdom();
    renderWall();
    bindEvents();
  }

  // --- Load Data ---
  function loadWisdom() {
    const stored = localStorage.getItem('tattvam-wisdom-wall');
    if (stored) {
      wisdomList = JSON.parse(stored);
    } else {
      wisdomList = [...SEED_WISDOM];
      saveWisdom();
    }
  }

  function saveWisdom() {
    localStorage.setItem('tattvam-wisdom-wall', JSON.stringify(wisdomList));
  }

  // --- Render Wall ---
  function renderWall() {
    wallContainer.innerHTML = wisdomList.map(w => `
      <div class="wisdom-card reveal">
        <p class="wisdom-text">${escapeHTML(w.text)}</p>
        <div class="wisdom-footer">
          <span>${escapeHTML(w.author)} • ${escapeHTML(w.time)}</span>
          <span class="wisdom-tag">#${escapeHTML(w.tag || 'Reflections')}</span>
        </div>
      </div>
    `).join('');

    // Trigger scroll reveals
    setTimeout(() => {
      const reveals = wallContainer.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(el => observer.observe(el));
    }, 100);
  }

  // --- Bind Events ---
  function bindEvents() {
    // Modal controls
    openModalBtn.addEventListener('click', () => {
      modalOverlay.classList.add('active');
      wisdomTextarea.focus();
    });

    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });

    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
      }
    });

    // Submit new wisdom
    submitWisdomBtn.addEventListener('click', () => {
      const text = wisdomTextarea.value.trim();
      const tag = wisdomTagInput.value.trim() || "Reflection";

      if (text.length < 10) {
        alert("Please write at least a sentence of wisdom (min 10 characters) ✦");
        return;
      }

      const newEntry = {
        text: text,
        author: "A seeker",
        tag: tag,
        time: "Just now"
      };

      wisdomList.unshift(newEntry);
      saveWisdom();
      
      // Reset & close
      wisdomTextarea.value = '';
      wisdomTagInput.value = '';
      modalOverlay.classList.remove('active');

      // Re-render
      renderWall();
    });

    // Mobile nav
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    });

    toggle?.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  init();

})();
