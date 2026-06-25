/* =============================================
   KRISHNA AI GUIDE - Response Logic
   Keyword-mapped spiritual guidance engine
   ============================================= */

const KRISHNA_RESPONSES = [
  {
    keywords: ['fear', 'scared', 'afraid', 'failure', 'fail', 'terrified', 'frightened', 'worry about failing'],
    emotion: '🍂 Sensing Fear',
    greeting: 'Dear one, I see the trembling in your heart. Fear is but a shadow - it exists only where the light of wisdom has not yet reached.',
    principle: 'Nishkama Karma - Act without attachment to results. Your right is to action alone, never to its fruits.',
    principleName: 'Dharmic Principle',
    shloka: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
    shlokaTranslation: '"You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, and never be attached to inaction."',
    shlokaRef: 'Bhagavad Gita 2.47',
    story: 'Remember Arjuna at Kurukshetra. The greatest warrior of his age stood paralyzed, his Gandiva slipping from his trembling hands. He saw teachers, grandfathers, friends on the opposing side and was consumed by fear of consequences. But I reminded him - the fear was not about the battle, it was about outcomes he could not control. When he finally surrendered to his dharma and focused on the act itself, the fear dissolved like mist at dawn.',
    actions: [
      'Write down the specific fear. Name it precisely - unnamed fears grow in darkness.',
      'Ask yourself: "What is my duty in this moment, regardless of outcome?" Then do only that.',
      'Each morning, take one small action toward the thing you fear. Courage is not absence of fear, but action despite it.',
      'Before sleep, release tomorrow\'s outcomes with this thought: "I will do my part; the universe will do the rest."'
    ]
  },
  {
    keywords: ['anger', 'angry', 'rage', 'furious', 'frustrated', 'irritated', 'mad', 'temper'],
    emotion: '🔥 Sensing Anger',
    greeting: 'I hear the fire within you, dear one. Anger is energy - powerful, consuming. But uncontrolled fire burns the one who holds it.',
    principle: 'Krodha Vijaya - Mastery over anger through awareness. Anger clouds judgment, leading to delusion and destruction of wisdom.',
    principleName: 'Dharmic Principle',
    shloka: 'क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः ।\nस्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति ॥',
    shlokaTranslation: '"From anger arises delusion; from delusion, confusion of memory; from confusion of memory, loss of reason; and from loss of reason, one is utterly ruined."',
    shlokaRef: 'Bhagavad Gita 2.63',
    story: 'Consider Bhima, the mighty Pandava. His anger was legendary - it could shake the earth. When Dushasana humiliated Draupadi, Bhima\'s rage could have consumed everything. But it was channeled anger, governed by dharma and patience, that ultimately served justice. He waited years, endured exile, and when the time was right, his strength served a greater purpose. The lesson: anger is not your enemy - unconscious anger is.',
    actions: [
      'When anger rises, pause. Take 10 slow breaths and observe the anger as a witness - don\'t become it.',
      'Ask: "Is this anger showing me a boundary that was crossed, or a wound that needs healing?"',
      'Channel the energy: write fiercely, exercise vigorously, create something. Transform the fire into fuel.',
      'Practice Pratipaksha Bhavana - when anger arises toward someone, deliberately think of one good quality they possess.'
    ]
  },
  {
    keywords: ['lost', 'purpose', 'meaning', 'direction', 'confused about life', 'don\'t know what to do', 'what should i do', 'no purpose', 'meaningless', 'pointless'],
    emotion: '🧭 Sensing Confusion',
    greeting: 'Dear seeker, feeling lost is not a sign of weakness - it is the soul\'s way of telling you that you have outgrown an old path and a new one awaits.',
    principle: 'Svadharma - Your own unique nature and duty. It is better to walk your own path imperfectly than to walk another\'s perfectly.',
    principleName: 'Dharmic Principle',
    shloka: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥',
    shlokaTranslation: '"It is far better to perform one\'s own dharma, even imperfectly, than to perform another\'s dharma perfectly. Destruction in the course of one\'s own dharma is better, for following another\'s path is dangerous."',
    shlokaRef: 'Bhagavad Gita 3.35',
    story: 'Arjuna himself faced this very crisis. Born a Kshatriya, trained as a warrior all his life, yet at the crucial moment, he wanted to become a renunciate, a monk. He wanted someone else\'s dharma. I had to remind him - you are not meant to be Bhishma, or Drona, or a forest hermit. You are Arjuna. Your path is yours alone. When he accepted his svadharma - not what society said, not what fear dictated, but what his deepest nature called for - clarity returned like sunlight after a storm.',
    actions: [
      'Sit quietly and ask: "What activities make me lose track of time? What would I do even without reward?" These are signals of your svadharma.',
      'List three moments in life when you felt most alive and authentic. Find the common thread.',
      'Stop comparing your Chapter 1 to someone else\'s Chapter 20. Your path has its own sacred timing.',
      'Take one experimental step today - try something that calls to you, without needing to commit forever.'
    ]
  },
  {
    keywords: ['jealous', 'jealousy', 'comparison', 'compare', 'envy', 'envious', 'why do others', 'everyone else', 'not fair', 'they have'],
    emotion: '🪞 Sensing Comparison',
    greeting: 'Ah, the mirror of comparison - it shows you distorted reflections, dear one. You are measuring your inner world against someone else\'s outer display.',
    principle: 'Sama-Buddhi - Equal-mindedness. The wise see the same divine essence in all, and understand that each soul walks its own unique journey.',
    principleName: 'Dharmic Principle',
    shloka: 'सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु ।\nसाधुष्वपि च पापेषु समबुद्धिर्विशिष्यते ॥',
    shlokaTranslation: '"One who is equal-minded among friends, companions, enemies, neutrals, arbiters, the hateful, relatives, saints, and sinners - that person is distinguished among all."',
    shlokaRef: 'Bhagavad Gita 6.9',
    story: 'Duryodhana had everything - a kingdom, wealth, power, a hundred brothers. Yet his jealousy of the Pandavas consumed him entirely. He could not bear that Yudhishthira was more virtuous, that Arjuna was more skilled, that their humble hall at Indraprastha was grander. This burning envy didn\'t motivate him - it blinded him. It led him to cheat at dice, to humiliate Draupadi, and ultimately to destroy himself and his entire lineage. Comparison was the seed of his ruin.',
    actions: [
      'When envy arises, bless the person instead. Say: "May their success grow" - this breaks the scarcity mindset.',
      'Write your own "abundance list" - 10 things in your life that someone else would deeply wish for.',
      'Unfollow or mute accounts that trigger comparison. Protect your inner peace like sacred space.',
      'Remember: the flower does not compete with the flower next to it. It simply blooms.'
    ]
  },
  {
    keywords: ['grief', 'loss', 'sad', 'sadness', 'heartbreak', 'breakup', 'death of', 'someone died', 'miss', 'mourning', 'depressed', 'heartbroken', 'lonely'],
    emotion: '💧 Sensing Grief',
    greeting: 'Dear one, your grief speaks of a love so deep that its absence creates an ocean of pain. I do not ask you to stop grieving - I ask you to understand what you grieve.',
    principle: 'Atman Nitya - The eternal soul. The body perishes, but the soul is never born and never dies. What is truly yours can never be taken.',
    principleName: 'Dharmic Principle',
    shloka: 'न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः ।\nअजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे ॥',
    shlokaTranslation: '"The soul is never born, nor does it ever die. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain."',
    shlokaRef: 'Bhagavad Gita 2.20',
    story: 'When Lord Rama was exiled from Ayodhya for fourteen years, his father King Dasharatha died of grief - unable to bear the separation. Rama himself faced unimaginable loss: his father\'s death, years of exile, and later the abduction of Sita. Yet Rama did not deny his grief. He wept, he mourned, he felt every ounce of pain. But he also continued to walk his path, to do his duty, to love deeply despite knowing that loss is woven into every mortal bond. His grief did not diminish him - it deepened his compassion.',
    actions: [
      'Allow yourself to grieve fully. Set aside time to feel - cry, write, speak to the person or situation in a letter.',
      'Hold something they gave you or a memory you cherish. Let gratitude live alongside the grief.',
      'Grief is love with nowhere to go. Channel it - volunteer, create, help someone who is also suffering.',
      'Know this truth: the connections of the soul transcend time and form. What was real between you remains real.'
    ]
  },
  {
    keywords: ['relationship', 'love', 'friend', 'friendship', 'partner', 'marriage', 'family', 'parents', 'people'],
    emotion: '💛 Sensing Connection',
    greeting: 'Relationships are the most sacred mirrors life offers us, dear one. Through others, we discover ourselves.',
    principle: 'Prema Dharma - Love as spiritual practice. True relationships are rooted in selfless love, patience, and seeing the divine in the other.',
    principleName: 'Dharmic Principle',
    shloka: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।\nनिर्ममो निरहंकारः समदुःखसुखः क्षमी ॥',
    shlokaTranslation: '"One who is free from malice toward all beings, who is friendly and compassionate, free from possessiveness and ego, equal in joy and sorrow, and forgiving - such a one is dear to Me."',
    shlokaRef: 'Bhagavad Gita 12.13',
    story: 'Consider the friendship between Arjuna and myself. I was his charioteer, his guide, his friend. I did not fight his battles for him - I gave him the wisdom to fight his own. True friendship is not about saving each other from life\'s difficulties, but standing together within them. I told Arjuna hard truths he did not want to hear, because love sometimes wears the face of honesty, not comfort.',
    actions: [
      'In your closest relationship, ask: "Am I loving this person as they need, or as I want to give?"',
      'Practice listening without preparing your response. True presence is the greatest gift you can offer.',
      'Where there is friction, ask: "What is this person teaching me about myself?"',
      'Express appreciation today - write a note, make a call, offer your undivided time.'
    ]
  },
  {
    keywords: ['discipline', 'lazy', 'procrastinate', 'procrastination', 'motivation', 'consistent', 'consistency', 'habit', 'willpower', 'distracted', 'focus'],
    emotion: '⚡ Sensing Stagnation',
    greeting: 'Dear one, the gap between who you are and who you wish to become is bridged not by grand gestures, but by the small, consistent steps you take each day.',
    principle: 'Atma Uddhareth - Elevate yourself by yourself. You are your own best friend and your own worst enemy. The choice is made daily.',
    principleName: 'Dharmic Principle',
    shloka: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥',
    shlokaTranslation: '"One must elevate oneself by one\'s own mind, not degrade oneself. The mind alone is the friend of the soul, and the mind alone is the enemy of the soul."',
    shlokaRef: 'Bhagavad Gita 6.5',
    story: 'Think of Hanuman - the mighty devotee who forgot his own powers. He had the strength to leap across oceans, yet lived unaware of his capabilities until Jambavan reminded him. The moment Hanuman remembered who he truly was, he grew vast as a mountain and soared across the sea. Your discipline problem may not be laziness at all - it may be that you have forgotten your own power. You are not weak. You are asleep to your strength.',
    actions: [
      'Start absurdly small. Commit to 2 minutes of the habit you want. Not 2 hours - 2 minutes. Build the identity, not the outcome.',
      'Design your environment: remove friction from good habits, add friction to bad ones. Your willpower is finite; don\'t waste it.',
      'Find your "Jambavan" - a person, book, or practice that reminds you of your power when you forget.',
      'Each night, record one thing you did well today. Train your mind to notice progress, not perfection.'
    ]
  },
  {
    keywords: ['career', 'job', 'work', 'confused about career', 'profession', 'what career', 'job satisfaction', 'career change', 'career path'],
    emotion: '🏛️ Sensing Career Uncertainty',
    greeting: 'Dear seeker, the anxiety about livelihood is natural. But remember - a career is not just how you earn; it is how you serve the world through your unique nature.',
    principle: 'Svadharma in Karma - It is better to imperfectly fulfill your own calling than to perfectly imitate another\'s. Your work should align with your innate nature.',
    principleName: 'Dharmic Principle',
    shloka: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।\nस्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम् ॥',
    shlokaTranslation: '"It is better to engage in one\'s own dharma, even imperfectly, than to perform another\'s dharma perfectly. By performing work prescribed according to one\'s own nature, a person does not incur sin."',
    shlokaRef: 'Bhagavad Gita 18.47',
    story: 'Arjuna could have chosen many paths - he was intelligent enough for scholarship, compassionate enough for healing, royal enough for diplomacy. But his nature was that of a warrior-protector. When he tried to argue for renunciation, I guided him back: "Your eyes light up with the bow in your hand, your spirit soars in righteous combat. Don\'t deny what your soul already knows." The world needs what only you can give, in the way only you can give it.',
    actions: [
      'Map your natural strengths: What do people consistently come to you for? What feels effortless to you but impressive to others?',
      'Separate societal prestige from personal resonance. The "best" career is the one that makes your soul feel useful.',
      'Have three conversations this week with people in fields that interest you. Curiosity is career guidance.',
      'Ask: "If money were not a concern for 5 years, what work would I still do?" - that answer holds your svadharma.'
    ]
  },
  {
    keywords: ['stress', 'overwhelm', 'overwhelmed', 'anxiety', 'anxious', 'pressure', 'burnout', 'too much', 'can\'t handle', 'nervous', 'panic'],
    emotion: '🌊 Sensing Overwhelm',
    greeting: 'I feel the storm within you, dear one. The waves of life are crashing, and you feel you may drown. But remember - you are not the waves. You are the ocean itself.',
    principle: 'Titiksha - Endurance with equanimity. Pleasures and pains are temporary; they come and go like seasons. The wise remain undisturbed.',
    principleName: 'Dharmic Principle',
    shloka: 'मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः ।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥',
    shlokaTranslation: '"O son of Kunti, the contact of the senses with their objects gives rise to cold and heat, pleasure and pain. They are transient - they come and go. Bear them patiently, O Bharata."',
    shlokaRef: 'Bhagavad Gita 2.14',
    story: 'The Pandavas endured thirteen years of exile - twelve in the forest, one in hiding. Draupadi, a queen, ground spices as a servant. Yudhishthira, born to rule, lived as a forest wanderer. They could have crumbled under the weight of injustice and hardship. But they endured, knowing that seasons change, that winter does not last forever. When spring came, they were not weakened by their trials - they were forged by them.',
    actions: [
      'Right now, take 5 deep breaths. Inhale for 4 counts, hold for 4, exhale for 6. You cannot solve problems from a flooded mind.',
      'Write down everything overwhelming you. Then circle only what you can act on TODAY. Release the rest.',
      'Say "no" to one thing this week that doesn\'t truly require your energy. Boundaries are sacred.',
      'Remember this truth daily: "This too shall pass" - mā te vyathā - let it not disturb you.'
    ]
  },
  {
    keywords: ['death', 'dying', 'mortality', 'die', 'end of life', 'afterlife', 'what happens after death', 'afraid of death'],
    emotion: '🕊️ Sensing Existential Inquiry',
    greeting: 'Dear soul, to question death is the beginning of true wisdom. Most people avoid this question their entire lives. Your courage to face it is itself a sacred act.',
    principle: 'Atman Avinashi - The soul is indestructible. Just as a person sheds worn-out garments, the soul sheds the body and takes on new ones.',
    principleName: 'Dharmic Principle',
    shloka: 'वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि ।\nतथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही ॥',
    shlokaTranslation: '"As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones."',
    shlokaRef: 'Bhagavad Gita 2.22',
    story: 'Young Nachiketa, in the Katha Upanishad, actually went to the abode of Yama, the Lord of Death. When offered worldly boons - kingdoms, wealth, long life - the boy refused them all. He said, "Tell me what lies beyond death." Yama tested him three times, and each time Nachiketa chose wisdom over comfort. He learned the supreme truth: the Atman - the Self - is neither born nor does it die. It is the eternal witness, untouched by the drama of the body.',
    actions: [
      'Meditate on impermanence for 5 minutes. Not with fear, but with wonder - what would you do differently if you truly accepted life\'s finite nature?',
      'Write a letter to yourself from your 90-year-old self. What advice would they give you about what truly matters?',
      'Live today as though it matters - because it does. Presence is the antidote to the fear of death.',
      'Study the Katha Upanishad, even briefly. Nachiketa\'s dialogue with Yama is among humanity\'s most profound explorations of mortality.'
    ]
  },
  {
    keywords: ['forgive', 'forgiveness', 'betrayal', 'betrayed', 'trust', 'hurt', 'cheated', 'lied', 'backstab', 'let down'],
    emotion: '🩹 Sensing Betrayal',
    greeting: 'Dear one, the wound of betrayal cuts deeper than any blade because it strikes at the heart of trust - the very foundation of human connection. Your pain is valid.',
    principle: 'Kshama - Forgiveness as strength, not weakness. Holding onto resentment is like drinking poison and expecting the other to suffer.',
    principleName: 'Dharmic Principle',
    shloka: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।\nनिर्ममो निरहंकारः समदुःखसुखः क्षमी ॥',
    shlokaTranslation: '"One who is free from hatred toward all beings, who is friendly and compassionate, free from attachment and ego, balanced in joy and sorrow, and ever-forgiving - such a one is dear to Me."',
    shlokaRef: 'Bhagavad Gita 12.13-14',
    story: 'Draupadi endured perhaps the greatest betrayal in the Mahabharata. Humiliated in open court by those who should have protected her, she witnessed her husbands sit in silence, her elders look away. She could have let hatred consume her. And for years, her anger burned rightfully. But Draupadi also knew when to rise above. After the war, she did not seek to torture the fallen - she mourned even her enemies\' children. Her strength was not in revenge, but in surviving with her dignity and dharma intact.',
    actions: [
      'Forgiveness is not saying "what happened was okay." It is saying "I refuse to let this define the rest of my life."',
      'Write an unsent letter to the person who hurt you. Pour out everything. Then burn or delete it - release the weight.',
      'Set clear boundaries. Forgiveness does not require you to allow the same person access to wound you again.',
      'Each day, practice Metta: "May I be free from suffering. May they find the wisdom to not cause harm."'
    ]
  },
  {
    keywords: ['ego', 'pride', 'arrogant', 'arrogance', 'humble', 'humility', 'narcissist', 'superiority', 'superior'],
    emotion: '👑 Sensing Ego',
    greeting: 'Dear one, that you are questioning ego is itself a sign of awakening. The ego is a useful servant but a terrible master - and recognizing its grip is the first step to freedom.',
    principle: 'Daivi Sampat - Divine qualities over demoniac ones. Humility, non-violence, truthfulness, and compassion are the marks of a soul ascending.',
    principleName: 'Dharmic Principle',
    shloka: 'अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः ।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम् ॥',
    shlokaTranslation: '"Fearlessness, purity of heart, steadfastness in knowledge and yoga, charity, self-control, sacrifice, study of scripture, austerity, and honesty - these are the divine qualities."',
    shlokaRef: 'Bhagavad Gita 16.1-3',
    story: 'Ravana, the great King of Lanka, was perhaps the most brilliant being of his age - a master of the Vedas, a devotee of Shiva, a conqueror of the three worlds. Yet his ego - the belief that he was above natural law, above dharma - led to his complete destruction. He could not accept that a simple prince from Ayodhya could challenge him. His brilliance was real, but his downfall was equally real, because talent without humility is a fortress built on sand.',
    actions: [
      'Practice "beginner\'s mind" - approach one familiar thing today as if encountering it for the first time.',
      'Ask for help or advice from someone you might normally consider "below" you. Wisdom wears unexpected faces.',
      'Catch yourself when you start a sentence with "I" too often. Try listening more than speaking today.',
      'Before each meal, pause and acknowledge the countless hands that made your food possible - the farmer, the rain, the earth.'
    ]
  },
  {
    keywords: ['money', 'wealth', 'greed', 'greedy', 'rich', 'poor', 'financial', 'earn', 'materialism', 'material'],
    emotion: '💰 Sensing Material Attachment',
    greeting: 'Dear seeker, wealth is neither virtue nor vice. It is energy - and like all energy, what matters is how it flows and what it nourishes.',
    principle: 'Aparigraha - Non-possessiveness. True contentment comes not from having more, but from needing less and giving freely.',
    principleName: 'Dharmic Principle',
    shloka: 'प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान् ।\nआत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते ॥',
    shlokaTranslation: '"When a person completely casts off all desires of the mind and is satisfied in the Self alone by the Self, then that person is said to be of steady wisdom."',
    shlokaRef: 'Bhagavad Gita 2.55',
    story: 'Karna - born with golden armor and earrings, a sign of divine wealth - was the most generous soul in all of Mahabharata. No one who asked Karna for anything ever left empty-handed. Even when Indra came disguised to take his divine armor - knowing it would mean Karna\'s death in battle - Karna gave it away with a smile. He understood something profound: true wealth is what you give, not what you keep. His generosity made him immortal in the hearts of people, long after kings and their treasures turned to dust.',
    actions: [
      'Give something today without expectation of return - time, money, knowledge. Even a small act of Dana purifies the heart.',
      'Audit your "needs" vs "wants." Often, what we chase for happiness we already possess in some form.',
      'Spend 5 minutes in gratitude for non-material wealth: health, relationships, consciousness itself.',
      'Remember: you came into this world with nothing, and will leave the same way. What you truly own is only what you\'ve given away.'
    ]
  },
  {
    keywords: ['peace', 'calm', 'meditation', 'meditate', 'inner peace', 'quiet mind', 'restless mind', 'stillness', 'tranquil', 'serene', 'mindfulness'],
    emotion: '🧘 Sensing the Seeking of Stillness',
    greeting: 'Dear one, that you seek peace tells me you already carry it within you. A fish in the ocean does not seek water - it simply remembers it is already surrounded by it.',
    principle: 'Abhyasa & Vairagya - Through consistent practice and detachment, the restless mind can be tamed. It is difficult, but not impossible.',
    principleName: 'Dharmic Principle',
    shloka: 'असंशयं महाबाहो मनो दुर्निग्रहं चलम् ।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥',
    shlokaTranslation: '"O mighty-armed one, the mind is undoubtedly restless and difficult to control. But through practice and detachment, O son of Kunti, it can be restrained."',
    shlokaRef: 'Bhagavad Gita 6.35',
    story: 'Even Arjuna, a man of supreme focus on the battlefield, told me that controlling the mind seemed harder than controlling the wind. I did not deny this - I acknowledged it. The mind IS restless, wandering, turbulent. But I also told him: it is not impossible. Like a flame in a windless place that does not flicker, the mind of a yogi who practices regularly becomes steady. Not through force, but through patient, loving repetition.',
    actions: [
      'Begin with just 5 minutes of sitting in silence daily. Focus on your breath. When the mind wanders - and it will - gently return. No judgment.',
      'Create a "sacred corner" in your home. Even a small cushion and candle. Having a dedicated space signals the mind to settle.',
      'Try Trataka meditation: gaze at a candle flame or a steady point for 2 minutes without blinking. This trains focus naturally.',
      'Before bed, practice Yoga Nidra or body scanning - systematic relaxation that teaches the mind the art of letting go.'
    ]
  }
];

