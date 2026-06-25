/* =============================================
   TATTVAM - Knowledge Tree JS
   ============================================= */

(function () {
  'use strict';

  // --- HIERARCHY STRUCTURE ---
  const TREE_DATA = {
    id: "sanatana_dharma",
    name: "Sanatana Dharma",
    sanskrit: "सनातन धर्म",
    children: [
      {
        id: "dharma",
        name: "Dharma",
        sanskrit: "धर्म",
        children: [
          { id: "svadharma", name: "Svadharma", sanskrit: "स्वधर्म" },
          { id: "sadharana", name: "Sadharana Dharma", sanskrit: "साधारण धर्म" },
          { id: "purusharthas", name: "Purusharthas", sanskrit: "पुरुषार्थ" }
        ]
      },
      {
        id: "karma",
        name: "Karma",
        sanskrit: "कर्म",
        children: [
          { id: "nishkama", name: "Nishkama Karma", sanskrit: "निष्काम कर्म" },
          { id: "sakama", name: "Sakama Karma", sanskrit: "सकाम कर्म" },
          { id: "karmic_cycles", name: "Samsara Cycles", sanskrit: "संसार चक्र" }
        ]
      },
      {
        id: "yoga",
        name: "Yoga",
        sanskrit: "योग",
        children: [
          { id: "karma_yoga", name: "Karma Yoga", sanskrit: "कर्मयोग" },
          { id: "bhakti_yoga", name: "Bhakti Yoga", sanskrit: "भक्तियोग" },
          { id: "jnana_yoga", name: "Jnana Yoga", sanskrit: "ज्ञानयोग" }
        ]
      },
      {
        id: "moksha",
        name: "Moksha",
        sanskrit: "मोक्ष",
        children: [
          { id: "jivanmukti", name: "Jivanmukti", sanskrit: "जीवन्मुक्ति" },
          { id: "videhamukti", name: "Videhamukti", sanskrit: "विदेहमुक्ति" }
        ]
      }
    ]
  };

  // --- DETAIL DATABASE ---
  const NODE_DETAILS = {
    sanatana_dharma: {
      title: "Sanatana Dharma",
      sanskrit: "सनातन धर्म (The Eternal Order)",
      desc: "Sanatana Dharma is the ancient, original name for the spiritual tradition of Bharat. It translates to 'The Eternal Law' or 'The Imperishable Way'. Rather than a historical religion founded by a single prophet, it is a compilation of cosmic laws, ethical codes, and spiritual truths discovered by ancient sages (rishis) through deep contemplation.",
      bullets: [
        "Sanatana: Timeless, eternal, without beginning or end.",
        "Dharma: The underlying order that holds creation together.",
        "Focuses on personal realization (Anubhuti) rather than dogma."
      ]
    },
    dharma: {
      title: "Dharma",
      sanskrit: "धर्म (Righteousness and Order)",
      desc: "One of the most foundational concepts. Dharma is the cosmic principle that maintains balance, righteousness, and order in the universe. It is the ethical code that guides human behavior, ensuring harmony in the self, society, and nature.",
      bullets: [
        "Derived from 'dhri' - that which sustains or supports.",
        "Dictates duties, virtues, and right conduct based on context.",
        "Protects the individual and the universe when practiced."
      ]
    },
    svadharma: {
      title: "Svadharma",
      sanskrit: "स्वधर्म (One's Own Calling)",
      desc: "Your unique nature-aligned duty. In the Bhagavad Gita, Krishna emphasizes that each individual has a unique temperament and set of strengths (svabhava), and their duty must align with it. It is better to walk your own calling imperfectly than to perfectly imitate another's path.",
      bullets: [
        "Sva: Own, personal. Dharma: Duty or nature.",
        "Requires deep self-awareness to align career and life choices.",
        "Reduces friction, imposter syndrome, and stress in work."
      ]
    },
    sadharana: {
      title: "Sadharana Dharma",
      sanskrit: "साधारण धर्म (Universal Virtues)",
      desc: "Unlike Svadharma (contextual duty), Sadharana Dharma consists of universal moral guidelines that apply to all human beings at all times, regardless of age, status, or role. These are the pillars of character.",
      bullets: [
        "Includes Satya (truthfulness), Ahimsa (non-violence), Asteya (non-stealing).",
        "Kshama (forgiveness), Daya (compassion), and Shaucha (purity).",
        "The baseline guidelines for ethical human coexistence."
      ]
    },
    purusharthas: {
      title: "Purusharthas",
      sanskrit: "पुरुषार्थ (Four Life Goals)",
      desc: "The comprehensive blueprint for a balanced human life. Sanatana Dharma defines four legitimate goals that humans should pursue in harmony: Dharma (Ethics), Artha (Wealth/Livelihood), Kama (Pleasure/Desire), and Moksha (Spiritual Liberation).",
      bullets: [
        "Dharma: The moral foundation governing all pursuits.",
        "Artha: Accumulating resources to support family and society.",
        "Kama: Enjoying art, love, relationships, and nature.",
        "Moksha: The ultimate release into absolute freedom."
      ]
    },
    karma: {
      title: "Karma",
      sanskrit: "कर्म (Action and Effect)",
      desc: "The universal law of cause and effect. Every action - physical, verbal, or mental - leaves an imprint on your consciousness and generates a reaction. Karma teaches complete self-responsibility; your past actions created your present, and your current choices build your future.",
      bullets: [
        "Action is inevitable; even keeping silent is an action.",
        "Karmic reactions (phala) can return immediately or in the future.",
        "Awareness of karma encourages mindful, ethical choices."
      ]
    },
    nishkama: {
      title: "Nishkama Karma",
      sanskrit: "निष्काम कर्म (Detached Action)",
      desc: "The hallmark teaching of Karma Yoga in the Bhagavad Gita. It is the practice of performing your duties with maximum excellence and dedication, while releasing the ego-centric anxiety about the results. Action becomes an offering.",
      bullets: [
        "Focus on process rather than outcomes.",
        "Removes performance anxiety and fear of failure.",
        "Work is done out of love, duty, and service, not transactions."
      ]
    },
    sakama: {
      title: "Sakama Karma",
      sanskrit: "सकाम कर्म (Desire-Driven Action)",
      desc: "Actions performed with expectation of reward, wealth, fame, or heaven. While not bad or sinful in themselves, sakama karma binds the individual to the cycles of expectations, producing anxiety, greed, and disappointment when expectations are not met.",
      bullets: [
        "Driven by personal cravings and ego.",
        "Yields temporary pleasures but binds the mind.",
        "Leads to disappointment when outcomes fail to match desires."
      ]
    },
    karmic_cycles: {
      title: "Samsara Cycles",
      sanskrit: "संसार चक्र (The Flow of Rebirth)",
      desc: "Samsara is the continuous loop of birth, death, and rebirth driven by unresolved karma and desires. The soul takes on different bodies, gathering experiences, until it achieves ultimate wisdom and liberation (Moksha).",
      bullets: [
        "Driven by ignorance (avidya) of the true self.",
        "The physical world is a school where the soul learns lessons.",
        "Ends when the soul realizes its unity with absolute consciousness."
      ]
    },
    yoga: {
      title: "Yoga",
      sanskrit: "योग (Union and Alignment)",
      desc: "Derived from the root 'yuj' meaning 'to yoke or unite'. Yoga is the system of aligning the mind, body, and consciousness to achieve union with the supreme reality. It is a set of practices designed to quiet the mind's waves.",
      bullets: [
        "Yoga Sutras: 'Yogash chitta vritti nirodhah' (Yoga is the cessation of mind-fluctuations).",
        "Includes multiple paths matching different human temperaments.",
        "A practical science of self-realization, not a religion."
      ]
    },
    karma_yoga: {
      title: "Karma Yoga",
      sanskrit: "कर्मयोग (Yoga of Action)",
      desc: "The path of self-realization through action. It is designed for active temperaments. By performing daily work as service, without ego, and dedicating the results to a higher purpose, the mind is purified and freed from selfish desires.",
      bullets: [
        "Work becomes worship.",
        "Eradicates ego, possessiveness, and entitlement.",
        "Transforms daily routine into a spiritual practice."
      ]
    },
    bhakti_yoga: {
      title: "Bhakti Yoga",
      sanskrit: "भक्तियोग (Yoga of Devotion)",
      desc: "The path of love and devotion. Designed for emotional temperaments. The seeker channels their emotions - love, anger, grief, longing - toward a personal deity or the divine presence in all creation, dissolving the ego in love.",
      bullets: [
        "Easiest path according to Krishna in the Gita.",
        "Uses chanting (kirtan), prayer, and surrender (prapatti).",
        "Sees the beloved divine in every living being."
      ]
    },
    jnana_yoga: {
      title: "Jnana Yoga",
      sanskrit: "ज्ञानयोग (Yoga of Knowledge)",
      desc: "The path of intellect and self-inquiry. Designed for philosophical and analytical temperaments. The seeker uses sharp inquiry ('Neti, Neti' - not this, not that) to dismantle false identifications with the body/mind and realize unity with the eternal Atman.",
      bullets: [
        "Inquiry: 'Who am I?'",
        "Demands high mental discipline and logical analysis.",
        "Direct realization of non-dual consciousness (Advaita)."
      ]
    },
    moksha: {
      title: "Moksha",
      sanskrit: "मोक्ष (Liberation and Freedom)",
      desc: "The ultimate goal of Sanatana Dharma. Moksha is liberation from the cycles of Samsara, ignorance, and suffering. It represents the dissolution of the individual ego and the direct realization of oneness with supreme consciousness.",
      bullets: [
        "Freedom from fear, death, and limitation.",
        "The end of the seeking loop; absolute fulfillment.",
        "Realization of your true nature as Sat-Chit-Ananda."
      ]
    },
    jivanmukti: {
      title: "Jivanmukti",
      sanskrit: "जीवन्मुक्ति (Liberation While Alive)",
      desc: "A beautiful, unique concept in Hindu philosophy. You do not have to die to achieve liberation. A Jivanmukta is one who achieves Moksha while still living in the physical body - remaining equal-minded, compassionate, and active in the world.",
      bullets: [
        "Living with absolute inner peace in daily life.",
        "Acting in the world, yet unaffected by success or failure.",
        "Krishna is the prime example of a Jivanmukta."
      ]
    },
    videhamukti: {
      title: "Videhamukti",
      sanskrit: "विदेहमुक्ति (Liberation Beyond Body)",
      desc: "Liberation achieved at the death of the physical body. For a liberated soul, there is no karma left to prompt another birth, and the individual consciousness merges completely into the universal ocean, never to take form again.",
      bullets: [
        "Videha: Without body. Mukti: Liberation.",
        "Complete merge of the drop (Atman) into the ocean (Brahman).",
        "Absolute transcendence of physical space and time."
      ]
    }
  };

  // --- DOM SELECTORS ---
  const treeContainer = document.getElementById('treeContainer');
  const detailTitle = document.getElementById('detailTitle');
  const detailSanskrit = document.getElementById('detailSanskrit');
  const detailDesc = document.getElementById('detailDesc');
  const detailSublist = document.getElementById('detailSublist');

  // --- Init ---
  function init() {
    renderTree();
    selectNode("sanatana_dharma");
    bindEvents();
  }

  // --- Recursive Tree Render ---
  function renderTree() {
    treeContainer.innerHTML = '';
    const rootUl = document.createElement('ul');
    rootUl.className = 'tree-root';
    rootUl.appendChild(buildHtmlNode(TREE_DATA));
    treeContainer.appendChild(rootUl);
  }

  function buildHtmlNode(data) {
    const li = document.createElement('li');
    li.className = 'tree-li';

    const nodeDiv = document.createElement('div');
    nodeDiv.className = 'tree-node';
    nodeDiv.dataset.id = data.id;
    nodeDiv.textContent = data.name;

    li.appendChild(nodeDiv);

    if (data.children && data.children.length > 0) {
      const ul = document.createElement('ul');
      ul.className = 'tree-ul';
      data.children.forEach(child => {
        ul.appendChild(buildHtmlNode(child));
      });
      li.appendChild(ul);
    }

    return li;
  }

  // --- Select Node & Populate Details ---
  function selectNode(id) {
    // Toggle active class
    document.querySelectorAll('.tree-node').forEach(node => {
      node.classList.toggle('active', node.dataset.id === id);
    });

    // Populate sidebar details
    const details = NODE_DETAILS[id];
    if (details) {
      detailTitle.textContent = details.title;
      detailSanskrit.textContent = details.sanskrit;
      detailDesc.textContent = details.desc;

      // Populate bullet points
      detailSublist.innerHTML = details.bullets.map(b => `
        <div class="sublist-item">${escapeHTML(b)}</div>
      `).join('');
    }
  }

  // --- Bind Events ---
  function bindEvents() {
    // Click on node
    treeContainer.addEventListener('click', (e) => {
      const node = e.target.closest('.tree-node');
      if (!node) return;
      
      const id = node.dataset.id;
      selectNode(id);
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
