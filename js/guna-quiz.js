/* =============================================
   TATTVAM - Discover Your Guna Quiz
   Interactive quiz logic & result calculation
   ============================================= */

(function () {
  'use strict';

  // --- Quiz Data ---
  const questions = [
    {
      id: 1,
      text: 'When you wake up in the morning, you usually feel:',
      options: [
        { text: 'Refreshed and grateful for a new day', guna: 'sattva' },
        { text: 'Eager to conquer the day\'s goals', guna: 'rajas' },
        { text: 'Reluctant to leave the comfort of bed', guna: 'tamas' }
      ]
    },
    {
      id: 2,
      text: 'When facing a difficult decision, you tend to:',
      options: [
        { text: 'Reflect deeply and consider all perspectives', guna: 'sattva' },
        { text: 'Act quickly and decisively', guna: 'rajas' },
        { text: 'Avoid or postpone the decision', guna: 'tamas' }
      ]
    },
    {
      id: 3,
      text: 'Your ideal way to spend free time:',
      options: [
        { text: 'Reading, meditation, or being in nature', guna: 'sattva' },
        { text: 'Working on ambitious projects or socializing', guna: 'rajas' },
        { text: 'Watching entertainment or sleeping', guna: 'tamas' }
      ]
    },
    {
      id: 4,
      text: 'How do you handle criticism?',
      options: [
        { text: 'Consider it thoughtfully for self-improvement', guna: 'sattva' },
        { text: 'Feel motivated to prove them wrong', guna: 'rajas' },
        { text: 'Feel hurt and withdraw', guna: 'tamas' }
      ]
    },
    {
      id: 5,
      text: 'Your relationship with food:',
      options: [
        { text: 'Prefer fresh, wholesome, moderate meals', guna: 'sattva' },
        { text: 'Love spicy, rich, stimulating food', guna: 'rajas' },
        { text: 'Tend toward processed, leftover, or excessive eating', guna: 'tamas' }
      ]
    },
    {
      id: 6,
      text: 'When someone wrongs you:',
      options: [
        { text: 'Forgive and move on with compassion', guna: 'sattva' },
        { text: 'Plan how to respond and assert yourself', guna: 'rajas' },
        { text: 'Hold a grudge silently', guna: 'tamas' }
      ]
    },
    {
      id: 7,
      text: 'Your approach to learning:',
      options: [
        { text: 'Deep study for understanding and wisdom', guna: 'sattva' },
        { text: 'Learn what\'s needed to achieve goals', guna: 'rajas' },
        { text: 'Learn only when absolutely necessary', guna: 'tamas' }
      ]
    },
    {
      id: 8,
      text: 'Your energy levels throughout the day:',
      options: [
        { text: 'Steady and balanced', guna: 'sattva' },
        { text: 'High but fluctuating', guna: 'rajas' },
        { text: 'Generally low or inconsistent', guna: 'tamas' }
      ]
    },
    {
      id: 9,
      text: 'What motivates you most?',
      options: [
        { text: 'Inner peace and spiritual growth', guna: 'sattva' },
        { text: 'Success, recognition, and achievement', guna: 'rajas' },
        { text: 'Comfort and security', guna: 'tamas' }
      ]
    },
    {
      id: 10,
      text: 'In conversations, you tend to:',
      options: [
        { text: 'Listen deeply and speak thoughtfully', guna: 'sattva' },
        { text: 'Lead the conversation and share opinions', guna: 'rajas' },
        { text: 'Stay quiet or engage in gossip', guna: 'tamas' }
      ]
    },
    {
      id: 11,
      text: 'Your approach to money:',
      options: [
        { text: 'Earn honestly, spend wisely, share generously', guna: 'sattva' },
        { text: 'Pursue wealth aggressively for status', guna: 'rajas' },
        { text: 'Spend impulsively or hoard anxiously', guna: 'tamas' }
      ]
    },
    {
      id: 12,
      text: 'When you see someone in need:',
      options: [
        { text: 'Help selflessly without expectation', guna: 'sattva' },
        { text: 'Help if it aligns with your network or goals', guna: 'rajas' },
        { text: 'Feel bad but don\'t act', guna: 'tamas' }
      ]
    },
    {
      id: 13,
      text: 'Your sleep pattern:',
      options: [
        { text: 'Regular, moderate, early riser', guna: 'sattva' },
        { text: 'Variable, often sacrificed for work or fun', guna: 'rajas' },
        { text: 'Excessive or irregular', guna: 'tamas' }
      ]
    },
    {
      id: 14,
      text: 'How do you handle change?',
      options: [
        { text: 'Adapt with acceptance and equanimity', guna: 'sattva' },
        { text: 'See it as an opportunity to advance', guna: 'rajas' },
        { text: 'Resist and feel anxious', guna: 'tamas' }
      ]
    },
    {
      id: 15,
      text: 'Your deepest desire:',
      options: [
        { text: 'Wisdom, liberation, and inner peace', guna: 'sattva' },
        { text: 'Power, influence, and achievement', guna: 'rajas' },
        { text: 'Pleasure, comfort, and avoidance of pain', guna: 'tamas' }
      ]
    }
  ];

  // --- Guna Result Data ---
  const gunaData = {
    sattva: {
      name: 'Sattva',
      sanskrit: 'सत्त्व',
      color: '#7A9E6A',
      tagline: 'The Light of Wisdom',
      description: 'Your nature radiates the luminous quality of Sattva - the force of harmony, purity, and awakened awareness. You are drawn to truth, compassion, and the deeper meaning of existence. Like the still surface of a sacred lake reflecting moonlight, your mind tends toward clarity and peace.',
      strengths: [
        'Natural wisdom and discernment (Viveka)',
        'Emotional stability and inner peace',
        'Compassion and selfless service',
        'Discipline in spiritual practice',
        'Ability to inspire and uplift others'
      ],
      growth: [
        'Beware of spiritual pride or detachment from worldly duties',
        'Balance contemplation with action',
        'Stay engaged with compassion, not aloofness',
        'Remember that even Sattva is a guna to transcend'
      ]
    },
    rajas: {
      name: 'Rajas',
      sanskrit: 'रजस्',
      color: '#D4943A',
      tagline: 'The Fire of Action',
      description: 'Your nature burns with the dynamic fire of Rajas - the force of passion, ambition, and creative energy. You are a doer, a builder, a force that transforms the world through sheer will and determination. Like Arjuna on the battlefield, you thrive in challenge and action.',
      strengths: [
        'Powerful drive and determination',
        'Leadership and charisma',
        'Creative energy and innovation',
        'Ability to manifest goals into reality',
        'Courage to take on challenges'
      ],
      growth: [
        'Channel ambition toward dharmic purposes',
        'Practice detachment from results (Nishkama Karma)',
        'Cultivate patience and stillness',
        'Ensure desire doesn\'t become restlessness'
      ]
    },
    tamas: {
      name: 'Tamas',
      sanskrit: 'तमस्',
      color: '#8A7B6B',
      tagline: 'The Depth of Stillness',
      description: 'Your nature carries the grounding quality of Tamas - the force of stability, rest, and deep rootedness. Like the earth itself, you embody endurance and the power of being still. Every cycle of creation requires the pause that Tamas provides - it is the fertile darkness from which new light is born.',
      strengths: [
        'Deep capacity for rest and recovery',
        'Grounding presence in chaotic situations',
        'Patience and endurance',
        'Connection to the physical and material world',
        'Ability to slow down and reflect'
      ],
      growth: [
        'Introduce small, consistent daily practices',
        'Seek inspiring company (Satsang)',
        'Begin with gentle physical movement',
        'Replace avoidance with curiosity',
        'Gradually build toward Rajasic energy, then Sattvic clarity'
      ]
    }
  };

  // --- State ---
  let currentQuestion = 0;
  let answers = new Array(questions.length).fill(null);
  let quizStarted = false;

  // --- DOM Elements ---
  const introSection = document.getElementById('introSection');
  const quizSection = document.getElementById('quizSection');
  const resultSection = document.getElementById('resultSection');
  const startBtn = document.getElementById('startQuizBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const progressFill = document.getElementById('progressFill');
  const progressCount = document.getElementById('progressCount');
  const quizViewport = document.getElementById('quizViewport');
  const retakeBtn = document.getElementById('retakeBtn');

  // --- Initialize ---
  function init() {
    buildQuizSlides();
    bindEvents();
    showQuestion(0, 'none');
  }

  // --- Build Quiz HTML ---
  function buildQuizSlides() {
    quizViewport.innerHTML = '';
    questions.forEach((q, idx) => {
      const slide = document.createElement('div');
      slide.className = 'quiz-slide';
      slide.dataset.index = idx;

      // Shuffle options to prevent pattern bias
      const shuffled = shuffleArray([...q.options]);

      slide.innerHTML = `
        <div class="question-number">${String(idx + 1).padStart(2, '0')}</div>
        <h2 class="question-text">${q.text}</h2>
        <div class="quiz-options">
          ${shuffled.map((opt, oi) => `
            <button class="quiz-option" data-guna="${opt.guna}" data-question="${idx}">
              <span class="option-marker">${String.fromCharCode(65 + oi)}</span>
              <span class="option-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>
      `;
      quizViewport.appendChild(slide);
    });
  }

  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // --- Event Bindings ---
  function bindEvents() {
    startBtn.addEventListener('click', startQuiz);

    quizViewport.addEventListener('click', (e) => {
      const option = e.target.closest('.quiz-option');
      if (!option) return;
      selectOption(option);
    });

    prevBtn.addEventListener('click', goPrev);
    nextBtn.addEventListener('click', goNext);
    retakeBtn.addEventListener('click', retakeQuiz);

    // Copy share text
    const copyBtn = document.getElementById('copyShareBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', copyShareText);
    }
  }

  // --- Start Quiz ---
  function startQuiz() {
    quizStarted = true;
    introSection.style.opacity = '0';
    introSection.style.transform = 'translateY(-20px)';
    introSection.style.transition = 'all 0.5s var(--ease-out-expo)';

    setTimeout(() => {
      introSection.style.display = 'none';
      quizSection.classList.add('active');
      quizSection.style.opacity = '0';
      quizSection.style.transform = 'translateY(20px)';
      
      requestAnimationFrame(() => {
        quizSection.style.transition = 'all 0.6s var(--ease-out-expo)';
        quizSection.style.opacity = '1';
        quizSection.style.transform = 'translateY(0)';
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  }

  // --- Select Option ---
  function selectOption(option) {
    const questionIdx = parseInt(option.dataset.question);
    const guna = option.dataset.guna;

    // Store answer
    answers[questionIdx] = guna;

    // Visual feedback
    const slide = option.closest('.quiz-slide');
    slide.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    option.classList.add('selected');

    // Update nav buttons
    updateNavButtons();

    // Auto-advance after a brief pause
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => goNext(), 600);
    }
  }

  // --- Navigation ---
  function showQuestion(index, direction) {
    const slides = quizViewport.querySelectorAll('.quiz-slide');
    const current = quizViewport.querySelector('.quiz-slide.active');

    if (current && direction !== 'none') {
      current.classList.remove('active');
      current.classList.add(direction === 'next' ? 'exit-left' : 'enter-right');
      setTimeout(() => {
        current.classList.remove('exit-left', 'enter-right');
      }, 500);
    }

    const next = slides[index];
    if (direction === 'none') {
      next.classList.add('active');
    } else {
      next.classList.add(direction === 'next' ? 'enter-right' : 'exit-left');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          next.classList.remove('enter-right', 'exit-left');
          next.classList.add('active');
        });
      });
    }

    // Restore selection state
    if (answers[index] !== null) {
      const options = next.querySelectorAll('.quiz-option');
      options.forEach(o => {
        if (o.dataset.guna === answers[index]) {
          o.classList.add('selected');
        }
      });
    }

    currentQuestion = index;
    updateProgress();
    updateNavButtons();
  }

  function goNext() {
    if (currentQuestion === questions.length - 1) {
      // Last question - show results
      if (answers[currentQuestion] !== null) {
        showResults();
      }
      return;
    }
    if (currentQuestion < questions.length - 1) {
      showQuestion(currentQuestion + 1, 'next');
    }
  }

  function goPrev() {
    if (currentQuestion > 0) {
      showQuestion(currentQuestion - 1, 'prev');
    }
  }

  function updateProgress() {
    const answeredCount = answers.filter(a => a !== null).length;
    const pct = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = pct + '%';
    progressCount.textContent = `${currentQuestion + 1} / ${questions.length}`;
  }

  function updateNavButtons() {
    prevBtn.disabled = currentQuestion === 0;

    if (currentQuestion === questions.length - 1) {
      nextBtn.textContent = 'See My Guna ✦';
      nextBtn.classList.add('btn-gold');
      nextBtn.classList.remove('btn-primary');
      nextBtn.disabled = answers[currentQuestion] === null;
    } else {
      nextBtn.innerHTML = 'Next &rarr;';
      nextBtn.classList.remove('btn-gold');
      nextBtn.classList.add('btn-primary');
      nextBtn.disabled = false;
    }
  }

  // --- Calculate Results ---
  function calculateResults() {
    const scores = { sattva: 0, rajas: 0, tamas: 0 };
    answers.forEach(a => {
      if (a) scores[a]++;
    });
    return scores;
  }

  function getPrimaryGuna(scores) {
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  }

  // --- Show Results ---
  function showResults() {
    const scores = calculateResults();
    const primary = getPrimaryGuna(scores);
    const total = scores.sattva + scores.rajas + scores.tamas;

    // Hide quiz
    quizSection.style.opacity = '0';
    quizSection.style.transform = 'translateY(-20px)';
    quizSection.style.transition = 'all 0.5s var(--ease-out-expo)';

    setTimeout(() => {
      quizSection.classList.remove('active');
      resultSection.classList.add('active');

      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Animate in
      resultSection.style.opacity = '0';
      resultSection.style.transform = 'translateY(20px)';
      requestAnimationFrame(() => {
        resultSection.style.transition = 'all 0.8s var(--ease-out-expo)';
        resultSection.style.opacity = '1';
        resultSection.style.transform = 'translateY(0)';
      });

      // Populate & animate after a slight delay
      setTimeout(() => {
        populateResults(scores, primary, total);
        animateDonut(scores, total);
      }, 400);
    }, 400);
  }

  // --- Populate Results DOM ---
  function populateResults(scores, primary, total) {
    const data = gunaData[primary];

    // Title area
    document.getElementById('resultGunaName').textContent = `You are ${data.name}-Dominant`;
    document.getElementById('resultGunaSanskrit').textContent = data.sanskrit;
    document.getElementById('resultGunaTagline').textContent = data.tagline;
    document.getElementById('resultGunaDesc').textContent = data.description;

    // Donut center
    document.getElementById('donutPrimaryName').textContent = data.name;
    document.getElementById('donutPrimarySanskrit').textContent = data.sanskrit;

    // Legend
    const pctS = Math.round((scores.sattva / total) * 100);
    const pctR = Math.round((scores.rajas / total) * 100);
    const pctT = Math.round((scores.tamas / total) * 100);

    document.getElementById('legendSattva').textContent = pctS + '%';
    document.getElementById('legendRajas').textContent = pctR + '%';
    document.getElementById('legendTamas').textContent = pctT + '%';

    // Result cards
    populateResultCard('sattva', scores.sattva, total, primary);
    populateResultCard('rajas', scores.rajas, total, primary);
    populateResultCard('tamas', scores.tamas, total, primary);

    // Share card
    document.getElementById('shareGunaName').textContent = data.name;
    document.getElementById('shareGunaSanskrit').textContent = data.sanskrit;
    document.getElementById('shareSattvaScore').textContent = `Sattva ${pctS}%`;
    document.getElementById('shareRajasScore').textContent = `Rajas ${pctR}%`;
    document.getElementById('shareTamasScore').textContent = `Tamas ${pctT}%`;
    document.getElementById('sharePrimaryPct').textContent = pctS + '%';

    // Share mini donut
    const shareDeg1 = (scores.sattva / total) * 360;
    const shareDeg2 = shareDeg1 + (scores.rajas / total) * 360;
    document.getElementById('shareMiniDonutRing').style.background =
      `conic-gradient(#7A9E6A 0deg ${shareDeg1}deg, #D4943A ${shareDeg1}deg ${shareDeg2}deg, #8A7B6B ${shareDeg2}deg 360deg)`;

    // Primary pct in share
    const primaryPct = Math.round((scores[primary] / total) * 100);
    document.getElementById('sharePrimaryPct').textContent = primaryPct + '%';

    // Trigger bar fill animations
    setTimeout(() => {
      document.querySelectorAll('.result-card-bar-fill').forEach(bar => {
        const pct = bar.dataset.pct;
        bar.style.width = pct + '%';
      });
    }, 100);

    // Trigger scroll reveals in result
    const reveals = resultSection.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  function populateResultCard(guna, score, total, primary) {
    const card = document.getElementById(`card-${guna}`);
    const data = gunaData[guna];
    const pct = Math.round((score / total) * 100);

    card.querySelector('.result-card-score').textContent = pct + '%';
    card.querySelector('.result-card-bar-fill').dataset.pct = pct;
    card.querySelector('.result-card-desc').textContent = data.description.substring(0, 180) + '...';

    // Strengths
    const strengthList = card.querySelector('.strengths-list');
    strengthList.innerHTML = data.strengths.slice(0, 3).map(s => `<li>${s}</li>`).join('');

    // Growth
    const growthList = card.querySelector('.growth-list');
    growthList.innerHTML = data.growth.slice(0, 2).map(g => `<li>${g}</li>`).join('');

    // Mark primary card
    if (guna === primary) {
      card.classList.add('primary-card', `${guna}-primary`);
    }
  }

  // --- Animate Donut Chart ---
  function animateDonut(scores, total) {
    const ring = document.getElementById('donutRing');
    const deg1 = (scores.sattva / total) * 360;
    const deg2 = deg1 + (scores.rajas / total) * 360;

    // Start from 0
    ring.style.background = `conic-gradient(
      #7A9E6A 0deg 0deg,
      #D4943A 0deg 0deg,
      #8A7B6B 0deg 360deg
    )`;

    // Animate using CSS transition trick - we'll animate via JS frames
    let progress = 0;
    const duration = 1200;
    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);

      const sDeg = deg1 * eased;
      const rDeg = deg2 * eased;

      ring.style.background = `conic-gradient(
        #7A9E6A 0deg ${sDeg}deg,
        #D4943A ${sDeg}deg ${rDeg}deg,
        #8A7B6B ${rDeg}deg 360deg
      )`;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    // Delay start so mandala plays first
    setTimeout(() => requestAnimationFrame(step), 800);
  }

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }

  // --- Retake Quiz ---
  function retakeQuiz() {
    answers = new Array(questions.length).fill(null);
    currentQuestion = 0;

    resultSection.style.opacity = '0';
    resultSection.style.transition = 'all 0.4s var(--ease-out-expo)';

    setTimeout(() => {
      resultSection.classList.remove('active');

      // Reset all result card states
      document.querySelectorAll('.result-card').forEach(card => {
        card.classList.remove('primary-card', 'sattva-primary', 'rajas-primary', 'tamas-primary');
      });
      document.querySelectorAll('.result-card-bar-fill').forEach(bar => {
        bar.style.width = '0';
      });

      // Rebuild quiz with reshuffled options
      buildQuizSlides();

      // Show quiz
      quizSection.classList.add('active');
      quizSection.style.opacity = '0';
      quizSection.style.transform = 'translateY(20px)';

      requestAnimationFrame(() => {
        quizSection.style.transition = 'all 0.6s var(--ease-out-expo)';
        quizSection.style.opacity = '1';
        quizSection.style.transform = 'translateY(0)';
      });

      showQuestion(0, 'none');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  }

  // --- Copy Share Text ---
  function copyShareText() {
    const scores = calculateResults();
    const primary = getPrimaryGuna(scores);
    const total = scores.sattva + scores.rajas + scores.tamas;
    const pctS = Math.round((scores.sattva / total) * 100);
    const pctR = Math.round((scores.rajas / total) * 100);
    const pctT = Math.round((scores.tamas / total) * 100);

    const text = `✦ I discovered my Guna on TatTvam!\n\nMy nature is ${gunaData[primary].name}-dominant (${gunaData[primary].sanskrit})\n\n☀️ Sattva: ${pctS}%\n🔥 Rajas: ${pctR}%\n🌑 Tamas: ${pctT}%\n\nDiscover yours → tattvam.app/guna-quiz`;

    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('copyShareBtn');
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Copied!';
      btn.classList.add('btn-gold');
      setTimeout(() => {
        btn.innerHTML = orig;
        btn.classList.remove('btn-gold');
      }, 2000);
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    });
  }

  // --- Kick off ---
  init();

})();