const DEFAULT_RESPONSE = {
  emotion: '🌸 Receiving Your Words',
  greeting: 'Dear one, I receive your words with an open heart. Every question, every struggle, every seeking is sacred - for it brings you closer to your own truth.',
  principle: 'Atma Vichara - Self-inquiry. The greatest journey is the one that leads inward. "Who am I?" is the question that unlocks all answers.',
  principleName: 'Dharmic Principle',
  shloka: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥',
  shlokaTranslation: '"Abandon all varieties of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions. Do not fear."',
  shlokaRef: 'Bhagavad Gita 18.66',
  story: 'At the very end of our conversation at Kurukshetra, after I had shared the entirety of divine wisdom - the nature of the soul, the paths of knowledge, devotion, and action - I gave Arjuna the simplest and most powerful teaching of all: "Do not overthink. Do not drown in complexity. Simply align yourself with what is true and good, surrender the rest, and trust that the universe will carry you." This was not a call to passivity, but to the deepest form of active faith.',
  actions: [
    'Sit with your question a little longer before seeking an answer. Sometimes the asking itself is the practice.',
    'Write in a journal for 10 minutes - let the words flow without editing. Your subconscious often knows what your conscious mind cannot articulate.',
    'Choose one small act of dharma today - kindness, truthfulness, courage - and perform it wholeheartedly.',
    'Return here whenever you need. I am always here, in the chariot beside you, ready to guide.'
  ]
};

