/* =============================================
   TATTVAM - Daily Gita Verse - JavaScript
   30+ Real Bhagavad Gita Verses with Full Data
   ============================================= */

const VERSES = [
  {
    ref: "Bhagavad Gita 2.47",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥",
    transliteration: "Karmaṇy evādhikāras te mā phaleṣu kadācana\nMā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
    translation: "You have the right to perform your duty, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results, and never be attached to inaction.",
    meaning: "This is Krishna's most famous teaching - the philosophy of Nishkama Karma. Detach from outcomes, not from effort. Work becomes worship when we release our grip on results.",
    application: [
      "Choose one task today and do it with full focus, without worrying about the outcome.",
      "When anxiety about results arises, gently remind yourself: 'My job is the effort, not the result.'",
      "At day's end, reflect on the quality of your work, not on what you gained from it."
    ]
  },
  {
    ref: "Bhagavad Gita 2.14",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः ।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥",
    transliteration: "Mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ\nĀgamāpāyino 'nityās tāṁs titikṣasva bhārata",
    translation: "The contacts of the senses with their objects, O son of Kunti, give rise to cold and heat, pleasure and pain. They come and go, and are impermanent. Endure them bravely, O Bharata.",
    meaning: "Life's experiences - both pleasant and painful - are temporary, like seasons. True strength lies not in avoiding discomfort, but in bearing it with equanimity, knowing it shall pass.",
    application: [
      "When something uncomfortable happens today, pause and say: 'This is temporary.'",
      "Practice sitting with discomfort for 2 minutes without reacting - physical cold, silence, or boredom.",
      "Notice a moment of pleasure today and appreciate it fully, knowing it too is fleeting."
    ]
  },
  {
    ref: "Bhagavad Gita 2.20",
    sanskrit: "न जायते म्रियते वा कदाचिन्\nनायं भूत्वा भविता वा न भूयः ।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे ॥",
    transliteration: "Na jāyate mriyate vā kadācin\nNāyaṁ bhūtvā bhavitā vā na bhūyaḥ\nAjo nityaḥ śāśvato 'yaṁ purāṇo\nNa hanyate hanyamāne śarīre",
    translation: "The soul is never born, nor does it ever die. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.",
    meaning: "Your true Self is beyond death and change. This is the foundation of Hindu philosophy - the Atman (soul) is eternal, indestructible, and beyond the reach of time and transformation.",
    application: [
      "Sit quietly for 5 minutes and observe: you are the witness behind your thoughts, not the thoughts themselves.",
      "When fear of loss arises, remind yourself that your deepest essence cannot be taken.",
      "Contemplate: what part of you has remained unchanged since childhood? That unchanging awareness is your Atman."
    ]
  },
  {
    ref: "Bhagavad Gita 2.62–63",
    sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते ।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते ॥",
    transliteration: "Dhyāyato viṣayān puṁsaḥ saṅgas teṣūpajāyate\nSaṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate",
    translation: "When one dwells on sense objects, attachment arises. From attachment springs desire, and from desire anger is born. From anger comes delusion, from delusion confusion of memory, and from that, the destruction of intelligence.",
    meaning: "Krishna maps the psychology of downfall: obsession → attachment → craving → frustration → rage → loss of clarity. This chain of destruction begins with a single wandering thought.",
    application: [
      "Identify one 'mental loop' you keep returning to - a craving, a grudge, a fantasy. Simply notice it.",
      "When you feel anger rising, trace it backward: what desire was frustrated?",
      "Practice a 10-minute digital fast today - no scrolling, no consuming content. Observe what your mind does."
    ]
  },
  {
    ref: "Bhagavad Gita 3.35",
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः ॥",
    transliteration: "Śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt\nSva-dharme nidhanaṁ śreyaḥ para-dharmo bhayāvahaḥ",
    translation: "It is far better to perform one's own duty imperfectly than to master another's duty perfectly. It is better to die doing one's own duty, for another's duty brings danger.",
    meaning: "Authenticity over imitation. Your unique path, even if walked imperfectly, is your sacred journey. Imitating others, however successfully, leads to spiritual dissonance.",
    application: [
      "Ask yourself today: 'Am I doing this because it's truly mine, or because someone else's path looks easier?'",
      "Write down three things you're naturally drawn to but have been ignoring. These are clues to your svadharma.",
      "Give yourself permission to be imperfect at something that genuinely matters to you."
    ]
  },
  {
    ref: "Bhagavad Gita 4.7–8",
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत ।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ॥\nपरित्राणाय साधूनां विनाशाय च दुष्कृताम् ।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे ॥",
    transliteration: "Yadā yadā hi dharmasya glānir bhavati bhārata\nAbhyutthānam adharmasya tadātmānaṁ sṛjāmy aham\nParitrāṇāya sādhūnāṁ vināśāya ca duṣkṛtām\nDharma-saṁsthāpanārthāya sambhavāmi yuge yuge",
    translation: "Whenever righteousness declines and unrighteousness prevails, O Arjuna, I manifest Myself. For the protection of the good, the destruction of the wicked, and the establishment of dharma, I appear age after age.",
    meaning: "The cosmic promise of divine intervention. Whenever the balance of the universe tilts toward darkness, the Divine restores equilibrium. This is the eternal cycle of renewal and hope.",
    application: [
      "Be a small force for dharma today - stand up for what's right in a quiet, everyday moment.",
      "When the world feels chaotic, remember this promise: balance always returns.",
      "Ask yourself: 'In my small sphere of influence, am I protecting the good today?'"
    ]
  },
  {
    ref: "Bhagavad Gita 4.38",
    sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते ।\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति ॥",
    transliteration: "Na hi jñānena sadṛśaṁ pavitram iha vidyate\nTat svayaṁ yoga-saṁsiddhaḥ kālenātmani vindati",
    translation: "In this world, there is nothing as purifying as knowledge. One who has become perfected in yoga finds this knowledge within, in due course of time.",
    meaning: "True knowledge - not just information, but deep spiritual understanding - is the greatest purifier. It arises naturally within the disciplined seeker, like a flower blooming when the season is right.",
    application: [
      "Read or listen to one piece of wisdom today with full, undivided attention. Let it sink in rather than rushing to the next.",
      "Spend 5 minutes in silent contemplation, asking yourself a single question and listening for an answer from within.",
      "Notice the difference between knowing something intellectually and feeling it in your bones. Seek the latter."
    ]
  },
  {
    ref: "Bhagavad Gita 6.5",
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् ।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥",
    transliteration: "Uddhared ātmanātmānaṁ nātmānam avasādayet\nĀtmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
    translation: "One must elevate oneself by one's own mind, not degrade oneself. The mind alone is the friend of the self, and the mind alone is the enemy of the self.",
    meaning: "You are your own greatest ally and your own greatest adversary. No external force can lift or destroy you as powerfully as your own mind. Self-mastery is the ultimate liberation.",
    application: [
      "Catch one instance of negative self-talk today and consciously replace it with encouragement.",
      "Set one small challenge for yourself and accomplish it - build evidence that you are your own best friend.",
      "Before bed, acknowledge one thing you did well today. Become your own cheerleader."
    ]
  },
  {
    ref: "Bhagavad Gita 6.35",
    sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम् ।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥",
    transliteration: "Asaṁśayaṁ mahā-bāho mano durnigrahaṁ calam\nAbhyāsena tu kaunteya vairāgyeṇa ca gṛhyate",
    translation: "Undoubtedly, O mighty-armed one, the mind is restless and difficult to control. But through practice and detachment, O son of Kunti, it can be restrained.",
    meaning: "Even Krishna acknowledges: the mind is wild and hard to tame. But He offers the remedy - consistent practice (abhyasa) and letting go of attachments (vairagya). Patience and persistence are the path.",
    application: [
      "Start a 5-minute daily meditation practice - even if your mind wanders the entire time, the sitting itself is the victory.",
      "When your mind races, don't fight it. Gently return to your breath or mantra. This 'returning' IS the practice.",
      "Identify one attachment you can slightly loosen today - an opinion, a possession, a need for approval."
    ]
  },
  {
    ref: "Bhagavad Gita 9.22",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते ।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ॥",
    transliteration: "Ananyāś cintayanto māṁ ye janāḥ paryupāsate\nTeṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham",
    translation: "To those who worship Me alone, thinking of no other, to those ever self-controlled, I provide what they lack and preserve what they have.",
    meaning: "A promise of divine providence. When your devotion is single-pointed and sincere, the universe takes care of you. Let go of anxiety about provision - focus on your spiritual connection, and the rest follows.",
    application: [
      "Begin your day by offering your plans and worries to the Divine. Say: 'I trust that I am cared for.'",
      "When financial or material anxiety strikes, pause and redirect your energy to gratitude for what you already have.",
      "Practice single-pointed focus on one task today, as an act of devotion."
    ]
  },
  {
    ref: "Bhagavad Gita 11.32",
    sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान्समाहर्तुमिह प्रवृत्तः ।",
    transliteration: "Kālo 'smi loka-kṣaya-kṛt pravṛddho\nLokān samāhartum iha pravṛttaḥ",
    translation: "I am Time, the mighty destroyer of the world, here engaged in the destruction of all beings. Even without your participation, all the warriors arrayed in the opposing armies shall cease to exist.",
    meaning: "In His cosmic form, Krishna reveals Himself as Time - the ultimate force before which all things dissolve. This isn't meant to terrify, but to liberate us from the illusion that we are in control.",
    application: [
      "Contemplate the vastness of time - your problems are a brief flicker in an infinite cosmic drama.",
      "Let go of one thing you've been clinging to, recognizing that time will take it regardless.",
      "Use this perspective to find courage: if nothing is permanent, what is there truly to fear?"
    ]
  },
  {
    ref: "Bhagavad Gita 12.13–14",
    sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥\nसन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः ।\nमय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः ॥",
    transliteration: "Adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca\nNirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī\nSantuṣṭaḥ satataṁ yogī yatātmā dṛḍha-niścayaḥ\nMayy arpita-mano-buddhir yo mad-bhaktaḥ sa me priyaḥ",
    translation: "One who is free from hatred toward all beings, who is friendly and compassionate, free from possessiveness and ego, equal in joy and sorrow, forgiving - such a devotee, always content and self-controlled with firm resolve, whose mind and intellect are offered to Me - that person is dear to Me.",
    meaning: "Krishna paints the portrait of His ideal devotee - not someone performing grand rituals, but a person of simple, pure character: kind, humble, equanimous, and forgiving.",
    application: [
      "Choose one quality from this list - compassion, forgiveness, humility - and consciously practice it today.",
      "When someone irritates you, try responding with friendliness instead of frustration.",
      "Before reacting to any situation today, ask: 'What would a person dear to Krishna do here?'"
    ]
  },
  {
    ref: "Bhagavad Gita 18.47",
    sanskrit: "श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात् ।\nस्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम् ॥",
    transliteration: "Śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt\nSvabhāva-niyataṁ karma kurvan nāpnoti kilbiṣam",
    translation: "It is better to perform one's own duty imperfectly than another's duty perfectly. By doing the work prescribed by one's own nature, a person does not incur sin.",
    meaning: "This echoes BG 3.35 with added depth: your innate nature (svabhava) prescribes your path. When you follow it, even imperfectly, you remain in harmony with the cosmic order. Fighting your nature is the real transgression.",
    application: [
      "Identify something you do easily that others find difficult - this may be a clue to your svadharma.",
      "Stop comparing your chapter 1 to someone else's chapter 20. Your path has its own timeline.",
      "Do one thing today purely because it calls to you, not because it's expected or rewarded."
    ]
  },
  {
    ref: "Bhagavad Gita 2.11",
    sanskrit: "अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे ।\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ॥",
    transliteration: "Aśocyān anvaśocas tvaṁ prajñā-vādāṁś ca bhāṣase\nGatāsūn agatāsūṁś ca nānuśocanti paṇḍitāḥ",
    translation: "You grieve for those who should not be grieved for, yet you speak words of wisdom. The wise grieve neither for the living nor for the dead.",
    meaning: "Krishna's first teaching begins with a gentle rebuke: true wisdom and excessive grief cannot coexist. The wise understand that the soul is eternal, and what appears as loss is merely transformation.",
    application: [
      "If you're holding onto grief about something, ask: 'Am I mourning a reality, or a story I've constructed?'",
      "Practice accepting one small change today without resistance - a canceled plan, an unexpected shift.",
      "Write down one 'loss' from your past that eventually led to something good. Trust the unfolding."
    ]
  },
  {
    ref: "Bhagavad Gita 2.22",
    sanskrit: "वासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि ।\nतथा शरीराणि विहाय जीर्णा-\nन्यन्यानि संयाति नवानि देही ॥",
    transliteration: "Vāsāṁsi jīrṇāni yathā vihāya\nNavāni gṛhṇāti naro 'parāṇi\nTathā śarīrāṇi vihāya jīrṇāny\nAnyāni saṁyāti navāni dehī",
    translation: "As a person discards worn-out garments and puts on new ones, so the soul discards worn-out bodies and enters new ones.",
    meaning: "Death is not an ending but a changing of clothes. The Atman simply moves from one vessel to another. This beautiful metaphor transforms our relationship with mortality and change.",
    application: [
      "Let go of one 'worn-out garment' in your life today - an old habit, a grudge, a fear that no longer serves you.",
      "Embrace a new beginning, however small - a new practice, a new perspective, a fresh start on something abandoned.",
      "Sit with the idea that you are not your body. What remains when you remove all physical identifiers?"
    ]
  },
  {
    ref: "Bhagavad Gita 5.10",
    sanskrit: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः ।\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा ॥",
    transliteration: "Brahmaṇy ādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ\nLipyate na sa pāpena padma-patram ivāmbhasā",
    translation: "One who performs actions offering them to the Divine, abandoning attachment, is not tainted by sin - just as a lotus leaf is untouched by water.",
    meaning: "The lotus metaphor - one of Hinduism's most beautiful images. Live in the world but remain untouched by it. Work becomes sacred when offered selflessly. Purity isn't about withdrawal, but about non-attachment.",
    application: [
      "Before starting work today, mentally offer it: 'May this effort serve something greater than myself.'",
      "Practice being 'in the world but not of it' - engage fully in a social situation while maintaining inner calm.",
      "When someone tries to drag you into drama, be like the lotus: present but untouched."
    ]
  },
  {
    ref: "Bhagavad Gita 6.9",
    sanskrit: "सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु ।\nसाधुष्वपि च पापेषु समबुद्धिर्विशिष्यते ॥",
    transliteration: "Suhṛn-mitrāry-udāsīna-madhyastha-dveṣya-bandhuṣu\nSādhuṣv api ca pāpeṣu sama-buddhir viśiṣyate",
    translation: "One who regards well-wishers, friends, enemies, the neutral, the mediator, the envious, relatives, saints, and sinners with equal vision is considered to be the most distinguished.",
    meaning: "True spiritual evolution is measured not by how much you meditate, but by how evenly you treat all beings - friend and foe alike. This is the summit of spiritual maturity.",
    application: [
      "Think of someone you dislike and silently wish them well. Notice how this changes your inner state.",
      "Practice treating a stranger today with the same warmth you'd show a close friend.",
      "When judging someone, remind yourself: 'They too are on a journey. Their soul is as sacred as mine.'"
    ]
  },
  {
    ref: "Bhagavad Gita 15.15",
    sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टो\nमत्तः स्मृतिर्ज्ञानमपोहनं च ।",
    transliteration: "Sarvasya cāhaṁ hṛdi sanniviṣṭo\nMattaḥ smṛtir jñānam apohanaṁ ca",
    translation: "I am seated in the hearts of all beings. From Me come memory, knowledge, and the removal of doubt.",
    meaning: "The Divine is not distant - it resides within the heart of every being. Every flash of insight, every memory, every moment of clarity is a gift from that inner presence.",
    application: [
      "Place your hand on your heart and take 5 breaths, feeling the presence within.",
      "When you have a moment of sudden clarity or intuition today, acknowledge it as the Divine speaking through you.",
      "Look into the eyes of someone today - a stranger, a colleague - and remember: the same divine spark lives in them."
    ]
  },
  {
    ref: "Bhagavad Gita 18.66",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥",
    transliteration: "Sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja\nAhaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
    translation: "Abandon all varieties of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
    meaning: "The ultimate teaching of the Gita - complete surrender (sharanagati). After all the philosophy, all the paths, Krishna says: 'Just surrender to Me. I will take care of everything.' This is the supreme promise of grace.",
    application: [
      "Identify one burden you've been carrying alone. Consciously surrender it: 'I release this to a power greater than myself.'",
      "Practice trusting the process today - when things don't go your way, say 'I surrender' and mean it.",
      "Before sleep, release every worry, every plan, every fear. Let go completely, trusting the universe to hold you."
    ]
  },
  {
    ref: "Bhagavad Gita 2.3",
    sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते ।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप ॥",
    transliteration: "Klaibyaṁ mā sma gamaḥ pārtha naitat tvayy upapadyate\nKṣudraṁ hṛdaya-daurbalyaṁ tyaktvottiṣṭha parantapa",
    translation: "Do not yield to this degrading weakness, O Partha. It does not befit you. Give up this petty faint-heartedness and arise, O scorcher of enemies!",
    meaning: "Krishna's fierce wake-up call. Sometimes wisdom isn't gentle - it's a fire that burns away our excuses. When we know what's right but hesitate, we need this voice: Stand up. You are greater than your fears.",
    application: [
      "Identify one thing you've been avoiding out of fear. Take the smallest possible step toward it today.",
      "When self-doubt whispers, respond with Krishna's voice: 'This weakness does not befit you. Arise!'",
      "Remember a time you overcame fear. Channel that same courage into today's challenges."
    ]
  },
  {
    ref: "Bhagavad Gita 3.21",
    sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः ।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते ॥",
    transliteration: "Yad yad ācarati śreṣṭhas tat tad evetaro janaḥ\nSa yat pramāṇaṁ kurute lokas tad anuvartate",
    translation: "Whatever a great person does, common people follow. Whatever standards they set, the world pursues.",
    meaning: "Leadership is not a title - it's a behavior. Every action you take sets an example for someone watching. Your integrity, your kindness, your discipline ripples outward in ways you may never see.",
    application: [
      "Act today as if someone you love is watching and learning from you - because they probably are.",
      "Set one high standard for yourself today and hold to it, knowing it elevates those around you.",
      "Be the person you needed when you were younger. Lead by example in one small way."
    ]
  },
  {
    ref: "Bhagavad Gita 4.18",
    sanskrit: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः ।\nस बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत् ॥",
    transliteration: "Karmaṇy akarma yaḥ paśyed akarmaṇi ca karma yaḥ\nSa buddhimān manuṣyeṣu sa yuktaḥ kṛtsna-karma-kṛt",
    translation: "One who sees inaction in action, and action in inaction, is wise among all people. Such a person is a yogi and has accomplished everything.",
    meaning: "A profound paradox: the truly wise act without ego-driven effort (seeing inaction in action), and they recognize that even apparent stillness contains active spiritual work. It's about the consciousness behind the action, not the action itself.",
    application: [
      "Practice 'effortless effort' today - do one task with such flow and presence that it feels like you're not doing it at all.",
      "In a moment of stillness today, recognize the powerful inner work happening: healing, processing, growing.",
      "Ask yourself: 'Am I busy, or am I productive? Am I still, or am I stagnant?' Quality of consciousness matters more than quantity of action."
    ]
  },
  {
    ref: "Bhagavad Gita 9.26",
    sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति ।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः ॥",
    transliteration: "Patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati\nTad ahaṁ bhakty-upahṛtam aśnāmi prayatātmanaḥ",
    translation: "If one offers Me with devotion a leaf, a flower, a fruit, or water, I accept that offering of pure love from a sincere heart.",
    meaning: "The Divine doesn't need grand temples or expensive offerings. A single leaf offered with genuine love surpasses a mountain of gold offered with ego. Devotion is measured by purity of heart, not grandeur of gesture.",
    application: [
      "Offer something simple today with genuine love - a glass of water, a flower, a kind word - and dedicate it to the Divine.",
      "When you feel you 'don't have enough' to give, remember: sincerity matters infinitely more than scale.",
      "Transform an ordinary act (cooking, cleaning, working) into an offering by doing it with full presence and love."
    ]
  },
  {
    ref: "Bhagavad Gita 12.8",
    sanskrit: "मय्येव मन आधत्स्व मयि बुद्धिं निवेशय ।\nनिवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः ॥",
    transliteration: "Mayy eva mana ādhatsva mayi buddhiṁ niveśaya\nNivasiṣyasi mayy eva ata ūrdhvaṁ na saṁśayaḥ",
    translation: "Fix your mind on Me alone, place your intellect in Me. Thus you shall certainly live in Me forever after. Of this there is no doubt.",
    meaning: "A simple, direct instruction: put your attention on the Divine. Where attention goes, energy flows. By consistently directing both mind and intellect toward the Divine, union becomes inevitable.",
    application: [
      "Set three 'remembrance alarms' today - when they go off, pause for 10 seconds and think of the Divine.",
      "When your mind wanders to worry, gently redirect it: 'Not there. Here. In the presence.'",
      "Choose one daily activity (walking, eating, brushing teeth) and practice doing it with full awareness of the Divine."
    ]
  },
  {
    ref: "Bhagavad Gita 2.38",
    sanskrit: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ ।\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि ॥",
    transliteration: "Sukha-duḥkhe same kṛtvā lābhālābhau jayājayau\nTato yuddhāya yujyasva naivaṁ pāpam avāpsyasi",
    translation: "Treating pleasure and pain, gain and loss, victory and defeat alike, engage in battle. In this way, you shall not incur sin.",
    meaning: "Equanimity is the warrior's shield. When you stop being tossed between pleasure and pain, gain and loss, you become truly free. This balance doesn't mean indifference - it means unshakeable inner stability.",
    application: [
      "When something good happens today, enjoy it without clinging. When something bad happens, feel it without drowning.",
      "Practice equanimity in a small way: if you win something, celebrate gently. If you lose, acknowledge it without drama.",
      "At the end of the day, review: did any event hijack your peace? How can you maintain center tomorrow?"
    ]
  },
  {
    ref: "Bhagavad Gita 7.7",
    sanskrit: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय ।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव ॥",
    transliteration: "Mattaḥ parataraṁ nānyat kiñcid asti dhanañjaya\nMayi sarvam idaṁ protaṁ sūtre maṇi-gaṇā iva",
    translation: "There is nothing whatsoever higher than Me, O Arjuna. All that exists is strung upon Me, as a row of jewels on a thread.",
    meaning: "A stunning metaphor: the entire universe is like pearls on a string, and the Divine is the invisible thread connecting everything. All diversity is unified by a single, sacred thread of consciousness.",
    application: [
      "Look for the 'thread' connecting seemingly separate events in your life today. Find the hidden unity.",
      "When you feel disconnected from others, remember: we are all jewels on the same thread.",
      "In nature today, notice how everything is interconnected - the same divine intelligence flows through all."
    ]
  },
  {
    ref: "Bhagavad Gita 18.37",
    sanskrit: "यत्तदग्रे विषमिव परिणामेऽमृतोपमम् ।\nतत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम् ॥",
    transliteration: "Yat tad agre viṣam iva pariṇāme 'mṛtopamam\nTat sukhaṁ sāttvikaṁ proktam ātma-buddhi-prasāda-jam",
    translation: "That happiness which seems like poison at first but turns to nectar - that is declared to be Sattvic happiness, born from the clarity of self-realization.",
    meaning: "The best things in life are hard at the beginning. Discipline, meditation, self-control, honest self-reflection - they feel bitter initially but yield the sweetest fruit. Comfort zones produce short-lived pleasure; growth zones produce lasting joy.",
    application: [
      "Choose the harder path today in one decision - the workout instead of the couch, the difficult conversation instead of avoidance.",
      "When something feels difficult but right, remind yourself: 'Poison now, nectar later.'",
      "Reflect on a past struggle that produced strength. Use it as fuel for today's challenge."
    ]
  },
  {
    ref: "Bhagavad Gita 14.22–25",
    sanskrit: "प्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव ।\nन द्वेष्टि सम्प्रवृत्तानि न निवृत्तानि काङ्क्षति ॥",
    transliteration: "Prakāśaṁ ca pravṛttiṁ ca moham eva ca pāṇḍava\nNa dveṣṭi sampravṛttāni na nivṛttāni kāṅkṣati",
    translation: "O Pandava, one who does not hate illumination, activity, or delusion when they appear, nor longs for them when they disappear - such a person has transcended the three gunas.",
    meaning: "Beyond the three modes of nature (sattva, rajas, tamas) lies true freedom. The liberated soul doesn't crave clarity or activity, nor fight against inertia. They witness all three states with equanimity.",
    application: [
      "Notice which guna dominates you right now: clarity (sattva), restlessness (rajas), or heaviness (tamas). Don't judge - just observe.",
      "When you feel lazy (tamas), don't hate yourself. When you feel driven (rajas), don't over-identify. When you feel clear (sattva), don't cling.",
      "Practice being the witness of your inner states rather than being swept away by them."
    ]
  },
  {
    ref: "Bhagavad Gita 10.20",
    sanskrit: "अहमात्मा गुडाकेश सर्वभूताशयस्थितः ।\nअहमादिश्च मध्यं च भूतानामन्त एव च ॥",
    transliteration: "Aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ\nAham ādiś ca madhyaṁ ca bhūtānām anta eva ca",
    translation: "I am the Self, O Arjuna, seated in the hearts of all beings. I am the beginning, the middle, and the end of all beings.",
    meaning: "Krishna reveals His omnipresence - He is not separate from creation but is the very Self within all. From the first breath to the last and everything between, the Divine is the constant, unchanging reality.",
    application: [
      "In every interaction today, silently acknowledge: 'The Divine is present here.'",
      "When you feel alone, remember that the same Self that exists in you exists in every being around you.",
      "Contemplate: if the Divine is the beginning, middle, and end - then every moment of your life is sacred."
    ]
  },
  {
    ref: "Bhagavad Gita 6.22",
    sanskrit: "यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः ।\nयस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते ॥",
    transliteration: "Yaṁ labdhvā cāparaṁ lābhaṁ manyate nādhikaṁ tataḥ\nYasmin sthito na duḥkhena guruṇāpi vicālyate",
    translation: "Having gained this, one considers no other gain to be greater. Established in this state, one is not shaken even by the heaviest sorrow.",
    meaning: "Krishna describes the supreme state of yoga - an inner treasure so great that nothing in the world can surpass it, and no tragedy can disturb it. This is the ultimate emotional freedom: unshakeable peace.",
    application: [
      "Identify what gives you the deepest, most lasting satisfaction (not pleasure). Invest more time there today.",
      "Build your 'inner refuge' through 5 minutes of meditation - a place inside that no external storm can reach.",
      "When shaken by events, ask: 'Is my deepest Self actually disturbed, or just the surface ripples?'"
    ]
  }
];

