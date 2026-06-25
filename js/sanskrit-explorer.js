/* =============================================
   TATTVAM - Sanskrit Word Explorer JS
   ============================================= */

(function () {
  'use strict';

  const WORDS_DB = [
    {
      word: "Dharma",
      sanskrit: "धर्म",
      meaning: "Righteousness, cosmic order, duty",
      origin: "From the root 'dhṛ' (धृ) which means 'to support, hold, or sustain'.",
      context: "Dharma is that which sustains the individual, the society, and the cosmos. It represents the natural order of things, personal moral duties, and actions that maintain harmony in the universe.",
      citation: "धर्मो रक्षति रक्षितः |",
      citationRef: "Mahabharata",
      application: "In any dilemma, ask: 'What action supports harmony, truth, and the long-term well-being of all involved?' That is your dharmic path."
    },
    {
      word: "Karma",
      sanskrit: "कर्म",
      meaning: "Action, deed, cause and effect",
      origin: "From the root 'kṛ' (कृ) meaning 'to do, act, or make'.",
      context: "Karma refers to all intentional actions (physical, verbal, or mental) and their inevitable consequences. It operates as a natural law of cause and effect, where every seed planted returns to the sower.",
      citation: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |",
      citationRef: "Bhagavad Gita 2.47",
      application: "Recognize that your present circumstances are shaped by past actions, but your present choices shape your future. Act with conscious intent."
    },
    {
      word: "Atman",
      sanskrit: "आत्मन",
      meaning: "The true Self, soul, pure consciousness",
      origin: "From the root 'an' (अन्) meaning 'to breathe' or 'at' meaning 'to move'.",
      context: "Atman is the eternal, immutable, and divine core of every living being. Unlike the body or the mind, which change, the Atman is never born and never dies.",
      citation: "न जायते म्रियते वा कदाचिन् |",
      citationRef: "Bhagavad Gita 2.20",
      application: "Remember that your value is not defined by external successes or failures. You are the eternal observer, not the passing storm."
    },
    {
      word: "Brahman",
      sanskrit: "ब्रह्मन्",
      meaning: "The ultimate reality, absolute truth",
      origin: "From the root 'bṛh' (बृह्) meaning 'to grow, expand, or swell'.",
      context: "Brahman is the supreme, infinite, and non-dual reality that underlies and permeates the entire universe. It is the formless, changeless source of all existence.",
      citation: "अहं ब्रह्मास्मि |",
      citationRef: "Brihadaranyaka Upanishad",
      application: "See the same divine spark in all people and objects. Beyond the division of names and forms, everything is interconnected."
    },
    {
      word: "Satya",
      sanskrit: "सत्य",
      meaning: "Truth, truthfulness",
      origin: "From 'sat' (सत्) which means 'that which exists, is real, or is good'.",
      context: "Satya is one of the highest virtues, representing alignment with reality. It means speaking the truth, but always with compassion (Satya must not be used to cause malicious harm).",
      citation: "सत्यमेव जयते नानृतम् |",
      citationRef: "Mundaka Upanishad",
      application: "Speak honestly, but filter your speech through three gates: Is it true? Is it kind? Is it necessary?"
    },
    {
      word: "Ahimsa",
      sanskrit: "अहिंसा",
      meaning: "Non-injury, non-violence",
      origin: "Formed by prefixing 'a-' (non) to 'hiṁsā' (harm, injury, or killing).",
      context: "Ahimsa is the practice of avoiding harm to any living being through thought, word, or deed. It is the foundation of compassion and spiritual growth.",
      citation: "अहिंसा परमो धर्मः |",
      citationRef: "Mahabharata",
      application: "Observe your thoughts. Catch moments of judgment, jealousy, or anger, and replace them with understanding. Non-violence starts in the mind."
    },
    {
      word: "Dhyana",
      sanskrit: "ध्यान",
      meaning: "Meditation, contemplation",
      origin: "From the root 'dhyai' (ध्यै) meaning 'to think, contemplate, or meditate'.",
      context: "Dhyana is the seventh limb of Ashtanga Yoga. It represents a continuous, uninterrupted flow of awareness toward a single object or center, leading to mental stillness.",
      citation: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम् |",
      citationRef: "Bhagavad Gita 6.26",
      application: "Dedicate 10 minutes daily to sit in complete silence. Observe your thoughts like floating clouds without reacting or latching onto them."
    },
    {
      word: "Svadharma",
      sanskrit: "स्वधर्म",
      meaning: "One's own nature-aligned duty",
      origin: "From 'sva' (स्व) meaning 'own' and 'dharma' (धर्म) meaning 'duty or nature'.",
      context: "Svadharma is the specific duty or calling that corresponds to an individual's innate temperament, strengths, and nature (svabhava). Walking it brings fulfillment.",
      citation: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् |",
      citationRef: "Bhagavad Gita 3.35",
      application: "Stop imitating others' careers simply for status. Focus on what aligns with your natural skills and interests; serve the world through that."
    },
    {
      word: "Nishkama Karma",
      sanskrit: "निष्काम कर्म",
      meaning: "Action without desire for results",
      origin: "From 'niṣ' (without), 'kāma' (desire/selfish expectation), and 'karma' (action).",
      context: "The core practice of Bhagavad Gita. It involves performing your duty with 100% effort, dedication, and concentration, while completely releasing attachment to the outcome.",
      citation: "मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि |",
      citationRef: "Bhagavad Gita 2.47",
      application: "When working, focus on the process rather than the reward. Do the work beautifully because it is your responsibility, not just for applause."
    },
    {
      word: "Viveka",
      sanskrit: "विवेक",
      meaning: "Discernment, discrimination",
      origin: "From the prefix 'vi-' (apart) and 'vic' (विच्) meaning 'to separate or sift'.",
      context: "Viveka is the intellectual capacity to distinguish between the real (eternal) and the unreal (temporary), the beneficial (shreyas) and the merely pleasant (preyas).",
      citation: "बुद्धौ शरणमन्विच्छ |",
      citationRef: "Bhagavad Gita 2.49",
      application: "Before acting impulsively, pause and ask: 'Is this action bringing long-term peace or just short-term gratification?' Sift the truth."
    },
    {
      word: "Vairagya",
      sanskrit: "वैराग्य",
      meaning: "Detachment, dispassion",
      origin: "From 'virāga' meaning 'absence of color or passion'.",
      context: "Vairagya is freedom from attachment to worldly desires. It is not about running away to the forest, but about having a mind that doesn't cling to things out of desperation.",
      citation: "अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते |",
      citationRef: "Bhagavad Gita 6.35",
      application: "Practice digital detachment. Spend 1 hour today without checking your phone. Learn to enjoy being present in the moment without needing constant inputs."
    },
    {
      word: "Shreyas",
      sanskrit: "श्रेयस्",
      meaning: "The good, spiritually beneficial path",
      origin: "From the root 'śrī' (श्री) meaning 'excellence, prosperity, or light'.",
      context: "In Hindu philosophy, Shreyas is the path of action that brings long-term spiritual growth, wisdom, and peace, though it may be difficult or painful at first.",
      citation: "श्रेयश्च प्रेयश्च मनुष्यमेतः |",
      citationRef: "Katha Upanishad 1.2.1",
      application: "When faced with choices (like waking up early to meditate vs sleeping in), choose the harder path that elevates you. That is Shreyas."
    },
    {
      word: "Preyas",
      sanskrit: "प्रेयस्",
      meaning: "The pleasant, short-term gratification path",
      origin: "From the root 'prī' (प्री) meaning 'to please, satisfy, or enjoy'.",
      context: "Preyas is the path of immediate sensory pleasure and comfort. It feels sweet in the beginning but leads to stagnation, regret, or downfall in the end.",
      citation: "तयोः श्रेय उपादानस्य साधु भवति |",
      citationRef: "Katha Upanishad 1.2.1",
      application: "Recognize when you are choosing shortcuts, junk food, or infinite scrolling. This is Preyas. Gently redirect your attention toward Shreyas."
    },
    {
      word: "Sadhana",
      sanskrit: "साधना",
      meaning: "Spiritual practice, discipline",
      origin: "From the root 'sādh' (साध्) meaning 'to accomplish, succeed, or go straight to the goal'.",
      context: "Sadhana is any structured, regular spiritual practice undertaken with commitment. It includes meditation, scriptural study, prayer, and selfless service.",
      citation: "तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ |",
      citationRef: "Bhagavad Gita 16.24",
      application: "Build your own sadhana routine. Even if it's just 5 minutes of breathing exercises and 1 verse of study, do it consistently every day."
    },
    {
      word: "Moksha",
      sanskrit: "मोक्ष",
      meaning: "Liberation, freedom",
      origin: "From the root 'muc' (मुच्) meaning 'to release, free, or let go'.",
      context: "Moksha is the ultimate goal in Sanatana Dharma. It represents liberation from the cycle of birth and rebirth (samsara), and union of the individual soul (Jivatman) with the ultimate reality (Brahman).",
      citation: "अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः |",
      citationRef: "Bhagavad Gita 18.66",
      application: "Moksha can be experienced here and now. Whenever you release a grudge, overcome an attachment, or drop your ego, you experience a moment of liberation."
    }
  ];

  // --- State ---
  let activeWordIndex = 0;

  // --- DOM Selectors ---
  const wordScrollList = document.getElementById('wordScrollList');
  const searchInput = document.getElementById('sanskritSearchInput');
  
  const wordPrimarySanskrit = document.getElementById('wordPrimarySanskrit');
  const wordPrimaryTranslit = document.getElementById('wordPrimaryTranslit');
  const wordPrimaryMeaning = document.getElementById('wordPrimaryMeaning');
  const originText = document.getElementById('originText');
  const contextText = document.getElementById('contextText');
  const shlokaCitation = document.getElementById('shlokaCitation');
  const shlokaCitationRef = document.getElementById('shlokaCitationRef');
  const citationBox = document.getElementById('citationBox');
  const applicationText = document.getElementById('applicationText');

  // --- Init ---
  function init() {
    renderList();
    showWord(0);
    bindEvents();
  }

  // --- Render Sidebar List ---
  function renderList() {
    wordScrollList.innerHTML = WORDS_DB.map((w, idx) => `
      <button class="word-list-btn ${idx === activeWordIndex ? 'active' : ''}" data-index="${idx}">
        <span class="word-btn-title">${escapeHTML(w.word)}</span>
        <span class="word-btn-sanskrit">${escapeHTML(w.sanskrit)}</span>
      </button>
    `).join('');
  }

  // --- Show Word Details ---
  function showWord(index) {
    activeWordIndex = index;
    const w = WORDS_DB[index];

    // Update active class in sidebar
    document.querySelectorAll('.word-list-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.index) === index);
    });

    // Populate Details Card
    wordPrimarySanskrit.textContent = w.sanskrit;
    wordPrimaryTranslit.textContent = w.word;
    wordPrimaryMeaning.textContent = w.meaning;
    originText.textContent = w.origin;
    contextText.textContent = w.context;
    applicationText.textContent = w.application;

    // Handle Citation Box
    if (w.citation) {
      citationBox.style.display = '';
      shlokaCitation.textContent = w.citation;
      shlokaCitationRef.textContent = `- ${w.citationRef}`;
    } else {
      citationBox.style.display = 'none';
    }

    // Scroll main panel to top on mobile
    if (window.innerWidth <= 1024) {
      document.querySelector('.sanskrit-right').scrollIntoView({ behavior: 'smooth' });
    }
  }

  // --- Bind Events ---
  function bindEvents() {
    // Search filter
    searchInput.addEventListener('input', () => {
      filterList();
    });

    // Select word from list
    wordScrollList.addEventListener('click', (e) => {
      const btn = e.target.closest('.word-list-btn');
      if (!btn) return;
      const index = parseInt(btn.dataset.index);
      showWord(index);
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

  // --- Filter List ---
  function filterList() {
    const query = searchInput.value.toLowerCase().trim();
    const btns = wordScrollList.querySelectorAll('.word-list-btn');

    btns.forEach(btn => {
      const index = parseInt(btn.dataset.index);
      const w = WORDS_DB[index];
      const match = 
        w.word.toLowerCase().includes(query) ||
        w.sanskrit.toLowerCase().includes(query) ||
        w.meaning.toLowerCase().includes(query);

      btn.style.display = match ? '' : 'none';
    });
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  init();

})();