const WELCOME_MESSAGE = {
  greeting: 'Namaste, dear seeker. 🙏',
  text: 'I am here as your guide through the timeless wisdom of the Bhagavad Gita and Sanatana Dharma. Whatever weighs upon your heart - fear, confusion, grief, anger, or simply a longing for meaning - share it with me openly.',
  subtext: 'I will respond with a dharmic principle, a relevant shloka, a story from our scriptures, and practical steps you can take today. There is no question too small and no struggle too great.',
  prompt: 'What is on your mind today?'
};

// --- DOM Elements ---
const messagesArea = document.getElementById('messagesArea');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const suggestionChips = document.querySelectorAll('.suggestion-chip');
const topicBtns = document.querySelectorAll('.topic-btn');

// --- Initialize ---
function init() {
  renderWelcomeMessage();
  bindEvents();
}

function bindEvents() {
  sendBtn.addEventListener('click', handleSend);

  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  });

  suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const question = chip.dataset.question;
      chatInput.value = question;
      handleSend();
    });
  });

  topicBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const question = btn.dataset.question;
      chatInput.value = question;
      handleSend();
    });
  });

  // Auto-resize input
  chatInput.addEventListener('input', () => {
    chatInput.style.height = 'auto';
    chatInput.style.height = Math.min(chatInput.scrollHeight, 120) + 'px';
  });
}

