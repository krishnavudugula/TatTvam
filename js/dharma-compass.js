/* =============================================
   TATTVAM - Dharma Compass Logic
   Keyword-matched dharmic analysis engine
   ============================================= */

(function () {
  'use strict';

  // --- DOM Elements ---
  const textarea = document.getElementById('compassInput');
  const charCount = document.getElementById('charCount');
  const seekBtn = document.getElementById('seekBtn');
  const oracleSection = document.getElementById('compassOracle');
  const resultsSection = document.getElementById('compassResults');
  const inputSection = document.getElementById('inputSection');
  const oracleStatus = document.getElementById('oracleStatus');
  const oracleSubstatus = document.getElementById('oracleSubstatus');
  const situationEcho = document.getElementById('situationEcho');
  const resultPanels = document.querySelectorAll('.result-panel');
  const restartBtn = document.getElementById('restartBtn');

  // --- Char counter ---
  textarea.addEventListener('input', () => {
    const len = textarea.value.length;
    charCount.textContent = `${len} / 500`;
    seekBtn.disabled = len < 10;
  });

  // --- Chip click → populate textarea ---
  document.querySelectorAll('.compass-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      textarea.value = chip.dataset.situation;
      textarea.dispatchEvent(new Event('input'));
      textarea.focus();
    });
  });

  // --- Analysis Templates ---
  const analysisTemplates = {
    truth: {
      keywords: ['lying', 'lied', 'lie', 'dishonest', 'truth', 'honest', 'deception', 'deceive', 'fake', 'false'],
      dharma: {
        title: 'The Pillar of Satya',
        body: `<p>Satya (truth) is one of the foundational pillars of Dharma. The ancient texts teach that truth is the very fabric upon which the universe rests - <em>"Satyameva Jayate"</em> (truth alone triumphs).</p>
        <p>However, Dharma also recognizes that truth must be spoken with compassion. A truth delivered to wound is itself a form of adharma. The wise discern not only <em>what</em> is true, but <em>when</em> and <em>how</em> truth serves the highest good.</p>`
      },
      karma: {
        title: 'The Ripples of Dishonesty',
        body: `<p>Every act of dishonesty creates a karmic imprint - not just on the one who lies, but on the entire web of trust connecting both souls. The Karma of untruth works in subtle ways: it erodes the liar's inner clarity and distances them from their own Atman.</p>
        <p>Yet the karma of <em>responding</em> to dishonesty also matters. Reacting with anger binds you; responding with wisdom liberates you. Your response becomes your karma, not their action.</p>`
      },
      scripture: {
        title: 'What the Gita Teaches',
        shloka: 'सत्यं ब्रूयात् प्रियं ब्रूयात् न ब्रूयात् सत्यमप्रियम्',
        ref: 'Manusmriti 4.138',
        body: `<p>"Speak the truth, speak what is pleasant, do not speak an unpleasant truth." This verse reveals that Dharma is never one-dimensional. Truth tempered with kindness is the highest expression of righteous speech.</p>
        <p>Lord Krishna in BG 17.15 also describes <em>vāk tapas</em> - austerity of speech - as words that are truthful, beneficial, and not agitating.</p>`
      },
      path: {
        title: 'Your Way Forward',
        body: `<p><strong>Acknowledge the hurt</strong> without letting it define you. Someone's dishonesty reflects their struggle, not your worth.</p>
        <p><strong>Seek clarity</strong> through honest, calm dialogue when the time is right. Express how the dishonesty affected you without seeking to punish.</p>
        <p><strong>Practice Kshama</strong> (forgiveness) - not to condone the act, but to free yourself from the weight of resentment. Forgiveness is the dharma of the strong, not the weak.</p>`
      }
    },

    stealing: {
      keywords: ['steal', 'stole', 'stealing', 'theft', 'money', 'found money', 'wallet', 'took', 'taking', 'dishonest gains'],
      dharma: {
        title: 'Asteya - The Virtue of Non-Stealing',
        body: `<p>Asteya (non-stealing) extends far beyond physical possessions. The sages teach that taking what is not freely given - whether objects, credit, time, or opportunities - creates a fundamental disharmony with the cosmic order.</p>
        <p>When something that is not ours comes to us, Dharma asks: "What is the righteous path?" Keeping it binds us; returning it liberates us. True wealth lies in what we earn through dharmic action.</p>`
      },
      karma: {
        title: 'The Weight of What We Keep',
        body: `<p>Karmic law operates with precision: wealth obtained through adharma carries within it the seeds of future suffering. The Mahabharata teaches that dishonest gains are like honey mixed with poison - sweet at first, but destructive in time.</p>
        <p>Conversely, the act of returning what is not ours generates powerful positive karma. It strengthens our inner resolve and alignment with our highest Self.</p>`
      },
      scripture: {
        title: 'Wisdom from the Ancients',
        shloka: 'अस्तेयप्रतिष्ठायां सर्वरत्नोपस्थानम्',
        ref: 'Yoga Sutras 2.37',
        body: `<p>"When non-stealing is established, all jewels present themselves." Patanjali reveals a profound truth: when we renounce the impulse to take what isn't ours, the universe itself provides abundance.</p>
        <p>This is not mere philosophy - it is a spiritual law. Alignment with Asteya opens doors that dishonesty permanently closes.</p>`
      },
      path: {
        title: 'The Righteous Choice',
        body: `<p><strong>Return what is not yours</strong> with grace and without expectation of reward. The act itself is the reward - it strengthens your dharmic foundation.</p>
        <p><strong>Examine your motivations</strong> honestly. Often the temptation to keep what isn't ours arises from a sense of lack. Recognize that true abundance comes from within.</p>
        <p><strong>Practice Aparigraha</strong> (non-possessiveness). Cultivate contentment with what you have earned through righteous effort. This is the path to lasting peace.</p>`
      }
    },

    family: {
      keywords: ['family', 'parents', 'mother', 'father', 'move', 'distance', 'away', 'home', 'leaving', 'moving away', 'far from family'],
      dharma: {
        title: 'The Sacred Bond of Kula Dharma',
        body: `<p>Family dharma (Kula Dharma) is among the most sacred obligations in Vedic tradition. Our parents are considered living deities - <em>"Matru Devo Bhava, Pitru Devo Bhava"</em> (Mother is God, Father is God). The debt we owe them is considered impossible to fully repay.</p>
        <p>Yet Dharma also recognizes that each soul has its own journey (Svadharma). Sometimes our path requires us to travel far. The key lies in balancing devotion to family with devotion to our life's purpose.</p>`
      },
      karma: {
        title: 'Weaving Distance and Devotion',
        body: `<p>The karma of family relationships extends across lifetimes. Our parents, siblings, and loved ones are souls we are karmically bound to serve and learn from. Physical distance does not sever these bonds - but emotional neglect does.</p>
        <p>Choosing growth is not abandonment when done with love and intention. The karma of pursuing one's calling with integrity creates blessings that flow back to the entire family.</p>`
      },
      scripture: {
        title: 'Ancient Guidance on Duty',
        shloka: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्',
        ref: 'Bhagavad Gita 3.35',
        body: `<p>"It is far better to perform one's own dharma, even imperfectly, than the dharma of another perfectly." Lord Krishna's teaching applies directly here - your unique path matters, even if it leads you away from home.</p>
        <p>Lord Rama himself left his kingdom for the forest, fulfilling a higher dharma. The journey away can itself be an offering of love.</p>`
      },
      path: {
        title: 'Navigating This Choice',
        body: `<p><strong>Communicate with love.</strong> Share your aspirations with your family honestly. Let them see your vision and feel your respect for their sacrifices.</p>
        <p><strong>Create bridges, not walls.</strong> Physical distance need not mean emotional distance. Commit to regular presence - calls, visits, and genuine attention.</p>
        <p><strong>Carry them with you.</strong> Honor your family's values in your new journey. When you succeed with integrity, you bring light to your entire lineage.</p>`
      }
    },

    work: {
      keywords: ['work', 'credit', 'unfair', 'boss', 'colleague', 'office', 'promotion', 'took credit', 'recognition', 'unappreciated'],
      dharma: {
        title: 'Nishkama Karma - Action Without Attachment',
        body: `<p>The Gita's most revolutionary teaching is Nishkama Karma - performing action without attachment to its fruits. When someone takes credit for your work, it tests this very principle. Can you continue to act with excellence regardless of external recognition?</p>
        <p>This does not mean accepting injustice passively. Dharma also demands standing up for truth. The key is <em>how</em> you seek justice - with equanimity, not ego.</p>`
      },
      karma: {
        title: 'Merit Cannot Be Stolen',
        body: `<p>Here is a liberating truth from karmic philosophy: the merit of your actions belongs to you forever. No one can take your karma. Someone may claim the credit in the material world, but the spiritual merit - the puṇya - remains irrevocably yours.</p>
        <p>Furthermore, taking credit for another's work generates its own negative karma. The scales of the universe balance themselves with time. Trust in this process is itself a spiritual practice.</p>`
      },
      scripture: {
        title: 'Krishna\'s "Direct Counsel"',
        shloka: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन',
        ref: 'Bhagavad Gita 2.47',
        body: `<p>"You have the right to perform your duty, but you are not entitled to the fruits of your actions." This is perhaps the most quoted verse of the Gita, and in moments of professional injustice, it takes on profound personal meaning.</p>
        <p>Krishna does not say "do nothing about injustice." He says: do not let the outcome own you. Act, speak truth, then release.</p>`
      },
      path: {
        title: 'Practical Steps Forward',
        body: `<p><strong>Document your contributions</strong> clearly. This is not ego - it is dharmic self-advocacy. Even Arjuna had to pick up his bow.</p>
        <p><strong>Address the situation directly</strong> but calmly. Speak with the person involved before escalating. Many times, awareness alone corrects behavior.</p>
        <p><strong>Redirect your energy inward.</strong> Use this experience to strengthen your detachment from external validation. Let the quality of your work be its own testimony.</p>`
      }
    },

    career: {
      keywords: ['career', 'job', 'passion', 'obligation', 'calling', 'profession', 'choose a career', 'different career', 'dream', 'follow passion'],
      dharma: {
        title: 'Svadharma - Your True Nature\'s Calling',
        body: `<p>Svadharma is the dharma that arises from your own nature - your innate talents, deep inclinations, and the calling that resonates with your soul. The Gita teaches that following your Svadharma, even imperfectly, leads to greater fulfillment than perfectly executing a path that isn't truly yours.</p>
        <p>Yet discerning Svadharma from fleeting desire requires deep self-reflection. Not every impulse is a calling. True Svadharma feels less like excitement and more like inevitability.</p>`
      },
      karma: {
        title: 'The Karma of Unlived Potential',
        body: `<p>There is a subtle karma in not living up to your potential - the karma of the unlived life. When we suppress our authentic nature to meet external expectations indefinitely, we create a quiet suffering that radiates outward and affects everyone around us.</p>
        <p>Equally, pursuing passion without responsibility creates its own karmic weight. The balance point is: can you honor your calling while also honoring your commitments?</p>`
      },
      scripture: {
        title: 'The Lord\'s Teaching on Nature',
        shloka: 'सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि',
        ref: 'Bhagavad Gita 3.33',
        body: `<p>"Even a person of knowledge acts according to their own nature. All beings follow their nature. What can repression accomplish?" Krishna acknowledges that suppressing one's fundamental nature is ultimately futile.</p>
        <p>The four varnas in Vedic society were not castes but recognitions of different natures - each equally sacred. The teacher, the protector, the provider, the server - all are essential.</p>`
      },
      path: {
        title: 'Finding Your True Path',
        body: `<p><strong>Listen to your Antarātmā</strong> (inner self). Spend time in silence and reflection. What work would you do even if no one paid you? That direction holds a clue to your Svadharma.</p>
        <p><strong>Bridge, don't burn.</strong> Transitioning toward your calling can be gradual. Begin integrating your passion into your life alongside your current responsibilities.</p>
        <p><strong>Seek wise counsel.</strong> In the Vedic tradition, a mentor (Guru) helps illuminate the path. Find someone who has walked a similar journey and learn from their experience.</p>`
      }
    },

    friend: {
      keywords: ['friend', 'betrayal', 'trust', 'betrayed', 'friendship', 'best friend', 'backstab', 'let me down'],
      dharma: {
        title: 'The Dharma of Sacred Bonds',
        body: `<p>Friendship holds a revered place in Indian wisdom traditions. The bond between Krishna and Sudama, Rama and Sugriva, Karna and Duryodhana - these stories reveal that true friendship is a spiritual bond, tested not in comfort but in crisis.</p>
        <p>When a friend betrays trust, it shakes our faith in human connection itself. But Dharma teaches us to separate the person's action from their essential nature. Even good souls sometimes act from fear or weakness.</p>`
      },
      karma: {
        title: 'Trust, Broken and Reborn',
        body: `<p>The karmic bond of friendship runs deep - often across lifetimes. A betrayal in friendship is rarely random; it is often a karmic lesson that both souls need. The question is not "why did they do this?" but "what is this teaching me?"</p>
        <p>Your response to betrayal creates powerful future karma. Choosing understanding over vengeance, boundaries over bitterness - these choices shape your destiny far more than the betrayal itself.</p>`
      },
      scripture: {
        title: 'Wisdom on Forgiveness',
        shloka: 'क्षमा धर्मः क्षमा सत्यं क्षमा यज्ञश्च पुत्रकाः',
        ref: 'Mahabharata, Vana Parva 29.4',
        body: `<p>"Forgiveness is dharma, forgiveness is truth, forgiveness is sacrifice, O children." Vidura's wisdom in the Mahabharata places Kshama (forgiveness) as the supreme virtue.</p>
        <p>This does not mean tolerating repeated harm. It means freeing yourself from the prison of resentment. Forgiveness and trust are different gifts - you can offer one without the other.</p>`
      },
      path: {
        title: 'Healing the Bond',
        body: `<p><strong>Allow yourself to grieve.</strong> Betrayal by a friend is a real loss. Honor the pain without suppressing it or being consumed by it.</p>
        <p><strong>Communicate before concluding.</strong> Sometimes what appears as betrayal has an unseen story. Speak directly, seek to understand before you judge.</p>
        <p><strong>Set boundaries with love.</strong> You can forgive someone and still change the terms of the relationship. Protecting yourself is also dharma. A boundary set with compassion serves both souls.</p>`
      }
    },

    anger: {
      keywords: ['anger', 'angry', 'revenge', 'hurt', 'furious', 'rage', 'mad', 'resentment', 'grudge', 'hate'],
      dharma: {
        title: 'Krodha - The Enemy Within',
        body: `<p>The Bhagavad Gita identifies Krodha (anger) as one of the three gates to self-destruction, alongside desire and greed. Anger clouds the intellect, destroys discernment, and leads to actions that create lasting harm.</p>
        <p>Yet Dharma does not ask you to suppress anger unnaturally. It asks you to understand its root. Often anger is a secondary emotion - beneath it lies hurt, fear, or a sense of injustice. Addressing the root dissolves the anger.</p>`
      },
      karma: {
        title: 'Breaking the Cycle of Harm',
        body: `<p>Anger met with anger creates an endless cycle of karmic bondage. The Mahabharata's great war itself was born from accumulated cycles of rage and revenge across generations.</p>
        <p>Every moment of restraint - choosing not to lash out - is a powerful karmic act. It breaks inherited patterns and liberates not just you, but future generations from the cycle of reactivity.</p>`
      },
      scripture: {
        title: 'Krishna\'s Warning',
        shloka: 'क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः',
        ref: 'Bhagavad Gita 2.63',
        body: `<p>"From anger arises delusion; from delusion, confusion of memory; from confusion of memory, destruction of intelligence; and from destruction of intelligence, one perishes." Krishna describes the precise chain reaction of unchecked anger.</p>
        <p>This is not punishment - it is a description of psychological reality, as relevant today as it was five thousand years ago.</p>`
      },
      path: {
        title: 'Transforming the Fire',
        body: `<p><strong>Pause before acting.</strong> The ancient practice is simple: when anger arises, do nothing for at least one full breath cycle. In that pause lives your freedom.</p>
        <p><strong>Channel the energy.</strong> Anger is raw power. Used wisely, it can fuel righteous action, creative work, or the courage to set boundaries. Destroyed, it fuels only destruction.</p>
        <p><strong>Practice Dhyana daily.</strong> Regular meditation builds the mental space between stimulus and response. Over time, anger loses its power to control you.</p>`
      }
    },

    cheat: {
      keywords: ['cheat', 'cheating', 'exam', 'shortcut', 'easy way', 'integrity', 'cut corners', 'plagiarism', 'copy'],
      dharma: {
        title: 'The Long Path of Righteousness',
        body: `<p>Dharma is not the shortcut - it is the enduring path. Every shortcut that compromises integrity is a step away from your true Self. The Upanishads describe the soul's journey as choosing between Shreyas (the good) and Preyas (the pleasant). Shortcuts are Preyas; dharmic effort is Shreyas.</p>
        <p>The discomfort of honest effort is temporary; the weight of a compromised conscience is lasting. Your character is not built in moments of ease but in moments of difficult choice.</p>`
      },
      karma: {
        title: 'The Hidden Cost of Shortcuts',
        body: `<p>Karmic law is precise: success built on dishonest foundations is inherently unstable. What is gained through adharma carries within it the mechanism of its own undoing.</p>
        <p>Conversely, knowledge and skills earned through genuine effort become permanent assets of the soul - they travel with you across lifetimes. No examination score is worth more than this.</p>`
      },
      scripture: {
        title: 'The Wisdom of Right Action',
        shloka: 'योगः कर्मसु कौशलम्',
        ref: 'Bhagavad Gita 2.50',
        body: `<p>"Yoga is skill in action." True excellence is not about getting results by any means - it is about performing actions with such skill and dedication that the results are a natural consequence of mastery.</p>
        <p>The student who genuinely learns may score lower today but carries wisdom forever. The one who cheats carries only anxiety and emptiness.</p>`
      },
      path: {
        title: 'Choosing the Higher Road',
        body: `<p><strong>Accept where you are.</strong> If you feel tempted to cheat, it may mean you need more preparation time. That's information, not failure. Use it wisely.</p>
        <p><strong>Redefine success.</strong> Authentic learning and genuine understanding are the true goals - not grades, certifications, or external markers. These outer symbols are meaningful only when backed by inner substance.</p>
        <p><strong>Build systems, not shortcuts.</strong> Develop study habits, seek help honestly, form study groups. The dharmic path has support structures - use them.</p>`
      }
    },

    help: {
      keywords: ['help', 'charity', 'donation', 'give', 'obligation', 'service', 'helping', 'volunteer', 'seva', 'poor', 'needy'],
      dharma: {
        title: 'Seva - The Path of Selfless Service',
        body: `<p>Seva (selfless service) is one of the most direct paths to spiritual growth in Sanatana Dharma. The Upanishads teach that the divine resides in every being - <em>"Tat Tvam Asi"</em> (Thou art That). Serving others is therefore serving the divine itself.</p>
        <p>True seva is performed without expectation of return - not even gratitude. It is not an obligation but a privilege, a recognition that we are all threads in the same sacred tapestry.</p>`
      },
      karma: {
        title: 'The Abundance of Giving',
        body: `<p>The karma of giving operates on a paradoxical principle: the more you give with a pure heart, the more the universe channels through you. This is not magical thinking - it is the natural consequence of becoming a conduit rather than a reservoir.</p>
        <p>However, giving from a sense of guilt or obligation creates different karma than giving from joy and abundance. Check your motivation: are you giving to feel good about yourself, or to genuinely serve?</p>`
      },
      scripture: {
        title: 'The Teaching on Giving',
        shloka: 'दातव्यमिति यद्दानं दीयतेऽनुपकारिणे',
        ref: 'Bhagavad Gita 17.20',
        body: `<p>"That gift which is given with the thought 'it is my duty to give,' to a worthy person who does nothing in return, at the right place and time - that is considered a Sattvic gift." Krishna classifies even generosity into three modes.</p>
        <p>The highest form of charity is that which is given without fanfare, to the right cause, at the right time, expecting nothing in return.</p>`
      },
      path: {
        title: 'Serving with Wisdom',
        body: `<p><strong>Give what you can authentically.</strong> Seva should not drain you - depleting yourself serves no one. Start with what feels sustainable and joyful.</p>
        <p><strong>Serve with presence, not just resources.</strong> Sometimes the greatest service is your attention, your time, your listening. Money is one form of giving; compassion is another.</p>
        <p><strong>Let go of the story.</strong> After giving, release the narrative. Don't keep a mental ledger of your generosity. True seva is an offering to the divine - it requires no bookkeeping.</p>`
      }
    },

    relationship: {
      keywords: ['relationship', 'love', 'breakup', 'partner', 'marriage', 'divorce', 'husband', 'wife', 'girlfriend', 'boyfriend'],
      dharma: {
        title: 'Grihastha Dharma - The Sacred Path of Relationships',
        body: `<p>In Vedic tradition, the householder's life (Grihastha Ashrama) is considered the most challenging yet most impactful stage of life. Relationships are not merely emotional bonds - they are spiritual partnerships designed for mutual evolution.</p>
        <p>When relationships face trials, Dharma invites us to look beyond personal satisfaction. The question shifts from "Am I happy?" to "Am I growing? Am I helping my partner grow? Are we aligned in dharma?"</p>`
      },
      karma: {
        title: 'Bonds Across Lifetimes',
        body: `<p>Vedic wisdom teaches that deep relationships - those that carry intense emotion, whether love or conflict - are karmic connections spanning multiple lifetimes. The people who affect us most deeply are often souls we have traveled with before.</p>
        <p>This perspective transforms how we view relationship challenges. Each difficulty is an opportunity to resolve karmic patterns, and each act of genuine love and sacrifice creates positive karma for both souls.</p>`
      },
      scripture: {
        title: 'On Love and Attachment',
        shloka: 'सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि',
        ref: 'Bhagavad Gita 6.29',
        body: `<p>"One who sees the Self in all beings, and all beings in the Self" - this verse points to the highest love, beyond attachment and possession. True love sees the divine in the beloved.</p>
        <p>Krishna teaches that clinging (rāga) is different from loving. When we love without clinging, we give our partner the freedom to be themselves - and that freedom is the soil where love truly grows.</p>`
      },
      path: {
        title: 'Nurturing Sacred Connection',
        body: `<p><strong>Communicate from the heart.</strong> Many relationship wounds stem from unspoken truths. Practice speaking with vulnerability and listening with genuine curiosity.</p>
        <p><strong>Distinguish love from attachment.</strong> Love wants the other person's highest good; attachment wants them to meet our expectations. Examine which force is driving your actions.</p>
        <p><strong>Seek shared dharma.</strong> The strongest relationships are those where both partners are aligned not just in attraction but in purpose, values, and spiritual aspiration.</p>`
      }
    },

    default: {
      dharma: {
        title: 'The Universal Framework of Dharma',
        body: `<p>Every situation in life can be viewed through the lens of Dharma - the cosmic order that sustains all of existence. When facing a dilemma, Dharma asks: "What action maintains harmony? What choice aligns with truth, compassion, and duty?"</p>
        <p>Dharma is not a rigid set of rules - it is a living intelligence that adapts to context. What is dharmic in one situation may not be in another. This is why the Gita says discernment (Viveka) is the foundation of right action.</p>`
      },
      karma: {
        title: 'Understanding Cause and Effect',
        body: `<p>Every action generates consequences - this is the inescapable law of Karma. But karma is not punishment; it is education. Every consequence is the universe offering you feedback, helping you refine your understanding of dharma.</p>
        <p>The most liberating aspect of karmic philosophy is this: your past actions brought you here, but your present choice determines where you go. You are never trapped. Every moment is an opportunity for course correction.</p>`
      },
      scripture: {
        title: 'Timeless Wisdom for Any Situation',
        shloka: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत',
        ref: 'Bhagavad Gita 4.7',
        body: `<p>"Whenever dharma declines and adharma rises, I manifest Myself." This profound verse assures us that the universe itself is designed to restore balance. Even in your personal life, when things feel chaotic, the forces of dharma are working toward restoration.</p>
        <p>Your own inner wisdom - your Antarātmā - is a direct connection to this restoring force. Trust it.</p>`
      },
      path: {
        title: 'A Framework for Any Dilemma',
        body: `<p><strong>Pause and center.</strong> Before deciding, find stillness. The right answer rarely comes from a reactive mind. Sit with the question in meditation, even briefly.</p>
        <p><strong>Apply the Dharma Test:</strong> Will this action cause unnecessary harm? Does it align with truth? Does it serve the greater good? Would I be comfortable if everyone I respect could see this choice?</p>
        <p><strong>Act, then release.</strong> Once you've made your dharmic choice, act with full commitment and then release attachment to the outcome. This is the essence of the Gita's teaching.</p>`
      }
    }
  };

  // --- Keyword Matching ---
  function findTemplate(input) {
    const lower = input.toLowerCase();
    let bestMatch = null;
    let bestScore = 0;

    for (const [key, template] of Object.entries(analysisTemplates)) {
      if (key === 'default') continue;
      const score = template.keywords.reduce((acc, kw) => {
        return acc + (lower.includes(kw) ? 1 : 0);
      }, 0);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = template;
      }
    }

    return bestMatch || analysisTemplates.default;
  }

  // --- Oracle Animation Statuses ---
  const oracleMessages = [
    { status: 'Consulting the ancient texts…', sub: 'Searching through the wisdom of the ages' },
    { status: 'Aligning the four perspectives…', sub: 'Dharma · Karma · Scripture · Path' },
    { status: 'The compass reveals its guidance…', sub: 'Your dharmic counsel is ready' }
  ];

  // --- Seek Guidance ---
  seekBtn.addEventListener('click', () => {
    const input = textarea.value.trim();
    if (input.length < 10) return;

    const template = findTemplate(input);

    // Hide input, show oracle
    inputSection.style.opacity = '0';
    inputSection.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      inputSection.style.display = 'none';
      oracleSection.classList.add('active');
      oracleSection.style.opacity = '0';
      requestAnimationFrame(() => {
        oracleSection.style.transition = 'opacity 0.6s ease';
        oracleSection.style.opacity = '1';
      });
    }, 400);

    // Cycle oracle messages
    let msgIndex = 0;
    oracleStatus.textContent = oracleMessages[0].status;
    oracleSubstatus.textContent = oracleMessages[0].sub;

    const msgInterval = setInterval(() => {
      msgIndex++;
      if (msgIndex < oracleMessages.length) {
        oracleStatus.style.opacity = '0';
        oracleSubstatus.style.opacity = '0';
        setTimeout(() => {
          oracleStatus.textContent = oracleMessages[msgIndex].status;
          oracleSubstatus.textContent = oracleMessages[msgIndex].sub;
          oracleStatus.style.opacity = '1';
          oracleSubstatus.style.opacity = '1';
        }, 300);
      }
    }, 1200);

    // After animation, show results
    setTimeout(() => {
      clearInterval(msgInterval);

      oracleSection.style.opacity = '0';
      setTimeout(() => {
        oracleSection.classList.remove('active');
        showResults(template, input);
      }, 400);
    }, 3200);
  });

  // --- Show Results ---
  function showResults(template, input) {
    // Set situation echo
    const truncated = input.length > 80 ? input.substring(0, 80) + '…' : input;
    situationEcho.textContent = `"${truncated}"`;

    // Populate panels
    const panels = [
      { el: document.getElementById('panelDharma'), data: template.dharma, type: 'dharma' },
      { el: document.getElementById('panelKarma'), data: template.karma, type: 'karma' },
      { el: document.getElementById('panelScripture'), data: template.scripture, type: 'scripture' },
      { el: document.getElementById('panelPath'), data: template.path, type: 'path' }
    ];

    panels.forEach(({ el, data }) => {
      el.querySelector('.panel-title').textContent = data.title;

      let bodyHTML = data.body;
      if (data.shloka) {
        bodyHTML = `<div class="panel-shloka">${data.shloka}<span class="panel-shloka-ref">- ${data.ref}</span></div>${bodyHTML}`;
      }
      el.querySelector('.panel-body').innerHTML = bodyHTML;
    });

    // Show results section
    resultsSection.classList.add('active');
    resultsSection.style.opacity = '0';
    requestAnimationFrame(() => {
      resultsSection.style.transition = 'opacity 0.6s ease';
      resultsSection.style.opacity = '1';
    });

    // Stagger panels
    resultPanels.forEach((panel, i) => {
      setTimeout(() => {
        panel.classList.add('visible');
      }, 200 + (i * 250));
    });

    // Scroll to results
    setTimeout(() => {
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }

  // --- Restart ---
  restartBtn.addEventListener('click', () => {
    // Hide results
    resultsSection.style.opacity = '0';
    setTimeout(() => {
      resultsSection.classList.remove('active');
      resultPanels.forEach(p => p.classList.remove('visible'));

      // Show input
      inputSection.style.display = '';
      requestAnimationFrame(() => {
        inputSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        inputSection.style.opacity = '1';
        inputSection.style.transform = 'translateY(0)';
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
  });

})();
