/* =============================================
   TATTVAM - Chat With Epic Characters JS
   ============================================= */

(function () {
  'use strict';

  const CHARACTERS_DATA = {
    krishna: {
      name: "Sri Krishna",
      title: "The Charioteer of Dharma",
      avatar: "कृ",
      theme: "krishna",
      welcome: "I am always with you, Arjuna of the modern age. When confusion clouds your intellect, when fear freezes your heart, or when you are attached to outcomes, surrender your anxieties to Me. Speak, what is troubling your mind?",
      responses: [
        {
          keywords: ['purpose', 'life direction', 'who am i', 'destiny', 'meaning'],
          reply: "Your purpose is to perform your Dharma (righteous duty) in accordance with your unique nature (Svadharma). Do not look at others' paths with envy. Walk your own path with truth and dedication. That is the highest worship."
        },
        {
          keywords: ['fear', 'anxious', 'stress', 'worried', 'worry', 'anxiety'],
          reply: "Why do you fear? What can you lose? You did not bring anything when you were born, nor will you take anything when you leave. Focus on the present moment. Give your best effort and surrender the results to Me."
        },
        {
          keywords: ['attachment', 'expectation', 'result', 'outcome', 'desire', 'frustrated'],
          reply: "You have control only over your action, never over the fruits thereof. Perform your work as a selfless offering (Nishkama Karma). When you work without greed for results, you become free from stress and disappointment."
        },
        {
          default: "Establish yourself in yoga, perform your actions, and let go of attachment to success or failure. Equanimity of mind is true Yoga. Tell me, how can I guide your chariot today?"
        }
      ]
    },
    arjuna: {
      name: "Arjuna",
      title: "The Peerless Archer",
      avatar: "अ",
      theme: "arjuna",
      welcome: "I welcome you, friend. I have stood at the center of the battlefield, paralyzed by doubts, my bow slipping from my hands. I know what it means to feel torn. Ask me about facing confusion, doubts, or finding the courage to take up your bow.",
      responses: [
        {
          keywords: ['doubt', 'paralyze', 'paralysis', 'confused', 'which path', 'torn', 'hesitate'],
          reply: "I know this silence well. Standing between two armies, I sat down in the dust, unable to decide. Krishna taught me that hesitation comes from wanting to control the future. Pick the path that aligns with your true nature, pick up your bow, and shoot. Action itself dissolves confusion."
        },
        {
          keywords: ['fear', 'scared', 'afraid', 'fail', 'failure', 'opponent'],
          reply: "When I saw Bhishma and Drona on the other side, my heart failed me. I was terrified of the outcome. But fear is just a projection of what hasn't happened. Focus only on the target in front of you. Let go of the score, just focus on releasing the arrow."
        },
        {
          keywords: ['duty', 'dharma', 'must do', 'responsib', 'obligat'],
          reply: "It is difficult to do your duty when it demands sacrifice. I wanted to run away and become a monk, but that was another's path, not mine. Stand firm in your own calling. Walk your path, even if you make mistakes, for it is yours."
        },
        {
          default: "We are all archers on the field of life. The bow is your mind; the arrow is your attention. Keep your eye on the target of dharma, release your doubts, and let the arrow fly."
        }
      ]
    },
    hanuman: {
      name: "Hanuman",
      title: "The Devoted Warrior",
      avatar: "ह",
      theme: "hanuman",
      welcome: "Jai Shri Ram. 🙏 I am here to serve you, seeker. There is no obstacle too high when your heart is anchored in devotion and selfless service. Ask me about finding strength, overcoming obstacles, or practicing humility.",
      responses: [
        {
          keywords: ['obstacle', 'block', 'impossible', 'hard', 'struggle', 'difficulty'],
          reply: "When I had to leap across the ocean to Lanka, the water seemed endless and demons rose to block my way. I did not focus on my own power - I kept Ram's name in my heart. Surrender your ego to the divine work, and you will find the strength to carry mountains."
        },
        {
          keywords: ['strength', 'power', 'weak', 'exhaust', 'tired', 'cannot do'],
          reply: "Strength is not just in the muscles; it is in devotion. I forgot my own power until others reminded me of it. You, too, have divine strength sleeping within you. Wake up, remember your true nature, and serve others."
        },
        {
          keywords: ['serve', 'seva', 'help', 'ego', 'humble', 'humility'],
          reply: "Ego is the heaviest weight we carry. When I sat at Ram's feet, I was happier than when I was shaking the heavens. Do your work not for your own glory, but as an offering to the divine. This makes every task light."
        },
        {
          default: "Keep your heart centered in love and devotion. When you work selflessly for a higher purpose, the entire universe conspires to lift you over the oceans of life. Jai Shri Ram."
        }
      ]
    },
    bhishma: {
      name: "Bhishma",
      title: "The Steadfast Patriarch",
      avatar: "भी",
      theme: "bhishma",
      welcome: "Greetings. I have lived a long life governed by vows, duty, and sacrifice. I have seen empires rise and fall, and stood on a bed of arrows, watching the consequences of decisions. Ask me about sacrifice, loyalty, keeping promises, or ethics.",
      responses: [
        {
          keywords: ['promise', 'vow', 'oath', 'word', 'loyalty', 'commit'],
          reply: "A promise made must be a promise kept, whatever the cost. I took the vow of celibacy and renounced the throne for my father's happiness. Yes, it brought pain and bounded me to a tragic duty, but a life without commitment is like sand blown by the wind. Stand by your word."
        },
        {
          keywords: ['sacrifice', 'give up', 'lose', 'renounce', 'compromise'],
          reply: "Sacrifice is the law of life. To gain the higher, you must release the lower. I sacrificed my own happiness for my lineage. When you choose duty over personal pleasure, your life becomes a pillars of strength for others, even if you suffer silently."
        },
        {
          keywords: ['regret', 'mistake', 'pain', 'sad', 'wrong choice'],
          reply: "I spent my final days on a bed of arrows. I had time to reflect on every decision. I supported the throne of Hastinapur even when it was held by adharma, because of my vow. Sometimes, life places us in impossible positions. Do your duty with clean intent, and let Time be the judge."
        },
        {
          default: "Honor is not given; it is forged through steadfast adherence to duty. Be like a rock in the ocean - let the waves of pleasure and pain crash against you, but remain unmoved."
        }
      ]
    },
    vidura: {
      name: "Vidura",
      title: "The Righteous Counselor",
      avatar: "वि",
      theme: "vidura",
      welcome: "Welcome, seeker. I served as prime minister, advising kings through dharma. Real wisdom is not complicated - it is simple, practical righteousness in daily life. Ask me about moral decisions, family values, trust, or practical living.",
      responses: [
        {
          keywords: ['moral', 'dilemma', 'decision', 'right thing', 'ethical', 'choose'],
          reply: "When making a decision, apply the Vidura test: Does it bring long-term peace or short-term pleasure? A wise person chooses what is good (Shreyas) over what is pleasant (Preyas). Never sacrifice your character for quick success."
        },
        {
          keywords: ['trust', 'friend', 'betray', 'enemy', 'fake people', 'liar'],
          reply: "Trust is a sacred vessel; once broken, it cannot hold water. Do not trust those who have betrayed you once. Keep your distance from flatterers who praise you to your face but speak ill behind your back. True wealth is an honest friend."
        },
        {
          keywords: ['family', 'parents', 'brother', 'conflict', 'home', 'relative'],
          reply: "A house divided against itself cannot stand. In the Mahabharata, the conflict between brothers destroyed our entire civilization. Practice forgiveness, drop small ego issues, and keep your family united. Harmony at home is the foundation of dharma."
        },
        {
          default: "Wealth may come and go, but character is eternal. A person who practices satya (truth), kshama (forgiveness), and kindness lives a truly successful life, regardless of their status."
        }
      ]
    },
    chanakya: {
      name: "Chanakya",
      title: "The Master Strategist",
      avatar: "चा",
      theme: "chanakya",
      welcome: "Speak. I do not value idle talk. Wisdom without execution is a burden. I helped build an empire from dust using strategy, pragmatism, and foresight. Ask me about career strategy, handling rivals, success, focus, or wealth.",
      responses: [
        {
          keywords: ['strategy', 'plan', 'career', 'execute', 'success', 'goal', 'achieve'],
          reply: "Never begin a task without asking three questions: Why am I doing it? What will the results be? Will I be successful? Once you begin, banish all fear of failure. A strategist plans three steps ahead. Do not show your cards until you play them."
        },
        {
          keywords: ['enemy', 'rival', 'competition', 'competitor', 'hurt me', 'critic'],
          reply: "Do not hate your enemies; it clouds your judgment. Instead, study them. Understand their strengths and weaknesses. The best way to defeat an opponent is not through anger, but by out-thinking them. Keep your friends close, and your rivals closer."
        },
        {
          keywords: ['money', 'wealth', 'rich', 'poverty', 'resource', 'finance'],
          reply: "Wealth is the root of dharma and stability. Accumulate resources honestly and protect them fiercely. A person without wealth is abandoned by society, friends, and relatives. But remember - wealth is a tool to be used, not hoarded out of anxiety."
        },
        {
          default: "Education is your best friend. An educated person is respected everywhere. Youth and beauty fade, but knowledge remains. Stay focused, execute your plans, and let your results make the noise."
        }
      ]
    },
    vivekananda: {
      name: "Swami Vivekananda",
      title: "The Awakening Roar",
      avatar: "वि",
      theme: "vivekananda",
      welcome: "Arise, awake, and stop not till the goal is reached! My child, you are the creator of your own destiny. All power is within you. Ask me about fear, focus, weakness, or finding your true potential.",
      responses: [
        {
          keywords: ['fear', 'scared', 'weak', 'anxious', 'doubt', 'can I'],
          reply: "The greatest sin is to think yourself weak. Stand up and be strong! Have faith in yourself first, then in God. A handful of strong-minded men and women can move the world. Reject any thought that makes you physically, intellectually, or spiritually weak."
        },
        {
          keywords: ['focus', 'distract', 'study', 'mind', 'concentration'],
          reply: "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success."
        },
        {
          keywords: ['help', 'serve', 'charity', 'poor', 'society'],
          reply: "They alone live who live for others, the rest are more dead than alive. See Shiva in the poor, the weak, and the diseased. When you serve them, you are worshiping the Divine. Be unattached, but pour your heart into serving humanity."
        },
        {
          default: "You can do anything and everything, without even the guidance of any one. Stand up and express the divinity within you. Never say 'I cannot'."
        }
      ]
    },
    shankara: {
      name: "Adi Shankaracharya",
      title: "The Non-Dualist",
      avatar: "शं",
      theme: "shankara",
      welcome: "Salutations. The world is but a passing shadow, while the Self (Atman) alone is real. Why do you grieve for what is temporary? Ask me about detachment, reality, illusion, or finding lasting peace.",
      responses: [
        {
          keywords: ['sad', 'grief', 'loss', 'lost', 'cry', 'pain'],
          reply: "Who is your wife? Who is your son? Strange is this world! Reflect on who you are and where you came from. Do not identify with the body or the mind, which are subject to decay. You are the eternal, unchanging consciousness. Rest in that."
        },
        {
          keywords: ['fake', 'illusion', 'real', 'maya', 'meaningless'],
          reply: "Brahma satyam, jagan mithya - Brahman is real, the world is an illusion. Just as a rope is mistaken for a snake in the dark, the eternal Self is mistaken for this limited ego. Wake up from the dream of separateness."
        },
        {
          keywords: ['desire', 'want', 'craving', 'attachment'],
          reply: "Desire is a fire that cannot be quenched by feeding it. True wealth is not in acquiring, but in the discrimination between the eternal and the temporary (Viveka), and a dispassion for the temporary (Vairagya). Seek the source of joy within."
        },
        {
          default: "I am not the mind, intellect, ego, or memory. I am not the earth, water, fire, air, or ether. I am absolute existence, consciousness, and bliss. I am Shiva. Meditate on this truth."
        }
      ]
    },
    shivaji: {
      name: "Shivaji Maharaj",
      title: "The Dharmic King",
      avatar: "शि",
      theme: "shivaji",
      welcome: "Har Har Mahadev! A true warrior does not fight out of hatred for what is in front of him, but out of love for what is behind him. Ask me about leadership, fighting injustice, courage, or building something great.",
      responses: [
        {
          keywords: ['leader', 'lead', 'manage', 'team', 'respect'],
          reply: "A king's true fort is the love of his people. Lead by personal example. Do not demand respect; earn it through your own character, justice, and willingness to sacrifice. A leader must have the courage of a lion and the heart of a mother."
        },
        {
          keywords: ['injustice', 'bully', 'oppress', 'fight back', 'wrong'],
          reply: "Tolerance of injustice is as much a crime as the injustice itself. Pick up your sword - be it of steel or intellect - and protect Dharma. But remember, your fight must be guided by righteousness, never by blind vengeance."
        },
        {
          keywords: ['fear', 'outnumbered', 'impossible', 'stronger enemy'],
          reply: "When the enemy is vast and you are small, you do not fight them on their terms. Use the terrain, use strategy (Ganimi Kava). The mind is the greatest weapon. Faith in your cause and blessings of the Divine Mother will turn a handful of men into an invincible force."
        },
        {
          default: "Never bow your head to adharma. Protect the weak, honor all paths, respect women, and build your kingdom on the foundation of justice. Victory will belong to Dharma."
        }
      ]
    },
    ramanujacharya: {
      name: "Bhagavad Ramanujacharya",
      title: "The Devotional Philosopher",
      avatar: "रा",
      theme: "ramanujacharya",
      welcome: "Salutations! The path of devotion leads to the ultimate truth. Ask me about Vishishtadvaita, devotion, or the path of surrender to God.",
      responses: [
        {
          keywords: ['judge', 'society', 'people say', 'reputation', 'mock'],
          reply: "Let the world mock! They gave me poison, they locked me out, they called me mad. What does it matter? When the King of the Universe holds your hand, the whisperings of the world sound like the buzzing of flies. Dance to your own divine tune."
        },
        {
          keywords: ['love', 'breakup', 'heartbreak', 'lonely', 'alone'],
          reply: "Human love is a shadow; it comes and goes like the clouds. Turn your immense capacity for love toward the Divine. Once you taste the nectar of divine love, you will never feel lonely again. He is the only true companion."
        },
        {
          keywords: ['joy', 'happy', 'bliss', 'dance', 'sing'],
          reply: "Joy cannot be bought with gold. It comes when you surrender the heavy burden of 'I' and 'mine' at His lotus feet. Tie the bells of devotion to your ankles and dance in the joy of simply being alive in His presence."
        },
        {
          default: "I have found the wealth of the Divine Name. The more I spend it, the more it grows. Drink the nectar of devotion, let go of your worldly anxieties, and rest in His love."
        }
      ]
    }
  };

  // --- State ---
  let activeCharKey = null;

  // --- DOM Elements ---
  const selectionContainer = document.getElementById('selectionContainer');
  const historicalSelectionContainer = document.getElementById('historicalSelectionContainer');
  const chatContainer = document.getElementById('chatContainer');
  const chatPanel = document.getElementById('chatPanel');
  const charChatAvatar = document.getElementById('charChatAvatar');
  const charChatName = document.getElementById('charChatName');
  const charChatTitle = document.getElementById('charChatTitle');
  const charMessagesArea = document.getElementById('charMessagesArea');
  const charInput = document.getElementById('charInput');
  const charSendBtn = document.getElementById('charSendBtn');
  const backBtn = document.getElementById('backBtn');

  // --- Initialize ---
  function init() {
    bindEvents();
  }

  // --- Bind Events ---
  function bindEvents() {
    // Select character
    const handleCharSelect = (e) => {
      const card = e.target.closest('.char-select-card');
      if (!card) return;

      const charKey = card.dataset.char;
      openChat(charKey);
    };

    selectionContainer?.addEventListener('click', handleCharSelect);
    historicalSelectionContainer?.addEventListener('click', handleCharSelect);

    // Back button
    backBtn.addEventListener('click', closeChat);

    // Send button
    charSendBtn.addEventListener('click', handleSend);

    // Enter key press
    charInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });

    // Auto-resize textarea
    charInput.addEventListener('input', () => {
      charInput.style.height = 'auto';
      charInput.style.height = Math.min(charInput.scrollHeight, 120) + 'px';
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

  // --- Open Chat ---
  function openChat(charKey) {
    activeCharKey = charKey;
    const char = CHARACTERS_DATA[charKey];

    // Update Header DOM
    charChatAvatar.textContent = char.avatar;
    charChatName.textContent = char.name;
    charChatTitle.textContent = char.title;

    // Apply Theme Class
    chatPanel.className = `char-chat-panel theme--${char.theme}`;

    // Clear and Render Welcome Message
    charMessagesArea.innerHTML = `
      <div class="char-message-row">
        <div class="char-message-bubble character">${char.welcome}</div>
      </div>
    `;

    // Swap Panels
    selectionContainer.classList.add('hidden');
    historicalSelectionContainer.classList.add('hidden');

    document.querySelectorAll('.reveal').forEach(el => {
      if (el !== chatContainer && !chatContainer.contains(el)) {
        el.classList.add('hidden');
      }
    });

    setTimeout(() => {
      selectionContainer.style.display = 'none';
      historicalSelectionContainer.style.display = 'none';
      chatContainer.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }

  // --- Close Chat ---
  function closeChat() {
    chatContainer.classList.remove('active');
    setTimeout(() => {
      selectionContainer.style.display = '';
      selectionContainer.classList.remove('hidden');
      historicalSelectionContainer.style.display = '';
      historicalSelectionContainer.classList.remove('hidden');

      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('hidden');
      });

      activeCharKey = null;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }

  // --- Handle Send ---
  function handleSend() {
    const text = charInput.value.trim();
    if (!text) return;

    // Append User Message
    appendMessage(text, 'user');
    charInput.value = '';
    charInput.style.height = 'auto';

    // Show Typing Indicator
    showTypingIndicator();

    // Generate Response
    const delay = 1200 + Math.random() * 1200;
    setTimeout(() => {
      removeTypingIndicator();
      const reply = findCharacterResponse(text);
      appendMessage(reply, 'character');
    }, delay);
  }

  function appendMessage(text, sender) {
    const row = document.createElement('div');
    row.className = `char-message-row ${sender}`;
    row.innerHTML = `<div class="char-message-bubble ${sender}">${escapeHTML(text).replace(/\n/g, '<br>')}</div>`;
    charMessagesArea.appendChild(row);
    scrollToBottom();
  }

  function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'char-message-row';
    indicator.id = 'charTypingIndicator';
    indicator.innerHTML = `
      <div class="char-typing-bubble">
        <div class="char-typing-dot"></div>
        <div class="char-typing-dot"></div>
        <div class="char-typing-dot"></div>
      </div>
    `;
    charMessagesArea.appendChild(indicator);
    scrollToBottom();
  }

  function removeTypingIndicator() {
    const el = document.getElementById('charTypingIndicator');
    if (el) el.remove();
  }

  function findCharacterResponse(inputText) {
    const lower = inputText.toLowerCase();
    const char = CHARACTERS_DATA[activeCharKey];

    for (const resp of char.responses) {
      if (resp.keywords) {
        if (resp.keywords.some(kw => lower.includes(kw))) {
          return resp.reply;
        }
      }
    }

    return char.responses.find(r => r.default).default;
  }

  function scrollToBottom() {
    requestAnimationFrame(() => {
      charMessagesArea.scrollTo({
        top: charMessagesArea.scrollHeight,
        behavior: 'smooth'
      });
    });
  }

  function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  init();

})();
