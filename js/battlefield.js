/* =============================================
   TATTVAM - Krishna's Battlefield - JavaScript
   Conflict Analysis & Battlefield Visualization
   ============================================= */

(function () {
  'use strict';

  // --- Conflict Templates ---
  const conflictTemplates = {
    exam: {
      keywords: ['upsc', 'exam', 'study', 'test', 'competitive', 'preparation', 'jee', 'neet', 'gate', 'board'],
      title: 'The Battle of Knowledge',
      allies: [
        { text: 'Your discipline and daily practice - the foundation no opponent can shake' },
        { text: 'The knowledge you have already gathered, a quiver full of arrows' },
        { text: 'Teachers and mentors who light the path like Dronacharya' },
        { text: 'Your family\'s faith and silent support - your Pandava army' }
      ],
      obstacles: [
        { text: 'The vast syllabus - an army stretching beyond the horizon' },
        { text: 'Fierce competition - millions of warriors on the same field' },
        { text: 'The relentless pressure of time - sand slipping through fingers' },
        { text: 'Doubt and comparison - the mind\'s own Shakuni playing dice' }
      ],
      fears: [
        { text: 'The fear of failure - "What if all this sacrifice is in vain?"' },
        { text: 'Disappointing those who believe in you - a weight heavier than any armor' },
        { text: 'Losing yourself in the race - forgetting why you started' }
      ],
      dharma: [
        { text: 'Your dharma is the effort itself, not the result on a marksheet' },
        { text: 'A warrior who has given everything has already won, regardless of outcome' },
        { text: 'Knowledge pursued with sincerity is never wasted - it is eternal wealth' }
      ],
      shloka: {
        sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
        transliteration: 'karmaṇy evādhikāras te mā phaleṣu kadācana\nmā karma-phala-hetur bhūr mā te saṅgo \'stv akarmaṇi',
        translation: 'You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, and never be attached to inaction.',
        reference: 'Bhagavad Gita 2.47'
      },
      guidance: {
        principle: 'Krishna\'s core teaching to Arjuna was Nishkama Karma - action without attachment to results. This is not about not caring; it is about channeling every ounce of your being into the effort while releasing the anxiety of outcomes.',
        story: 'Even Arjuna, the greatest archer of his age, trembled before the battle. His hands shook, his bow slipped. It was not weakness - it was the weight of attachment to results. When Krishna spoke, He didn\'t promise victory. He promised that righteous action itself is the victory.',
        application: 'Your examination is your Kurukshetra. Each day of preparation is a battle won. Detach from the date on the calendar and attach yourself to the hour in front of you. Study not to "crack" the exam, but to truly understand. The warrior who fights for the love of dharma fights better than one who fights for the crown.',
        actionStep: 'Tonight, study for one hour with complete presence - no phone, no timer anxiety, no thoughts of results. Just you and the knowledge. That is your first arrow released.'
      }
    },

    career: {
      keywords: ['job', 'career', 'passion', 'dream', 'salary', 'resign', 'startup', 'business', 'corporate', 'work'],
      title: 'The Battle of Purpose',
      allies: [
        { text: 'Your unique skills and talents - gifts no one else possesses in the same way' },
        { text: 'The fire of passion - a flame that refuses to die despite the wind' },
        { text: 'Your youth and energy - a warrior\'s greatest weapon is time' },
        { text: 'Every experience so far - each has forged the steel of your sword' }
      ],
      obstacles: [
        { text: 'Financial pressure - the weight of responsibilities and EMIs' },
        { text: 'Societal expectations - "log kya kahenge" is its own battlefield' },
        { text: 'The golden handcuffs of comfort - the known versus the unknown' },
        { text: 'The gap between where you are and where you wish to be' }
      ],
      fears: [
        { text: 'The fear of instability - "What if I fall and cannot rise?"' },
        { text: 'The fear of regret - choosing wrong and losing irreversible time' },
        { text: 'The fear of mediocrity - ending up neither here nor there' }
      ],
      dharma: [
        { text: 'Follow your svadharma - better to walk your own path imperfectly than someone else\'s perfectly' },
        { text: 'Your dharma is not decided by salary packages but by what makes your soul grow' },
        { text: 'Dharma asks: "What can you give?" not "What can you get?"' }
      ],
      shloka: {
        sanskrit: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥',
        transliteration: 'śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt\nsva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ',
        translation: 'It is far better to perform one\'s natural prescribed duty, though tinged with faults, than to perform another\'s prescribed duty, though perfectly. It is better to die doing one\'s own duty; another\'s duty is fraught with danger.',
        reference: 'Bhagavad Gita 3.35'
      },
      guidance: {
        principle: 'Krishna speaks of Svadharma - your own intrinsic nature and calling. The universe designed you with a specific purpose. Fighting against it brings success on paper but emptiness within; aligning with it brings struggle but profound fulfillment.',
        story: 'Arjuna was born a Kshatriya - a warrior. Before the battle, he wished to become a renunciate, to abandon the fight and live peacefully. Krishna reminded him: running from your nature does not bring peace. A fish out of water does not find freedom - it finds suffocation.',
        application: 'Your passion is not a luxury - it is a signal from your deepest self about where you belong. This doesn\'t mean reckless leaps. Even Arjuna prepared for years before entering Kurukshetra. Build your bridge while walking on it. Start with one hour a day dedicated to your true calling.',
        actionStep: 'This week, dedicate just 30 minutes each evening to your passion - not to monetize it, but to reconnect with it. Let the work speak to you before you make it speak for you.'
      }
    },

    family: {
      keywords: ['parents', 'family', 'expectations', 'pressure', 'arranged', 'generation', 'tradition', 'mother', 'father', 'papa', 'mummy'],
      title: 'The Battle of Bonds',
      allies: [
        { text: 'The unconditional love your family holds - even when it feels like pressure' },
        { text: 'Your roots and cultural wisdom - a foundation centuries deep' },
        { text: 'The capacity to see both sides - empathy is the warrior\'s rarest gift' },
        { text: 'Time - the great healer and bridge-builder between generations' }
      ],
      obstacles: [
        { text: 'Differing visions of success - two maps pointing to different destinations' },
        { text: 'The weight of guilt - honoring yourself can feel like dishonoring them' },
        { text: 'Communication barriers - love that doesn\'t know how to express itself' },
        { text: 'Generational patterns - scripts written long before you were born' }
      ],
      fears: [
        { text: 'Disappointing those who sacrificed everything for you' },
        { text: 'Losing love and belonging if you choose your own path' },
        { text: 'The fear that you might be wrong, and they might be right' }
      ],
      dharma: [
        { text: 'Honor your parents with gratitude while honoring your soul with truth' },
        { text: 'True devotion to family is not blind obedience - it is becoming the best version of yourself' },
        { text: 'Love expressed through control is still love; respond with patience, not rebellion' }
      ],
      shloka: {
        sanskrit: 'स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि ।\nधर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य न विद्यते ॥',
        transliteration: 'sva-dharmam api cāvekṣya na vikampitum arhasi\ndharmyād dhi yuddhāc chreyo \'nyat kṣatriyasya na vidyate',
        translation: 'Considering your specific duty as well, you should not waver, for there is nothing better for a warrior than a righteous battle.',
        reference: 'Bhagavad Gita 18.47'
      },
      guidance: {
        principle: 'Krishna teaches that dharma is contextual - it considers relationships, duties, and the larger good. Your duty to parents and your duty to yourself are not opposing armies; they are two flanks of the same force. The wisdom lies in finding where they march together.',
        story: 'Even Lord Rama, the embodiment of duty, had to walk a path that confused everyone around him. He went to exile to honor his father\'s word, yet he also followed his own dharma as a protector. The key was: he never acted from anger or rebellion. He acted from love and clarity.',
        application: 'Have the conversation you\'ve been avoiding - not as a confrontation, but as a sharing. Let your parents see your vision through your eyes. Show them not just what you want to do, but who you want to become. Most parents resist the unknown; help them see the known within your dream.',
        actionStep: 'Write a letter to your parents (you don\'t have to send it). Pour your heart out - your dreams, your gratitude, your fears. Reading it back, you\'ll find the words for a real conversation.'
      }
    },

    relationship: {
      keywords: ['relationship', 'love', 'marriage', 'partner', 'breakup', 'dating', 'commitment', 'trust', 'boyfriend', 'girlfriend', 'spouse'],
      title: 'The Battle of the Heart',
      allies: [
        { text: 'The genuine emotional connection you share - a bond forged in truth' },
        { text: 'Your capacity for growth and change - love is a verb, not a noun' },
        { text: 'Shared memories and experiences - the foundation stones already laid' },
        { text: 'Self-awareness - knowing what you need is the first step to giving what\'s needed' }
      ],
      obstacles: [
        { text: 'Differences in values or life direction - two rivers seeking different oceans' },
        { text: 'External pressures - family opinions, societal timelines, comparisons' },
        { text: 'Past wounds that haven\'t fully healed - scars that ache in the rain' },
        { text: 'The ego\'s need to be right versus the heart\'s need to be at peace' }
      ],
      fears: [
        { text: 'The fear of vulnerability - to love deeply is to risk deeply' },
        { text: 'The fear of loss - "What if I lose myself, or lose them?"' },
        { text: 'The fear of settling or of asking for too much' }
      ],
      dharma: [
        { text: 'Dharmic love is selfless - it asks "What can I give?" before "What am I getting?"' },
        { text: 'Love rooted in attachment brings suffering; love rooted in freedom brings joy' },
        { text: 'Your dharma is to be whole within yourself first, then share that wholeness' }
      ],
      shloka: {
        sanskrit: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥',
        transliteration: 'adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca\nnirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī',
        translation: 'One who is free from hatred toward all beings, friendly and compassionate, free from possessiveness and ego, equal in joy and sorrow, and forgiving - such a person is dear to Me.',
        reference: 'Bhagavad Gita 12.13'
      },
      guidance: {
        principle: 'Krishna describes the ideal devotee - and in doing so, describes the ideal lover. True love in the dharmic tradition is not transactional. It is prema - unconditional, patient, and free from the need to possess.',
        story: 'Consider Radha and Krishna themselves - their love was not about ownership. Radha never tried to cage Krishna, nor did Krishna make promises of permanence. Yet their love became eternal precisely because it was free. They loved the essence, not the form.',
        application: 'Before asking "Is this the right person?", ask "Am I being the right person?" Love is a mirror - what you bring to it is reflected back. If the relationship brings growth, even through pain, it has dharmic value. If it diminishes who you are, that is not love - it is attachment wearing love\'s mask.',
        actionStep: 'Today, perform one act of selfless love - without expecting acknowledgment. A kind word, a moment of genuine listening, forgiveness for a small slight. Observe how it changes the energy between you.'
      }
    },

    truth: {
      keywords: ['truth', 'honest', 'speak', 'lie', 'hiding', 'secret', 'confront', 'silence', 'voice', 'stand'],
      title: 'The Battle of Truth',
      allies: [
        { text: 'Your integrity - the inner compass that never rusts' },
        { text: 'Self-respect - the quiet armor that no insult can pierce' },
        { text: 'The relief that truth brings - a burden lifted from the soul' },
        { text: 'Those who value authenticity - your true allies will stand with you' }
      ],
      obstacles: [
        { text: 'Consequences - the real-world fallout of speaking what\'s real' },
        { text: 'The comfort of silence - not speaking is easier than speaking' },
        { text: 'Others\' emotional reactions - you cannot control how truth lands' },
        { text: 'The complexity of truth - sometimes there are multiple truths' }
      ],
      fears: [
        { text: 'Rejection - "What if they cannot handle my truth?"' },
        { text: 'Isolation - "What if speaking up means standing alone?"' },
        { text: 'The irreversibility of words once spoken' }
      ],
      dharma: [
        { text: 'Satya (truth) is the highest dharma - but it must be spoken with compassion' },
        { text: 'Silence in the face of injustice is its own form of untruth' },
        { text: 'Dharma asks for "priya satya" - truth that is both honest and kind' }
      ],
      shloka: {
        sanskrit: 'अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः ।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ॥',
        transliteration: 'abhayaṁ sattva-saṁśuddhir jñāna-yoga-vyavasthitiḥ\ndānaṁ damaś ca yajñaś ca svādhyāyas tapa ārjavam',
        translation: 'Fearlessness, purity of heart, steadfastness in knowledge and yoga, charity, self-control, sacrifice, study of scriptures, austerity, and straightforwardness - these are the divine qualities.',
        reference: 'Bhagavad Gita 16.1-3'
      },
      guidance: {
        principle: 'Krishna lists "abhayam" (fearlessness) as the very first divine quality. Truth and courage are inseparable - you cannot have one without the other. But He also teaches "ārjavam" - straightforwardness tempered with wisdom.',
        story: 'In the Mahabharata, Yudhishthira was known as Dharmaraja - the king of righteousness. Yet even he had to learn that truth without context is a weapon, and truth with compassion is a balm. The dharma of truth is not "say everything you think" - it is "speak what will serve the highest good."',
        application: 'Before you speak, pass your words through three gates: Is it true? Is it necessary? Is it kind? You don\'t need to check all three every time - sometimes truth that is necessary but unkind still must be spoken. But always check the first gate: truth.',
        actionStep: 'Identify one truth you\'ve been holding back. Write it down. Then write the most compassionate way to express it. Carry that note for a day - you\'ll know when the moment is right.'
      }
    },

    abroad: {
      keywords: ['abroad', 'move', 'home', 'country', 'overseas', 'immigration', 'leaving', 'settle', 'foreign', 'distant'],
      title: 'The Battle of Belonging',
      allies: [
        { text: 'New opportunities for growth - a bigger stage for your potential' },
        { text: 'The courage to step into the unknown - a warrior\'s mark of distinction' },
        { text: 'Technology that keeps hearts connected across oceans' },
        { text: 'The chance to become a bridge between cultures and worlds' }
      ],
      obstacles: [
        { text: 'Physical distance from parents, traditions, and familiar ground' },
        { text: 'Cultural loneliness - being "from there" but living "here"' },
        { text: 'The financial and emotional cost of constant transition' },
        { text: 'Guilt - living your life while your family lives without you nearby' }
      ],
      fears: [
        { text: 'Missing irreversible moments - a parent\'s aging, a sibling\'s wedding' },
        { text: 'Losing your roots - becoming neither fully here nor there' },
        { text: 'The loneliness of building a life from zero in a foreign land' }
      ],
      dharma: [
        { text: 'Dharma knows no geography - you can serve your purpose from anywhere' },
        { text: 'True devotion to your roots is carrying their values wherever you go' },
        { text: 'Growth sometimes requires the tree to spread its branches far from the trunk' }
      ],
      shloka: {
        sanskrit: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥',
        transliteration: 'ananyāś cintayanto māṁ ye janāḥ paryupāsate\nteṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham',
        translation: 'To those who worship Me with devotion, meditating on My transcendental form - to them, I carry what they lack and preserve what they have.',
        reference: 'Bhagavad Gita 9.22'
      },
      guidance: {
        principle: 'Krishna assures that those who move forward with devotion and purpose will be taken care of. This is not a promise of comfort - it is a promise of support on the right path. The universe meets the sincere traveler halfway.',
        story: 'Hanuman crossed an entire ocean to serve his purpose. He didn\'t lose his identity - he carried Ram in his heart across the waters. Your journey abroad is your ocean to cross. What matters is not where your feet stand, but where your heart resides.',
        application: 'Home is not a pin on a map - it is a frequency of the heart. You can honor your parents from across the world through your conduct, your success, and your values. The greatest gift you can give your family is not proximity - it is becoming someone they can be proud of.',
        actionStep: 'Call home today - not because you need anything, but to share a genuine moment. Ask your parents about their day, their health, their small joys. Connection is a practice, not a location.'
      }
    },

    forgive: {
      keywords: ['forgive', 'betrayal', 'hurt', 'pain', 'revenge', 'anger', 'resentment', 'grudge', 'wound', 'cheat'],
      title: 'The Battle of Grace',
      allies: [
        { text: 'Your inner strength - the very fact that you\'re standing means you haven\'t been broken' },
        { text: 'The possibility of peace - a future free from the weight of resentment' },
        { text: 'Wisdom gained through suffering - you now see what others cannot' },
        { text: 'Time\'s gentle hand - it doesn\'t erase, but it does soften' }
      ],
      obstacles: [
        { text: 'The depth of the wound - some cuts reach the bone' },
        { text: 'Broken trust - the hardest structure to rebuild' },
        { text: 'The mind\'s replay - memories that ambush without warning' },
        { text: 'Confusing forgiveness with condoning - they are not the same' }
      ],
      fears: [
        { text: 'Being hurt again - "If I forgive, am I opening the door to more pain?"' },
        { text: 'Appearing weak - "Will they think they got away with it?"' },
        { text: 'Losing the protective anger - "Without it, what shields me?"' }
      ],
      dharma: [
        { text: 'Kshama (forgiveness) is not weakness - it is the strength of one who has transcended' },
        { text: 'Forgiveness frees the forgiver, not the forgiven - it is a gift to yourself' },
        { text: 'Dharma does not demand you forget or reconcile - only that you release the poison' }
      ],
      shloka: {
        sanskrit: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥\nसन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः ।\nमय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः ॥',
        transliteration: 'adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca\nnirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī\nsantuṣṭaḥ satataṁ yogī yatātmā dṛḍha-niścayaḥ\nmayy arpita-mano-buddhir yo mad-bhaktaḥ sa me priyaḥ',
        translation: 'One who is free from hatred toward all beings, friendly and compassionate, without possessiveness and ego, equal in joy and sorrow, and ever forgiving - such a self-controlled yogi of firm resolve, whose mind and intellect are offered to Me, is very dear to Me.',
        reference: 'Bhagavad Gita 12.13-14'
      },
      guidance: {
        principle: 'Krishna places "kṣamī" - the forgiving one - among the qualities dearest to the Divine. Forgiveness in the Vedantic tradition is not a social nicety; it is a spiritual superpower. It is the ability to process fire without being consumed by it.',
        story: 'In the Mahabharata, even after years of humiliation, exile, and injustice, Yudhishthira was called Dharmaraja because he could hold compassion for his enemies. When Ashwatthama committed the most unforgivable act - killing children in sleep - the dharma of response was still measured, not vengeful.',
        application: 'Forgiveness is not an event - it is a process. You do not have to forgive all at once. You do not have to tell the person who hurt you. Forgiveness is an internal act: it is choosing, day by day, to stop carrying the burden. The anger was useful once - it protected you. But carried too long, it poisons the carrier, not the cause.',
        actionStep: 'Write what happened and how it made you feel on a piece of paper. Read it once. Then fold it and put it away somewhere you won\'t see daily. This is symbolic - you are not erasing the event but choosing not to carry it in your hands anymore.'
      }
    },

    default: {
      keywords: [],
      title: 'The Warrior\'s Dilemma',
      allies: [
        { text: 'Your awareness of the conflict - the unexamined life doesn\'t seek answers' },
        { text: 'Your inner resilience - you have survived every difficult day so far' },
        { text: 'The wisdom traditions that light the path - you are not the first to face this' },
        { text: 'The courage to stand at the crossroads and ask "Which way?"' }
      ],
      obstacles: [
        { text: 'Uncertainty - the fog of not knowing what lies ahead' },
        { text: 'Conflicting values pulling in different directions' },
        { text: 'The paralysis of overthinking - analysis without action' },
        { text: 'External noise drowning out your inner voice' }
      ],
      fears: [
        { text: 'Making the wrong choice and living with permanent regret' },
        { text: 'The fear that you are not strong enough for what lies ahead' },
        { text: 'Losing something precious no matter which path you choose' }
      ],
      dharma: [
        { text: 'Every warrior must fight their own battle - no one else can lift your bow' },
        { text: 'Dharma does not promise easy answers, only right ones' },
        { text: 'Action in the face of uncertainty is itself an act of faith' }
      ],
      shloka: {
        sanskrit: 'क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते ।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ॥',
        transliteration: 'klaibyaṁ mā sma gamaḥ pārtha naitat tvayy upapadyate\nkṣudraṁ hṛdaya-daurbalyaṁ tyaktvottiṣṭha parantapa',
        translation: 'Do not yield to this degrading weakness of heart, O Arjuna. It does not become you. Give up such petty faint-heartedness and arise, O scorcher of enemies!',
        reference: 'Bhagavad Gita 2.3'
      },
      guidance: {
        principle: 'These are Krishna\'s very first words of counsel to Arjuna - before philosophy, before cosmic visions, before the Song itself. He begins with this: "Stand up." The greatest spiritual teaching starts not with meditation but with the refusal to collapse.',
        story: 'Arjuna - the peerless warrior, winner of divine weapons, hero of a thousand battles - sat down in his chariot and wept. His bow slipped from his hands. His body trembled. And Krishna, the Lord of the Universe, did not offer a hug. He offered a command: "This weakness is beneath you. Rise."',
        application: 'Whatever your battle is, the first step is the same: stop sitting in the chariot of indecision. You have more strength than you know. The very fact that you are wrestling with this dilemma means you care deeply - and caring deeply is not weakness. It is the raw material of dharmic action.',
        actionStep: 'Make one small decision today that you\'ve been postponing. Not the final decision - just one step. Send that message. Open that book. Have that conversation. Movement breaks paralysis.'
      }
    }
  };

  // --- DOM Elements ---
  const heroContent = document.getElementById('heroContent');
  const conflictInput = document.getElementById('conflictInput');
  const submitBtn = document.getElementById('submitBtn');
  const loadingSection = document.getElementById('loadingSection');
  const resultSection = document.getElementById('resultSection');
  const chips = document.querySelectorAll('.conflict-chip');

  // --- Chip Click Handlers ---
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      conflictInput.value = chip.dataset.conflict;
      conflictInput.focus();
      conflictInput.style.height = 'auto';
      conflictInput.style.height = conflictInput.scrollHeight + 'px';
    });
  });

  // Auto-resize textarea
  conflictInput.addEventListener('input', () => {
    conflictInput.style.height = 'auto';
    conflictInput.style.height = Math.max(160, conflictInput.scrollHeight) + 'px';
  });

  // --- Match Conflict to Template ---
  function matchConflict(text) {
    const lower = text.toLowerCase();
    for (const [key, template] of Object.entries(conflictTemplates)) {
      if (key === 'default') continue;
      if (template.keywords.some(kw => lower.includes(kw))) {
        return template;
      }
    }
    return conflictTemplates.default;
  }

  // --- Submit Handler ---
  submitBtn.addEventListener('click', handleSubmit);
  conflictInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  });

  function handleSubmit() {
    const text = conflictInput.value.trim();
    if (!text) {
      conflictInput.classList.add('shake');
      setTimeout(() => conflictInput.classList.remove('shake'), 500);
      return;
    }

    submitBtn.disabled = true;
    const template = matchConflict(text);

    // Phase 1: Hide input
    heroContent.classList.add('hidden');

    // Phase 2: Show loading
    setTimeout(() => {
      loadingSection.classList.add('active');
      runLoadingSequence(() => {
        // Phase 3: Build & show battlefield
        loadingSection.classList.remove('active');
        buildBattlefield(text, template);
      });
    }, 600);
  }

  // --- Loading Sequence ---
  function runLoadingSequence(callback) {
    const steps = document.querySelectorAll('.loading-step');
    const messages = [
      'Reading your conflict…',
      'Mapping the battlefield…',
      'Identifying your allies…',
      'Revealing your obstacles…',
      'Summoning Krishna\'s counsel…'
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < steps.length) {
        steps[i].classList.add('visible');
        if (i > 0) steps[i - 1].classList.add('completed');
        i++;
      } else {
        clearInterval(interval);
        if (steps.length > 0) steps[steps.length - 1].classList.add('completed');
        setTimeout(callback, 600);
      }
    }, 700);
  }

  // --- Build Battlefield ---
  function buildBattlefield(userText, template) {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Set conflict title
    document.getElementById('battlefieldTitle').textContent = template.title;
    document.getElementById('conflictSubtitle').textContent = `"${userText}"`;

    // Build panels
    buildPanel('alliesList', template.allies);
    buildPanel('obstaclesList', template.obstacles);
    buildPanel('fearsList', template.fears);
    buildPanel('dharmaList', template.dharma);
    document.getElementById('conflictText').textContent = userText;

    // Build guidance
    const shloka = template.shloka;
    document.getElementById('verseSanskrit').textContent = shloka.sanskrit;
    document.getElementById('verseTransliteration').textContent = shloka.transliteration;
    document.getElementById('verseTranslation').textContent = shloka.translation;
    document.getElementById('verseReference').textContent = shloka.reference;

    document.getElementById('guidancePrinciple').textContent = template.guidance.principle;
    document.getElementById('guidanceStory').textContent = template.guidance.story;
    document.getElementById('guidanceApplication').textContent = template.guidance.application;
    document.getElementById('guidanceAction').textContent = template.guidance.actionStep;

    // Show result section
    resultSection.classList.add('active');

    // Animate panels with staggered delays
    setTimeout(() => {
      const panels = document.querySelectorAll('.battlefield-panel');
      panels.forEach((panel, index) => {
        setTimeout(() => {
          panel.classList.add('visible');
        }, index * 300);
      });

      // Show guidance after all panels
      setTimeout(() => {
        document.querySelector('.battlefield-guidance').classList.add('visible');
      }, panels.length * 300 + 500);

      // Show reset button
      setTimeout(() => {
        document.querySelector('.battlefield-reset').classList.add('visible');
      }, panels.length * 300 + 800);
    }, 200);
  }

  function buildPanel(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    items.forEach(item => {
      const div = document.createElement('div');
      div.className = 'panel-list-item';
      div.innerHTML = `<span class="item-marker"></span><span>${item.text}</span>`;
      container.appendChild(div);
    });
  }

  // --- Reset / Try Another ---
  document.getElementById('resetBtn')?.addEventListener('click', () => {
    // Hide result
    resultSection.classList.remove('active');
    document.querySelectorAll('.battlefield-panel').forEach(p => p.classList.remove('visible'));
    document.querySelector('.battlefield-guidance').classList.remove('visible');
    document.querySelector('.battlefield-reset').classList.remove('visible');

    // Reset input
    conflictInput.value = '';
    submitBtn.disabled = false;

    // Show hero
    setTimeout(() => {
      heroContent.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  });

  // --- Navigation ---
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

  // --- Scroll Reveal ---
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));

})();