// --- Render Welcome Message ---
function renderWelcomeMessage() {
  const welcomeHTML = `
    <div class="message-row welcome-message">
      <div class="message-avatar avatar-krishna">कृ</div>
      <div class="message-bubble krishna-bubble">
        <div class="response-greeting">${WELCOME_MESSAGE.greeting}</div>
        <div class="response-text">${WELCOME_MESSAGE.text}</div>
        <div class="response-text" style="margin-bottom: var(--space-2);">${WELCOME_MESSAGE.subtext}</div>
        <div class="response-text" style="font-style: italic; color: var(--color-text-secondary);">${WELCOME_MESSAGE.prompt}</div>
      </div>
    </div>
  `;
  messagesArea.innerHTML = welcomeHTML;
}

// --- Handle Send ---
function handleSend() {
  const text = chatInput.value.trim();
  if (!text) return;

  // Add user message
  appendUserMessage(text);

  // Clear input
  chatInput.value = '';
  chatInput.style.height = 'auto';

  // Show typing indicator
  showTypingIndicator();

  // Find response
  const response = findResponse(text);

  // Simulate thinking time (1.5-3s)
  const delay = 1500 + Math.random() * 1500;

  setTimeout(() => {
    removeTypingIndicator();
    appendKrishnaResponse(response);
  }, delay);
}