// --- State --- 
let currentVerseIndex = -1;
let versesViewed = 0;

// --- Utility --- 
function getDayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function formatDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('en-IN', options);
}

// --- DOM Elements --- 
function getElements() {
  return {
    dateDisplay: document.getElementById('dateDisplay'),
    verseSanskrit: document.getElementById('verseSanskrit'),
    verseTranslit: document.getElementById('verseTranslit'),
    verseEnglish: document.getElementById('verseEnglish'),
    verseRef: document.getElementById('verseRef'),
    cardWrapper: document.getElementById('verseCardWrapper'),
    meaningText: document.getElementById('meaningText'),
    practiceSteps: document.getElementById('practiceSteps'),
    applicationBody: document.getElementById('applicationBody'),
    toggleIcon: document.getElementById('toggleIcon'),
    applicationHeader: document.getElementById('applicationHeader'),
    newVerseBtn: document.getElementById('newVerseBtn'),
    shareBtn: document.getElementById('shareBtn'),
    bookmarkBtn: document.getElementById('bookmarkBtn'),
    verseCount: document.getElementById('verseCount'),
    toast: document.getElementById('toast')
  };
}

// --- Render Verse --- 
function renderVerse(verse, animate = false) {
  const els = getElements();

  if (animate) {
    // Transition out
    els.cardWrapper.classList.add('transitioning-out');
    els.cardWrapper.classList.remove('transitioning-in');

    // Close application panel
    if (els.applicationBody.classList.contains('open')) {
      els.applicationBody.classList.remove('open');
      els.toggleIcon.classList.remove('open');
    }

    setTimeout(() => {
      updateVerseContent(verse, els);
      els.cardWrapper.classList.remove('transitioning-out');
      els.cardWrapper.classList.add('transitioning-in');

      // Remove animation class after completion
      setTimeout(() => {
        els.cardWrapper.classList.remove('transitioning-in');
      }, 800);
    }, 500);
  } else {
    updateVerseContent(verse, els);
  }
}

