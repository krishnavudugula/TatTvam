/* =============================================
   TATTVAM - Interactive Gita Explorer JS
   ============================================= */

(function () {
  'use strict';

  // --- CHAPTERS DATABASE ---
  const CHAPTERS = [
    {
      id: 1,
      sanskrit: "अर्जुनविषादयोग",
      name: "Arjuna Vishada Yoga",
      translation: "Arjuna's Dilemma",
      desc: "Arjuna, overwhelmed by the sight of teachers, family, and friends on the opposing battlefield, collapses in grief and refuses to fight."
    },
    {
      id: 2,
      sanskrit: "साङ्ख्ययोग",
      name: "Sankhya Yoga",
      translation: "The Path of Knowledge",
      desc: "Krishna begins his dialogue by revealing the eternal nature of the soul, the illusion of death, and the path of selfless action (Nishkama Karma)."
    },
    {
      id: 3,
      sanskrit: "कर्मयोग",
      name: "Karma Yoga",
      translation: "The Path of Action",
      desc: "Krishna explains how action is unavoidable, and how performing one's natural duty without attachment to the results becomes a path to spiritual liberation."
    },
    {
      id: 6,
      sanskrit: "आत्मसंयमयोग",
      name: "Atmasanyama Yoga",
      translation: "The Path of Meditation",
      desc: "Krishna teaches the discipline of controlling the mind, the practices of meditation, and the qualities of a yogi who achieves inner stillness."
    },
    {
      id: 12,
      sanskrit: "भक्तियोग",
      name: "Bhakti Yoga",
      translation: "The Path of Devotion",
      desc: "Krishna describes the qualities of a true devotee - one who is compassionate, patient, free from ego, and anchored in love."
    },
    {
      id: 18,
      sanskrit: "मोक्षसंन्यासयोग",
      name: "Moksha Sannyasa Yoga",
      translation: "The Path of Liberation",
      desc: "The final synthesis. Krishna explains renunciation, the three gunas, and tells Arjuna to abandon all doubt, align with the divine, and act."
    }
  ];

  // --- VERSES DATABASE ---
  const VERSES = [
    // Chapter 1
    {
      chapter: 1,
      verse: 1,
      ref: "BG 1.1",
      sanskrit: "धृतराष्ट्र उवाच |\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
      transliteration: "dhṛtarāṣṭra uvāca\ndharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāś caiva kim akurvata sañjaya",
      translation: "Dhritarashtra said: O Sanjay, assembled on the sacred field of Kurukshetra and eager to fight, what did my sons and the sons of Pandu do?",
      explanation: "This is the opening verse of the Gita. It sets the scene on the battlefield of Kurukshetra, which is described as 'Dharmakshetra' - the field of righteousness. Symbolically, Kurukshetra represents the human mind, which is a continuous battlefield between good (Pandavas) and bad (Kauravas) tendencies.",
      modern: "Identify your battlefield. Every morning you wake up, your mind is a Kurukshetra where your values, focus, and discipline will battle against lazy distractions, shortcuts, and procrastination. Sanjay's vision represents awareness - the ability to step back and witness the state of your mind objectively."
    },
    {
      chapter: 1,
      verse: 47,
      ref: "BG 1.47",
      sanskrit: "सञ्जय उवाच |\nएवमुक्त्वाऽर्जुनः संख्ये रथोपस्थ उपाविशत् |\nविसृज्य सशरं चापं शोकसंविग्नमानसः ||",
      transliteration: "sañjaya uvāca\nevam uktvārjunaḥ saṅkhye rathopastha upāviśat\nvisṛjya sa-śaraṁ cāpaṁ śoka-saṁvigna-mānasaḥ",
      translation: "Sanjay said: Having spoken thus on the battlefield, Arjuna cast aside his bow and arrows and sat down on the chariot, his mind overwhelmed with grief.",
      explanation: "Arjuna represents the typical human soul confronting a difficult life crisis. He is paralyzed by conflicting loyalties, fear of outcomes, and doubts. Instead of fighting, he surrenders to despair. Cast aside his bow, the 'Gandiva', symbol of his power and skills.",
      modern: "Paralysis by analysis. When you face massive career decisions or personal conflicts, the sheer weight of what-ifs can paralyze your ability to execute. Sitting down in the chariot represents the stage of burnout or crisis where you stop taking action, letting your fears render you passive."
    },
    // Chapter 2
    {
      chapter: 2,
      verse: 11,
      ref: "BG 2.11",
      sanskrit: "श्रीभगवानुवाच |\nअशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे |\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ||",
      transliteration: "śrī-bhagavān uvāca\naśocyān anvaśocas tvaṁ prajñā-vādāṁś ca bhāṣase\ngatāsūn agatāsūṁś ca nānuśocanti paṇḍitāḥ",
      translation: "The Supreme Lord said: While speaking learned words, you are mourning for what is not worthy of grief. The wise lament neither for the living nor for the dead.",
      explanation: "Krishna begins his counsel with a mild rebuke. He points out the contradiction in Arjuna's stance - he talks like a wise philosopher, yet behaves with emotional weakness. Krishna introduces the fundamental truth of impermanence and the immortality of the soul.",
      modern: "Separate facts from feelings. We often justify our anxieties with intellectual arguments, pretending our worries are logical. True wisdom starts by separating temporary setbacks (the fluctuating events of life) from your core identity. Stop mourning things that are bound to change."
    },
    {
      chapter: 2,
      verse: 14,
      ref: "BG 2.14",
      sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः |\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ||",
      transliteration: "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ\nāgamāpāyino 'nityās tāṁs titikṣasva bhārata",
      translation: "O son of Kunti, the contacts of the senses with their objects give rise to cold and heat, pleasure and pain. They come and go, and are impermanent. Endure them patiently, O Bharata.",
      explanation: "Krishna explains that sensory experiences (pleasure and pain, success and failure) are temporary, like the passing seasons of winter and summer. He introduces 'Titiksha' - the capacity to endure these dualities with a calm, balanced mind without being carried away.",
      modern: "Build emotional resilience. Market crashes, project rejections, bad reviews, or difficult client feedback are like temporary heat and cold. They arrive, they peak, and they fade. Enduring them means maintaining focus on your long-term plan, refusing to let day-to-day emotional noise dictate your actions."
    },
    {
      chapter: 2,
      verse: 20,
      ref: "BG 2.20",
      sanskrit: "न जायते म्रियते वा कदाचि\nन्नायं भूत्वा भविता वा न भूयः |\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ||",
      transliteration: "na jāyate mriyate vā kadācin\nnāyaṁ bhūtvā bhavitā vā na bhūyaḥ\najo nityaḥ śāśvato 'yaṁ purāṇo\nnahanyate hanyamāne śarīre",
      translation: "The soul is never born, nor does it ever die. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.",
      explanation: "This is one of the most powerful shlokas on the nature of the self. The physical body is merely a temporary vessel. The real 'You' - the Atman - is untouchable, eternal, and free from the cycles of birth and death.",
      modern: "Your true self is bigger than your job title or failures. When your project fails or your business collapses, it's easy to feel as if your identity is destroyed. Krishna's teaching reminds you that your core value as a conscious being is untouchable. You are not your bank balance or your career title."
    },
    {
      chapter: 2,
      verse: 47,
      ref: "BG 2.47",
      sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन |\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
      transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
      translation: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, and never be attached to inaction.",
      explanation: "The central core of Karma Yoga. We have control only over our actions, never the outcomes. Thinking we control outcomes leads to anxiety and ego; dropping effort leads to laziness. Right action is about giving 100% effort and surrendering the rest.",
      modern: "Process over product. Focus entirely on coding the system, studying the concepts, or writing the proposal. Do not drain your energy by constantly calculating 'Will I get the job?' or 'Will this launch go viral?'. Action under your control is your duty; the market response is not."
    },
    {
      chapter: 2,
      verse: 62,
      ref: "BG 2.62",
      sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते |\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ||",
      transliteration: "dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate\nsaṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate",
      translation: "While contemplating the objects of the senses, a person develops attachment to them; from attachment arises desire, and from desire, anger is born.",
      explanation: "Krishna outlines the psychological chain of downfall. It begins simply: thinking about an object (distraction). This leads to attachment, which leads to intense desire. When that desire is blocked, anger and frustration arise.",
      modern: "The dopamine loop. It starts with checking your notifications or comparing lifestyles online. Contemplating social media leads to attachment, then a craving for status. When that craving isn't satisfied instantly, it breeds anger, jealousy, and burnout. Guard your attention carefully."
    },
    {
      chapter: 2,
      verse: 63,
      ref: "BG 2.63",
      sanskrit: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः |\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ||",
      transliteration: "krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ\nsmṛti-bhraṁśād buddhi-nāśo buddhi-nāśāt praṇaśyati",
      translation: "From anger arises delusion; from delusion, confusion of memory; from confusion of memory, loss of reason; and from loss of reason, one is utterly ruined.",
      explanation: "The continuation of the previous verse. Anger creates delusion, blinding our judgment. This wipes away lessons learned from memory (we forget our values), destroying intellect (Buddhi). Without intellect, we make self-destructive choices.",
      modern: "Anger-driven decisions. When a teammate or client angers you, reacting instantly creates emotional delusion. You forget past agreements, lose your logical reasoning, and write emails or make decisions that ruin professional relationships. Never hit send when your mind is hot."
    },
    // Chapter 3
    {
      chapter: 3,
      verse: 19,
      ref: "BG 3.19",
      sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर |\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः ||",
      transliteration: "tasmād asaktaḥ satataṁ kāryaṁ karma samācara\nasakto hy ācaran karma param āpnoti pūruṣaḥ",
      translation: "Therefore, without attachment, constantly perform your prescribed duty; for by performing action without attachment, a person attains the Supreme.",
      explanation: "Krishna reinforces that action must be done as 'Karyam Karma' - duty that ought to be done, simply because it is right. Detached action doesn't bind the soul; it purifies it and leads to the highest spiritual realization.",
      modern: "Build a duty-first work ethic. Show up and do the work because it is your responsibility as a builder, designer, or leader. When you work from a place of professional integrity rather than transactional expectation, your work reaches masterclass quality and your stress levels fall."
    },
    {
      chapter: 3,
      verse: 35,
      ref: "BG 3.35",
      sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् |\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ||",
      transliteration: "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt\nsva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ",
      translation: "It is far better to perform one's own dharma, even if imperfect, than to perform another's dharma perfectly. Destruction in the course of one's own dharma is better, for following another's path is dangerous.",
      explanation: "Dharma depends on one's nature (Svadharma). Trying to copy another's calling because it seems easy or prestigious is dangerous. True growth lies in discovering your unique nature and serving the world through it.",
      modern: "Stop copying other startups or careers. Just because someone made a fortune in day trading or drop shipping doesn't mean it's your path. Following a career that doesn't align with your strengths (Svadharma) leads to imposter syndrome and misery. Better to build a small business aligned with your nature."
    },
    // Chapter 6
    {
      chapter: 6,
      verse: 5,
      ref: "BG 6.5",
      sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् |\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ||",
      transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet\nātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
      translation: "One must elevate oneself by one's own mind, and not degrade oneself. The mind alone is the friend of the soul, and the mind alone is the enemy of the soul.",
      explanation: "Self-responsibility is the key to growth. The mind is a powerful tool. If disciplined, it acts as your greatest ally. If undisciplined, it becomes your fiercest enemy. No one else can carry you; you must lift yourself.",
      modern: "Self-agency. You are your own coach and your own critic. If you fill your mind with negative self-talk, distraction, and excuses, your mind is actively sabotaging you (enemy). If you feed it discipline, structure, and positive inputs, your mind becomes your ultimate asset (friend)."
    },
    {
      chapter: 6,
      verse: 35,
      ref: "BG 6.35",
      sanskrit: "श्रीभगवानुवाच |\nअसंशयं महाबाहो मनो दुर्निग्रहं चलम् |\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ||",
      transliteration: "śrī-bhagavān uvāca\naśaṅśayaṁ mahā-bāho mano durnigrahaṁ calam\nabhyāsena tu kaunteya vairāgyeṇa ca gṛhyate",
      translation: "The Supreme Lord said: Doubtless, O mighty-armed Arjuna, the mind is restless and difficult to curb. But it can be controlled, O son of Kunti, by practice (Abhyasa) and detachment (Vairagya).",
      explanation: "Arjuna complains that the mind is as wild as the wind. Krishna agrees, validating his struggle. However, he offers the dual solution: 'Abhyasa' (continual practice and refocusing) and 'Vairagya' (learning to let go of desires and distractions).",
      modern: "Taming your focus. The mind is designed to wander, especially in the age of notifications. Controlling it requires two things: Practice (Abhyasa - e.g. daily focus blocks, meditation) and Detachment (Vairagya - e.g. putting your phone in another room). Don't expect instant focus; train it like a muscle."
    },
    // Chapter 12
    {
      chapter: 12,
      verse: 13,
      ref: "BG 12.13",
      sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च |\nनिर्ममो निरहंकारः समदुःखसुखः क्षमी ||",
      transliteration: "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca\nnirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī",
      translation: "One who is free from malice toward all beings, who is friendly and compassionate, free from possessiveness and ego, equal in joy and sorrow, and forgiving...",
      explanation: "Krishna outlines the characteristics of a spiritually mature human. They do not hate anyone, they act with kindness and empathy, they do not cling to possessions ('Nirmama'), they lack ego ('Nirahamkara'), and they remain stable in pleasure and pain.",
      modern: "The ideal teammate/leader. A great leader has empathy for their team, doesn't hoard credit (ego-free), remains steady during crisis or success (equal in joy/sorrow), and forgives mistakes, choosing learning over blame. This builds a toxic-free culture."
    },
    // Chapter 18
    {
      chapter: 18,
      verse: 66,
      ref: "BG 18.66",
      sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज |\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||",
      transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja\nahaṁ tvā sarva-pāpebhyo mokṣayiṣyāमि mā śucaḥ",
      translation: "Abandon all varieties of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
      explanation: "Krishna's final assurance. Drop the anxiety of balancing multiple conflicting rules, duties, and worries. Align your consciousness with the divine center (spirit, truth, highest good), take action from that centered space, and let the universe handle the rest.",
      modern: "Simplify and trust. When you get overwhelmed by the endless frameworks, opinions, and rules of career success, stop. Surrender the anxiety. Connect with your highest sense of integrity and truth, take the next logical step, and trust that the universe will handle the result."
    }
  ];

  // --- STATE ---
  let activeChapterId = 1;
  let showModern = false;

  // --- DOM SELECTORS ---
  const chapterList = document.getElementById('chapterList');
  const chapterTitle = document.getElementById('chapterTitle');
  const chapterTranslation = document.getElementById('chapterTranslation');
  const chapterDesc = document.getElementById('chapterDesc');
  const verseList = document.getElementById('verseList');
  const searchInput = document.getElementById('searchInput');
  const modernToggle = document.getElementById('modernToggle');
  const progressFill = document.getElementById('progressFill');
  const progressPct = document.getElementById('progressPct');

  // --- INIT ---
  function init() {
    renderChaptersSidebar();
    showChapter(activeChapterId);
    bindEvents();
  }

  // --- BIND EVENTS ---
  function bindEvents() {
    // Search filter
    searchInput.addEventListener('input', () => {
      filterVerses();
    });

    // Modern Toggle
    modernToggle.addEventListener('change', (e) => {
      showModern = e.target.checked;
      document.querySelectorAll('.verse-modern-block').forEach(el => {
        el.classList.toggle('visible', showModern);
      });
    });

    // Sidebar navigation (delegation)
    chapterList.addEventListener('click', (e) => {
      const btn = e.target.closest('.chapter-btn');
      if (!btn) return;
      const chId = parseInt(btn.dataset.chapter);
      showChapter(chId);
    });

    // Verse Item clicks (bookmarking and read tracking)
    verseList.addEventListener('click', (e) => {
      const bookmarkBtn = e.target.closest('.bookmark-btn');
      if (bookmarkBtn) {
        const ref = bookmarkBtn.dataset.ref;
        toggleBookmark(ref, bookmarkBtn);
      }

      const readBtn = e.target.closest('.read-btn');
      if (readBtn) {
        const ref = readBtn.dataset.ref;
        toggleRead(ref, readBtn);
      }
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

  // --- RENDER SIDEBAR ---
  function renderChaptersSidebar() {
    chapterList.innerHTML = CHAPTERS.map(ch => `
      <button class="chapter-btn ${ch.id === activeChapterId ? 'active' : ''}" data-chapter="${ch.id}">
        <span class="chapter-number">Chapter ${ch.id}</span>
        <span class="chapter-name">${ch.name}</span>
        <span class="chapter-translation">${ch.translation}</span>
      </button>
    `).join('');
  }

  // --- SHOW CHAPTER ---
  function showChapter(chId) {
    activeChapterId = chId;

    // Update active class in sidebar
    document.querySelectorAll('.chapter-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.chapter) === chId);
    });

    // Set Chapter Header Details
    const ch = CHAPTERS.find(c => c.id === chId);
    chapterTitle.innerHTML = `${ch.name} <span style="font-family: var(--font-sanskrit); color: var(--color-gold); font-size: 1.4rem; display: block; margin-top: 4px;">${ch.sanskrit}</span>`;
    chapterTranslation.textContent = ch.translation;
    chapterDesc.textContent = ch.desc;

    // Render Verse Cards
    renderVerseCards();
    updateProgress();

    // Scroll main panel to top on mobile
    if (window.innerWidth <= 1024) {
      document.querySelector('.explorer-main').scrollIntoView({ behavior: 'smooth' });
    }
  }

  // --- RENDER VERSE CARDS ---
  function renderVerseCards() {
    const chVerses = VERSES.filter(v => v.chapter === activeChapterId);
    const bookmarks = JSON.parse(localStorage.getItem('tattvam-bookmarks') || '[]');
    const readVerses = JSON.parse(localStorage.getItem('tattvam-read-verses') || '[]');

    verseList.innerHTML = chVerses.map(v => {
      const isBookmarked = bookmarks.some(b => b.ref === v.ref);
      const isRead = readVerses.includes(v.ref);

      return `
        <div class="verse-item ${isRead ? 'read' : ''}" id="verse-${v.ref.replace(' ', '-')}" data-ref="${v.ref}">
          <span class="read-status-indicator">✓</span>
          <div class="verse-item-header">
            <span class="verse-number-badge">${v.ref}</span>
            
            <div class="verse-item-actions">
              <!-- Mark as Read Button -->
              <button class="verse-action-btn read-btn ${isRead ? 'active' : ''}" data-ref="${v.ref}" title="Mark as Read">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </button>

              <!-- Bookmark Button -->
              <button class="verse-action-btn bookmark-btn ${isBookmarked ? 'active' : ''}" data-ref="${v.ref}" title="Bookmark Verse">
                <svg viewBox="0 0 24 24" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="verse-sanskrit-block">${v.sanskrit.replace(/\n/g, '<br>')}</div>
          <div class="verse-translit-block">${v.transliteration.replace(/\n/g, '<br>')}</div>
          <div class="verse-translation-block"><strong>Translation:</strong> ${v.translation}</div>
          
          <div class="verse-explanation-block">
            <div class="explanation-title">Dharmic Wisdom</div>
            <p class="explanation-text">${v.explanation}</p>
          </div>

          <div class="verse-modern-block ${showModern ? 'visible' : ''}">
            <div class="modern-title">Modern & Career Catalyst</div>
            <p class="modern-text">${v.modern}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- FILTER / SEARCH ---
  function filterVerses() {
    const query = searchInput.value.toLowerCase().trim();
    const items = verseList.querySelectorAll('.verse-item');

    items.forEach(item => {
      const ref = item.dataset.ref;
      const v = VERSES.find(ver => ver.ref === ref);
      
      const match = 
        v.ref.toLowerCase().includes(query) ||
        v.sanskrit.toLowerCase().includes(query) ||
        v.transliteration.toLowerCase().includes(query) ||
        v.translation.toLowerCase().includes(query) ||
        v.explanation.toLowerCase().includes(query) ||
        v.modern.toLowerCase().includes(query);

      item.style.display = match ? '' : 'none';
    });
  }

  // --- BOOKMARK VERSE ---
  function toggleBookmark(ref, btn) {
    const v = VERSES.find(ver => ver.ref === ref);
    let bookmarks = JSON.parse(localStorage.getItem('tattvam-bookmarks') || '[]');
    const index = bookmarks.findIndex(b => b.ref === ref);

    if (index > -1) {
      bookmarks.splice(index, 1);
      btn.classList.remove('active');
      btn.querySelector('svg').setAttribute('fill', 'none');
      showNotification('Bookmark removed');
    } else {
      bookmarks.push({ ref: v.ref, sanskrit: v.sanskrit, translation: v.translation });
      btn.classList.add('active');
      btn.querySelector('svg').setAttribute('fill', 'currentColor');
      showNotification('Verse saved to bookmarks ✦');
    }

    localStorage.setItem('tattvam-bookmarks', JSON.stringify(bookmarks));
  }

  // --- READ TRACKING ---
  function toggleRead(ref, btn) {
    let readVerses = JSON.parse(localStorage.getItem('tattvam-read-verses') || '[]');
    const index = readVerses.indexOf(ref);
    const itemCard = document.getElementById(`verse-${ref.replace(' ', '-')}`);

    if (index > -1) {
      readVerses.splice(index, 1);
      btn.classList.remove('active');
      itemCard.classList.remove('read');
    } else {
      readVerses.push(ref);
      btn.classList.add('active');
      itemCard.classList.add('read');
      showNotification('Verse marked as read ✓');
    }

    localStorage.setItem('tattvam-read-verses', JSON.stringify(readVerses));
    updateProgress();
  }

  // --- UPDATE PROGRESS ---
  function updateProgress() {
    const chVerses = VERSES.filter(v => v.chapter === activeChapterId);
    const readVerses = JSON.parse(localStorage.getItem('tattvam-read-verses') || '[]');
    
    const readInCh = chVerses.filter(v => readVerses.includes(v.ref)).length;
    const pct = Math.round((readInCh / chVerses.length) * 100);

    progressFill.style.width = pct + '%';
    progressPct.textContent = `${readInCh} / ${chVerses.length} Read (${pct}%)`;
  }

  // --- NOTIFICATION TOAST ---
  function showNotification(message) {
    // Check if toast already exists
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  }

  // Run Explorer
  document.addEventListener('DOMContentLoaded', init);

})();