// --- User Message ---
function appendUserMessage(text) {
  const row = document.createElement('div');
  row.className = 'message-row user';
  row.innerHTML = `
    <div class="message-avatar avatar-user">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    </div>
    <div class="message-bubble user-bubble">${escapeHTML(text)}</div>
  `;
  messagesArea.appendChild(row);
  scrollToBottom();
}

// --- Typing Indicator ---
function showTypingIndicator() {
  const typing = document.createElement('div');
  typing.className = 'typing-indicator';
  typing.id = 'typingIndicator';
  typing.innerHTML = `
    <div class="message-avatar avatar-krishna">कृ</div>
    <div class="typing-bubble">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `;
  messagesArea.appendChild(typing);
  scrollToBottom();
}

function removeTypingIndicator() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) indicator.remove();
}

// --- Find Response ---
function findResponse(userText) {
  const lower = userText.toLowerCase();

  for (const resp of KRISHNA_RESPONSES) {
    for (const keyword of resp.keywords) {
      if (lower.includes(keyword)) {
        return resp;
      }
    }
  }

  return DEFAULT_RESPONSE;
}

// --- Render Krishna Response ---
function appendKrishnaResponse(resp) {
  const row = document.createElement('div');
  row.className = 'message-row';

  const actionsHTML = resp.actions.map((action, i) => `
    <div class="action-step">
      <span class="step-number">${i + 1}</span>
      <span>${action}</span>
    </div>
  `).join('');

  row.innerHTML = `
    <div class="message-avatar avatar-krishna">कृ</div>
    <div class="message-bubble krishna-bubble">
      <div class="response-emotion">${resp.emotion}</div>
      <div class="response-greeting">${resp.greeting}</div>

      <div class="response-principle">
        <span class="principle-label">${resp.principleName || 'Dharmic Principle'}</span>
        <span class="principle-text">${resp.principle}</span>
      </div>

      <div class="response-shloka">
        <div class="shloka-sanskrit">${resp.shloka.replace(/\n/g, '<br>')}</div>
        <div class="shloka-translation">${resp.shlokaTranslation}</div>
        <span class="shloka-ref">${resp.shlokaRef}</span>
      </div>

      <div class="response-story">
        <div class="story-label">📜 From the Scriptures</div>
        <div class="story-text">${resp.story}</div>
      </div>

      <div class="response-actions">
        <div class="actions-label">🪷 Practical Steps for You</div>
        <div class="action-steps">${actionsHTML}</div>
      </div>
    </div>
  `;

  messagesArea.appendChild(row);
  scrollToBottom();
}

// --- Utilities ---
function scrollToBottom() {
  requestAnimationFrame(() => {
    messagesArea.scrollTo({
      top: messagesArea.scrollHeight,
      behavior: 'smooth'
    });
  });
}

function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// --- Shared Navigation Logic ---
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

// --- Start ---
document.addEventListener('DOMContentLoaded', init);