function updateVerseContent(verse, els) {
  els.verseSanskrit.textContent = verse.sanskrit;
  els.verseTranslit.textContent = verse.transliteration;
  els.verseEnglish.textContent = verse.translation;
  els.verseRef.textContent = verse.ref;
  els.meaningText.textContent = verse.meaning;

  // Render practice steps
  els.practiceSteps.innerHTML = '';
  verse.application.forEach((step, i) => {
    const stepEl = document.createElement('div');
    stepEl.className = 'practice-step';
    stepEl.innerHTML = `
      <span class="step-number">${i + 1}</span>
      <span class="step-text">${step}</span>
    `;
    els.practiceSteps.appendChild(stepEl);
  });

  // Update counter
  versesViewed++;
  els.verseCount.textContent = versesViewed;
}

// --- Get verse by seed --- 
function getVerseByDay() {
  const dayOfYear = getDayOfYear();
  return dayOfYear % VERSES.length;
}

function getRandomVerseIndex() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * VERSES.length);
  } while (newIndex === currentVerseIndex && VERSES.length > 1);
  return newIndex;
}

// --- Show new verse --- 
function showNewVerse() {
  currentVerseIndex = getRandomVerseIndex();
  renderVerse(VERSES[currentVerseIndex], true);
}

// --- Toggle application section --- 
function toggleApplication() {
  const els = getElements();
  els.applicationBody.classList.toggle('open');
  els.toggleIcon.classList.toggle('open');
}

// --- Share / Copy --- 
function copyVerse() {
  const verse = VERSES[currentVerseIndex];
  const text = `${verse.sanskrit}\n\n${verse.transliteration}\n\n"${verse.translation}"\n\n- ${verse.ref}\n\nShared from TatTvam ✦`;

  navigator.clipboard.writeText(text).then(() => {
    showToast('Verse copied to clipboard ✦');
    const els = getElements();
    els.shareBtn.classList.add('copied');
    setTimeout(() => els.shareBtn.classList.remove('copied'), 2000);
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Verse copied to clipboard ✦');
  });
}

// --- Bookmark --- 
function bookmarkVerse() {
  const verse = VERSES[currentVerseIndex];
  let bookmarks = JSON.parse(localStorage.getItem('tattvam-bookmarks') || '[]');
  const exists = bookmarks.some(b => b.ref === verse.ref);

  if (exists) {
    bookmarks = bookmarks.filter(b => b.ref !== verse.ref);
    showToast('Bookmark removed');
  } else {
    bookmarks.push({ ref: verse.ref, sanskrit: verse.sanskrit, translation: verse.translation });
    showToast('Verse bookmarked ✦');
  }

  localStorage.setItem('tattvam-bookmarks', JSON.stringify(bookmarks));
  updateBookmarkButton();
}

function updateBookmarkButton() {
  const els = getElements();
  const verse = VERSES[currentVerseIndex];
  const bookmarks = JSON.parse(localStorage.getItem('tattvam-bookmarks') || '[]');
  const isBookmarked = bookmarks.some(b => b.ref === verse.ref);

  if (isBookmarked) {
    els.bookmarkBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1z"/></svg>
      Saved
    `;
  } else {
    els.bookmarkBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
      Save
    `;
  }
}

// --- Toast --- 
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// --- Initialize --- 
document.addEventListener('DOMContentLoaded', () => {
  const els = getElements();

  // Set date
  els.dateDisplay.textContent = formatDate();

  // Show today's verse
  currentVerseIndex = getVerseByDay();
  renderVerse(VERSES[currentVerseIndex], false);
  updateBookmarkButton();

  // Event listeners
  els.newVerseBtn.addEventListener('click', () => {
    showNewVerse();
    setTimeout(updateBookmarkButton, 600);
  });

  els.applicationHeader.addEventListener('click', toggleApplication);
  els.shareBtn.addEventListener('click', copyVerse);
  els.bookmarkBtn.addEventListener('click', bookmarkVerse);

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

  // Mark active nav link
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === 'gita-verse.html') {
      link.classList.add('active');
    }
  });
});
