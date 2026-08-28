// assets/js/quiz.js

(() => {
  const QUESTIONS_PER_QUIZ = 7;

  const questionBanks = {
    indien: {
      title: 'Indien',
      questions: [
        { q: 'Wer gilt als Begründer des Buddhismus?', options: ['Siddhartha Gautama', 'Shankara', 'Chanakya', 'Patanjali'], answer: 'Siddhartha Gautama' },
        { q: 'Was bedeutet das Konzept der Leere (Śūnyatā) bei Nagarjuna?', options: ['Dass Dinge keine unabhängige Eigennatur haben', 'Dass das Universum sinnlos ist', 'Dass physische Materie nicht existiert', 'Dass Gedanken Illusionen sind'], answer: 'Dass Dinge keine unabhängige Eigennatur haben' },
        { q: 'Welche Lehre vertritt Advaita Vedanta?', options: ['Nicht-Dualität (Brahman und Atman sind eins)', 'Vollständiger Nihilismus', 'Polytheistischer Götzendienst', 'Die Trennung von Körper und Geist'], answer: 'Nicht-Dualität (Brahman und Atman sind eins)' },
        { q: 'Wer war Shankara?', options: ['Ein zentraler Denker des Advaita Vedanta', 'Der Gründer des Jainismus', 'Ein früher indischer Astronom', 'Der Lehrer des Buddha'], answer: 'Ein zentraler Denker des Advaita Vedanta' },
        { q: 'Wofür ist Chanakya bekannt?', options: ['Für frühe politische Philosophie und Realpolitik', 'Für Liebeslyrik', 'Für die erste Grammatik', 'Für asketische Mystik'], answer: 'Für frühe politische Philosophie und Realpolitik' },
        { q: 'Wer entwickelte die Philosophie der "Evolution des Bewusstseins"?', options: ['Sri Aurobindo', 'Tagore', 'Nagarjuna', 'Buddha'], answer: 'Sri Aurobindo' },
        { q: 'Wer gewann als erster asiatischer Autor den Literaturnobelpreis und verband östlichen Humanismus mit universaler Ethik?', options: ['Rabindranath Tagore', 'Sri Aurobindo', 'Chanakya', 'Shankara'], answer: 'Rabindranath Tagore' },
        { q: 'Welches Ziel hat die Überwindung des Leids (Dukkha) im Buddhismus?', options: ['Nirvana', 'Karma', 'Samsara', 'Maya'], answer: 'Nirvana' },
        { q: 'Welche Lehre beschreibt im Buddhismus das Fehlen eines unveränderlichen Selbst?', options: ['Anatta', 'Brahman', 'Maya', 'Dharmaśāstra'], answer: 'Anatta' },
        { q: 'Welcher Weg gehört zur buddhistischen Lehre von der Überwindung des Leids?', options: ['Der Edle Achtfache Pfad', 'Die sieben Säulen des Staates', 'Der kategorische Imperativ', 'Wu Wei'], answer: 'Der Edle Achtfache Pfad' },
        { q: 'Welche Schule begründete Nagarjuna?', options: ['Madhyamaka', 'Advaita Vedanta', 'Soto-Zen', 'Mohismus'], answer: 'Madhyamaka' },
        { q: 'Wie heißt Nagarjunas Lehre vom Entstehen aller Dinge in wechselseitiger Abhängigkeit?', options: ['Abhängiges Entstehen', 'Reines Erleben', 'Universale Liebe', 'Prästabilierte Harmonie'], answer: 'Abhängiges Entstehen' },
        { q: 'Welcher Begriff bezeichnet bei Shankara die kosmische Illusion der Vielheit?', options: ['Maya', 'Nirvana', 'Ren', 'Asabiyya'], answer: 'Maya' },
        { q: 'Wodurch wird im Advaita Vedanta Befreiung erlangt?', options: ['Durch Erkenntnis der Nicht-Dualität', 'Durch politische Herrschaft', 'Durch sinnlichen Genuss', 'Durch Angriffskriege'], answer: 'Durch Erkenntnis der Nicht-Dualität' },
        { q: 'Welches Werk wird Chanakya zugeschrieben?', options: ['Arthashastra', 'Gitanjali', 'Daodejing', 'Shōbōgenzō'], answer: 'Arthashastra' },
        { q: 'Mit welchem Reich war Chanakya politisch verbunden?', options: ['Mit dem Maurya-Reich', 'Mit dem Römischen Reich', 'Mit der Song-Dynastie', 'Mit dem Osmanischen Reich'], answer: 'Mit dem Maurya-Reich' },
        { q: 'Wie nennt Sri Aurobindo seine Verbindung spiritueller Entwicklung mit dem gesamten Leben?', options: ['Integraler Yoga', 'Wu Wei', 'Zazen', 'Scholastik'], answer: 'Integraler Yoga' },
        { q: 'Welches Werk stammt von Sri Aurobindo?', options: ['The Life Divine', 'Die Analekten', 'Muqaddima', 'Summa Theologiae'], answer: 'The Life Divine' },
        { q: 'Welches Werk machte Rabindranath Tagore international besonders bekannt?', options: ['Gitanjali', 'Arthashastra', 'Brahmasutra-Bhashya', 'Mūlamadhyamakakārikā'], answer: 'Gitanjali' },
        { q: 'Welche Haltung kritisierte Tagore besonders?', options: ['Blinden Nationalismus', 'Universalen Humanismus', 'Künstlerische Bildung', 'Interkulturellen Austausch'], answer: 'Blinden Nationalismus' }
      ]
    },
    china: {
      title: 'China',
      questions: [
        { q: 'Welcher Begriff steht im Konfuzianismus zentral für menschliche Güte?', options: ['Ren', 'Wu Wei', 'Qi', 'Yin'], answer: 'Ren' },
        { q: 'Wer gilt als Verfasser des Daodejing?', options: ['Laozi', 'Konfuzius', 'Zhuangzi', 'Mozi'], answer: 'Laozi' },
        { q: 'Was bedeutet Wu Wei im Daoismus?', options: ['Nicht-Handeln (im Einklang mit dem Dao)', 'Strikter Gehorsam', 'Aggressive Expansion', 'Absolutes Schweigen'], answer: 'Nicht-Handeln (im Einklang mit dem Dao)' },
        { q: 'Welcher Denker vertrat einen strikten Universalismus (allgemeine Menschenliebe)?', options: ['Mozi', 'Mencius', 'Zhuangzi', 'Laozi'], answer: 'Mozi' },
        { q: 'Wer betonte, dass die menschliche Natur von Grund auf gut sei?', options: ['Mencius', 'Xunzi', 'Han Feizi', 'Konfuzius'], answer: 'Mencius' },
        { q: 'Wer ist ein Meister des daoistischen Relativismus und Humors?', options: ['Zhuangzi', 'Konfuzius', 'Zhu Xi', 'Mozi'], answer: 'Zhuangzi' },
        { q: 'Welcher Denker schuf die große Synthese des Neo-Konfuzianismus?', options: ['Zhu Xi', 'Laozi', 'Mencius', 'Konfuzius'], answer: 'Zhu Xi' },
        { q: 'Was beschreibt das Dao am besten?', options: ['Das unergründliche, alles durchdringende Prinzip', 'Ein persönlicher Schöpfergott', 'Eine strenge Gesetzessammlung', 'Der Herrscher der Erde'], answer: 'Das unergründliche, alles durchdringende Prinzip' },
        { q: 'Wie heißt die Sammlung der Konfuzius zugeschriebenen Gespräche?', options: ['Analekten', 'Daodejing', 'Mengzi', 'Shōbōgenzō'], answer: 'Analekten' },
        { q: 'Welcher konfuzianische Begriff bezeichnet Ritual und angemessenes Verhalten?', options: ['Li', 'Ren', 'Dao', 'Qi'], answer: 'Li' },
        { q: 'Welche Haltung empfiehlt Laozi gegenüber erzwungenem Handeln?', options: ['Natürlichkeit und Zurückhaltung', 'Aggressive Durchsetzung', 'Starre Ritualpflicht', 'Militärische Expansion'], answer: 'Natürlichkeit und Zurückhaltung' },
        { q: 'Welches berühmte Gleichnis stammt von Zhuangzi?', options: ['Der Schmetterlingstraum', 'Das Höhlengleichnis', 'Der fliegende Mensch', 'Das Rad der Fortuna'], answer: 'Der Schmetterlingstraum' },
        { q: 'Warum lehnte Zhuangzi der Überlieferung nach Regierungsämter ab?', options: ['Um seine Unabhängigkeit zu bewahren', 'Um eine Armee aufzubauen', 'Um Kaufmann zu werden', 'Um die Rituale zu verbieten'], answer: 'Um seine Unabhängigkeit zu bewahren' },
        { q: 'Wie heißt Mozis Lehre der allgemeinen Menschenliebe?', options: ['Jian’ai', 'Wu Wei', 'Anatta', 'Asabiyya'], answer: 'Jian’ai' },
        { q: 'Welche politische Praxis verurteilte Mozi ausdrücklich?', options: ['Angriffskriege', 'Friedliche Diplomatie', 'Sparsame Verwaltung', 'Allgemeine Fürsorge'], answer: 'Angriffskriege' },
        { q: 'Was sind bei Mencius die „vier Keime“?', options: ['Anlagen moralischer Tugenden', 'Vier politische Ämter', 'Vier Naturstoffe', 'Vier Meditationsstufen'], answer: 'Anlagen moralischer Tugenden' },
        { q: 'Was kann ein tyrannischer Herrscher nach Mencius verlieren?', options: ['Das Mandat des Himmels', 'Das Dao der Natur', 'Die Buddha-Natur', 'Die prästabilierte Harmonie'], answer: 'Das Mandat des Himmels' },
        { q: 'Welche zwei Grundbegriffe verbindet Zhu Xi in seiner Ontologie?', options: ['Li und Qi', 'Ren und Wu Wei', 'Yin und Nirvana', 'Atman und Anatta'], answer: 'Li und Qi' },
        { q: 'Welche Texte kommentierte Zhu Xi besonders einflussreich?', options: ['Die Vier Bücher', 'Die Veden', 'Platons Dialoge', 'Den Palikanon'], answer: 'Die Vier Bücher' },
        { q: 'In welcher Dynastie wirkte Zhu Xi?', options: ['Song-Dynastie', 'Qin-Dynastie', 'Maurya-Dynastie', 'Tokugawa-Dynastie'], answer: 'Song-Dynastie' }
      ]
    },
    japan: {
      title: 'Japan',
      questions: [
        { q: 'Wer brachte den Soto-Zen nach Japan und schrieb das Shobogenzo?', options: ['Dōgen', 'Nishida Kitarō', 'Watsuji Tetsurō', 'Suzuki'], answer: 'Dōgen' },
        { q: 'Welcher Philosoph begründete die Kyoto-Schule?', options: ['Nishida Kitarō', 'Watsuji Tetsurō', 'Dōgen', 'Yukio Mishima'], answer: 'Nishida Kitarō' },
        { q: 'Was analysierte Watsuji Tetsurō in seinem Hauptwerk "Fudo"?', options: ['Den Zusammenhang von Klima und Kultur (Ethik)', 'Die Struktur der japanischen Sprache', 'Die Logik des reinen Erlebens', 'Zen-Meditation'], answer: 'Den Zusammenhang von Klima und Kultur (Ethik)' },
        { q: 'Was bezeichnet der Begriff "Ma" in der japanischen Ästhetik?', options: ['Den leeren, aber wirkungsvollen Zwischenraum', 'Den Samurai-Kodex', 'Die Teezeremonie', 'Das absolute Nichts'], answer: 'Den leeren, aber wirkungsvollen Zwischenraum' },
        { q: 'Wie nennt Nishida Kitarō die Erfahrung vor der Trennung in Subjekt und Objekt?', options: ['Reines Erleben', 'Dialektik', 'Satori', 'Karma'], answer: 'Reines Erleben' },
        { q: 'Was ist Zazen?', options: ['Die Sitzmeditation im Zen-Buddhismus', 'Eine Kampfsportart', 'Die Kunst des Bogenschießens', 'Ein Ritualschwert'], answer: 'Die Sitzmeditation im Zen-Buddhismus' },
        { q: 'Welches Konzept verbindet bei Dōgen Sein und Zeit untrennbar miteinander?', options: ['Uji (Sein-Zeit)', 'Samsara', 'Bushido', 'Wabi-Sabi'], answer: 'Uji (Sein-Zeit)' },
        { q: 'Welche ethische Dimension steht bei Watsuji Tetsurō im Zentrum?', options: ['Die Zwischenmenschlichkeit (Rinri)', 'Der Egoismus', 'Der Utilitarismus', 'Der Kategorische Imperativ'], answer: 'Die Zwischenmenschlichkeit (Rinri)' },
        { q: 'Was bedeutet Shikantaza in Dōgens Zen-Praxis?', options: ['Nur-Sitzen', 'Schriftstudium', 'Ritueller Tanz', 'Logische Widerlegung'], answer: 'Nur-Sitzen' },
        { q: 'Wie versteht Dōgen das Verhältnis von Übung und Erleuchtung?', options: ['Die Übung ist selbst Ausdruck der Erleuchtung', 'Erleuchtung macht jede Übung überflüssig', 'Übung und Erleuchtung widersprechen sich', 'Erleuchtung ist nur theoretisches Wissen'], answer: 'Die Übung ist selbst Ausdruck der Erleuchtung' },
        { q: 'Welches Kloster gründete Dōgen?', options: ['Eihei-ji', 'Shaolin', 'Nalanda', 'Visva-Bharati'], answer: 'Eihei-ji' },
        { q: 'In welcher historischen Epoche wirkte Dōgen?', options: ['Kamakura-Zeit', 'Meiji-Zeit', 'Song-Dynastie', 'Renaissance'], answer: 'Kamakura-Zeit' },
        { q: 'Was bezeichnet Nishidas Begriff Basho?', options: ['Den Ort, der alles Sein ermöglicht', 'Ein politisches Gesetz', 'Eine Form der Sitzhaltung', 'Ein klimatisches Gebiet'], answer: 'Den Ort, der alles Sein ermöglicht' },
        { q: 'Welcher Begriff steht bei Nishida für den Grund, der alles Sein ermöglicht?', options: ['Absolutes Nichts', 'Absolute Materie', 'Gesellschaftsvertrag', 'Kategorischer Imperativ'], answer: 'Absolutes Nichts' },
        { q: 'Welches Werk stammt von Nishida Kitarō?', options: ['Über das Gute', 'Das andere Geschlecht', 'Der Fürst', 'Die Analekten'], answer: 'Über das Gute' },
        { q: 'Welche Tradition verband Nishida mit Kant, Hegel und Husserl?', options: ['Zen-buddhistische Erfahrung', 'Römische Stoa', 'Islamische Scholastik', 'Britischen Empirismus'], answer: 'Zen-buddhistische Erfahrung' },
        { q: 'Was bedeutet Fūdo bei Watsuji?', options: ['Klima und Kultur', 'Sein und Zeit', 'Ritual und Sitte', 'Leere und Form'], answer: 'Klima und Kultur' },
        { q: 'Welche westliche Position kritisierte Watsuji als zu einseitig?', options: ['Den abstrakten Individualismus', 'Den Universalismus', 'Die Umweltethik', 'Die Zwischenmenschlichkeit'], answer: 'Den abstrakten Individualismus' },
        { q: 'Welche Dimension ergänzte Watsuji gegenüber Heideggers Betonung der Zeit?', options: ['Raum und Klima', 'Mathematik und Logik', 'Sprache und Grammatik', 'Technik und Industrie'], answer: 'Raum und Klima' },
        { q: 'Welche Aussage gehört zu Dōgens Buddha-Natur-Lehre?', options: ['Alle Dinge sind Buddha-Natur', 'Nur Menschen besitzen Buddha-Natur', 'Buddha-Natur ist ein politisches Amt', 'Buddha-Natur entsteht durch Reichtum'], answer: 'Alle Dinge sind Buddha-Natur' }
      ]
    },
    islam: {
      title: 'Islamische Welt',
      questions: [
        { q: 'Wer ist als der "Zweite Lehrer" (nach Aristoteles) bekannt?', options: ['Al-Farabi', 'Avicenna', 'Averroes', 'Al-Ghazali'], answer: 'Al-Farabi' },
        { q: 'Welcher Denker prägte die Medizin Europas für Jahrhunderte mit dem "Kanon der Medizin"?', options: ['Avicenna (Ibn Sina)', 'Averroes (Ibn Rushd)', 'Ibn Khaldun', 'Al-Kindi'], answer: 'Avicenna (Ibn Sina)' },
        { q: 'Wer verfasste die berühmten Aristoteles-Kommentare?', options: ['Averroes (Ibn Rushd)', 'Al-Farabi', 'Avicenna', 'Al-Ghazali'], answer: 'Averroes (Ibn Rushd)' },
        { q: 'Welches Buch verfasste Al-Ghazali als radikale Kritik an den Philosophen?', options: ['Die Inkohärenz der Philosophen', 'Der Kanon der Medizin', 'Die Muqaddima', 'Der Musterstaat'], answer: 'Die Inkohärenz der Philosophen' },
        { q: 'Wer gilt als Pionier der Soziologie und Geschichtstheorie (Muqaddima)?', options: ['Ibn Khaldun', 'Avicenna', 'Al-Farabi', 'Averroes'], answer: 'Ibn Khaldun' },
        { q: 'Wie versuchte Averroes den Konflikt zwischen Philosophie und Religion zu lösen?', options: ['Beide drücken dieselbe Wahrheit in unterschiedlicher Form aus', 'Religion ist reine Illusion', 'Philosophie muss verboten werden', 'Nur Mystik bringt Erkenntnis'], answer: 'Beide drücken dieselbe Wahrheit in unterschiedlicher Form aus' },
        { q: 'Welches Gedankenexperiment von Avicenna demonstriert die Existenz der Seele unabhängig vom Körper?', options: ['Der fliegende Mensch', 'Das Höhlengleichnis', 'Buridans Esel', 'Das Gehirn im Tank'], answer: 'Der fliegende Mensch' },
        { q: 'Welche theologische Strömung kritisierte Al-Ghazali besonders stark zugunsten mystischer Erkenntnis?', options: ['Den strengen Rationalismus', 'Den Polytheismus', 'Den Daoismus', 'Den Empirismus'], answer: 'Den strengen Rationalismus' },
        { q: 'Wie heißt Al-Farabis politisches Hauptwerk?', options: ['Der Musterstaat', 'Die Muqaddima', 'Der Kanon der Medizin', 'Die Inkohärenz der Philosophen'], answer: 'Der Musterstaat' },
        { q: 'Welche antike Disziplin entwickelte Al-Farabi in der islamischen Philosophie weiter?', options: ['Logik', 'Stoische Askese', 'Epikureische Lustlehre', 'Kynische Lebenskunst'], answer: 'Logik' },
        { q: 'Welche Unterscheidung ist zentral für Avicennas Metaphysik?', options: ['Wesen und Existenz', 'These und Antithese', 'Ren und Li', 'Sein und Zeit'], answer: 'Wesen und Existenz' },
        { q: 'Wie heißt Avicennas umfassendes philosophisches Werk?', options: ['Das Buch der Heilung', 'Der Musterstaat', 'Die Muqaddima', 'Die Wiederbelebung der religiösen Wissenschaften'], answer: 'Das Buch der Heilung' },
        { q: 'Unter welchem Namen ist Ibn Rushd im lateinischen Westen bekannt?', options: ['Averroes', 'Avicenna', 'Al-Farabi', 'Ibn Khaldun'], answer: 'Averroes' },
        { q: 'Welches Werk schrieb Averroes als Antwort auf Al-Ghazalis Kritik?', options: ['Die Widerlegung der Widerlegung', 'Der Kanon der Medizin', 'Der Musterstaat', 'Die Wiederbelebung der religiösen Wissenschaften'], answer: 'Die Widerlegung der Widerlegung' },
        { q: 'Welcher mystischen Tradition wandte sich Al-Ghazali zu?', options: ['Dem Sufismus', 'Dem Daoismus', 'Dem Stoizismus', 'Dem Zen-Buddhismus'], answer: 'Dem Sufismus' },
        { q: 'Welche philosophische Annahme kritisierte Al-Ghazali besonders?', options: ['Die notwendige Kausalität', 'Die Existenz moralischer Regeln', 'Die Bedeutung religiöser Praxis', 'Die Möglichkeit innerer Erfahrung'], answer: 'Die notwendige Kausalität' },
        { q: 'Was bedeutet Asabiyya bei Ibn Khaldun?', options: ['Sozialer Zusammenhalt', 'Individuelle Meditation', 'Göttliche Offenbarung', 'Logische Deduktion'], answer: 'Sozialer Zusammenhalt' },
        { q: 'Wie erklärt Ibn Khaldun den Wandel von Zivilisationen?', options: ['Durch zyklischen Aufstieg und Niedergang', 'Durch unveränderliche Herrschaft', 'Nur durch Naturkatastrophen', 'Durch vollständigen Zufall'], answer: 'Durch zyklischen Aufstieg und Niedergang' },
        { q: 'In welchem Werk entwickelte Ibn Khaldun seine Geschichts- und Gesellschaftstheorie?', options: ['Muqaddima', 'Daodejing', 'Gitanjali', 'Summa contra Gentiles'], answer: 'Muqaddima' },
        { q: 'Welche Tätigkeit übte Ibn Khaldun neben seiner Gelehrsamkeit aus?', options: ['Diplomat und Richter', 'Klostergründer in Japan', 'Lehrer an Platons Akademie', 'Dichter am Maurya-Hof'], answer: 'Diplomat und Richter' }
      ]
    },
    antike: {
      title: 'Antike',
      questions: [
        { q: 'Welcher Philosoph entwickelte die Ideenlehre?', options: ['Platon', 'Epikur', 'Heraklit', 'Zenon von Kition'], answer: 'Platon' },
        { q: 'Wofür steht der Übergang vom Mythos zum Logos?', options: ['Für rationale Erklärungen der Welt', 'Für die Abschaffung der Politik', 'Für die Entstehung des Buchdrucks', 'Für die Trennung von Kunst und Musik'], answer: 'Für rationale Erklärungen der Welt' },
        { q: 'Wer begründete die Stoa?', options: ['Zenon von Kition', 'Parmenides', 'Sokrates', 'Aristoteles'], answer: 'Zenon von Kition' },
        { q: 'Welche Methode ist besonders mit Sokrates verbunden?', options: ['Dialogische Prüfung', 'Experimentelle Physik', 'Psychoanalyse', 'Historischer Materialismus'], answer: 'Dialogische Prüfung' },
        { q: 'Was bezeichnet Aristoteles als Ziel eines gelingenden Lebens?', options: ['Eudaimonia', 'Cogito', 'Dekonstruktion', 'Entfremdung'], answer: 'Eudaimonia' },
        { q: 'Welcher Vorsokratiker betonte den beständigen Wandel?', options: ['Heraklit', 'Parmenides', 'Thales', 'Epikur'], answer: 'Heraklit' },
        { q: 'Welches Grundprinzip nahm Thales als Ursprung aller Dinge an?', options: ['Wasser', 'Feuer', 'Luft', 'Atome'], answer: 'Wasser' },
        { q: 'Wer vertrat die Auffassung, dass das Sein unveränderlich ist?', options: ['Parmenides', 'Heraklit', 'Epikur', 'Sokrates'], answer: 'Parmenides' },
        { q: 'An welcher Schule lehrte Platon?', options: ['An der Akademie', 'Am Lykeion', 'Im Garten', 'In der Stoa Poikile'], answer: 'An der Akademie' },
        { q: 'Welche Lehre beeinflusste Epikurs Naturphilosophie?', options: ['Der Atomismus', 'Der Idealismus', 'Die Scholastik', 'Der Existenzialismus'], answer: 'Der Atomismus' },
        { q: 'Wer gründete das Lykeion in Athen?', options: ['Aristoteles', 'Platon', 'Zenon von Kition', 'Thales'], answer: 'Aristoteles' },
        { q: 'Was gilt in der stoischen Ethik als höchstes Gut?', options: ['Tugend', 'Reichtum', 'Ruhm', 'Sinnlicher Genuss'], answer: 'Tugend' },
        { q: 'Wer sagte sinngemäß, man könne nicht zweimal in denselben Fluss steigen (Panta rhei)?', options: ['Heraklit', 'Thales', 'Parmenides', 'Sokrates'], answer: 'Heraklit' },
        { q: 'Wer sah in der "Ideenlehre" die wahre Realität jenseits der Sinnenwelt?', options: ['Platon', 'Aristoteles', 'Epikur', 'Zenon'], answer: 'Platon' },
        { q: 'Welcher antike Denker wurde in Athen zum Tode verurteilt und starb durch den Schierlingsbecher?', options: ['Sokrates', 'Thales', 'Parmenides', 'Heraklit'], answer: 'Sokrates' },
        { q: 'Welcher Philosoph lehrte, dass man das Streben nach Lust auf einfache, ungestörte Freuden beschränken sollte?', options: ['Epikur', 'Platon', 'Zenon', 'Aristoteles'], answer: 'Epikur' },
        { q: 'Welcher Denker argumentierte streng logisch, dass Veränderung und Bewegung nur eine Illusion sind?', options: ['Parmenides', 'Heraklit', 'Thales', 'Sokrates'], answer: 'Parmenides' },
        { q: 'Wer verfasste die "Nikomachische Ethik"?', options: ['Aristoteles', 'Platon', 'Sokrates', 'Epikur'], answer: 'Aristoteles' },
        { q: 'Von wem stammt die Einteilung der Naturdinge in Form und Materie (Hylemorphismus)?', options: ['Aristoteles', 'Zenon', 'Thales', 'Parmenides'], answer: 'Aristoteles' },
        { q: 'Wer war der Lehrer von Platon?', options: ['Sokrates', 'Aristoteles', 'Heraklit', 'Thales'], answer: 'Sokrates' }
      ],
    },
    mittelalter: {
      title: 'Mittelalter',
      questions: [
        { q: 'Welche Grundfrage prägt die mittelalterliche Philosophie besonders?', options: ['Das Verhältnis von Glaube und Vernunft', 'Die Funktionsweise des Internets', 'Die Evolution durch natürliche Selektion', 'Die industrielle Arbeitsteilung'], answer: 'Das Verhältnis von Glaube und Vernunft' },
        { q: 'Wer verfasste die „Summa Theologiae“?', options: ['Thomas von Aquin', 'Boethius', 'Augustinus', 'Meister Eckhart'], answer: 'Thomas von Aquin' },
        { q: 'Welcher Denker unterschied zwischen dem irdischen Staat und dem Gottesstaat?', options: ['Augustinus', 'Boethius', 'Thomas von Aquin', 'Meister Eckhart'], answer: 'Augustinus' },
        { q: 'Welches Werk schrieb Boethius?', options: ['Trost der Philosophie', 'Der Fürst', 'Leviathan', 'Kritik der reinen Vernunft'], answer: 'Trost der Philosophie' },
        { q: 'Wer verband die Philosophie des Aristoteles systematisch mit der christlichen Theologie?', options: ['Thomas von Aquin', 'Augustinus', 'Boethius', 'Meister Eckhart'], answer: 'Thomas von Aquin' },
        { q: 'Mit welcher Strömung wird Meister Eckhart vor allem verbunden?', options: ['Mystik', 'Empirismus', 'Utilitarismus', 'Existenzialismus'], answer: 'Mystik' },
        { q: 'Wer schrieb die „Bekenntnisse“?', options: ['Augustinus', 'Boethius', 'Meister Eckhart', 'Thomas von Aquin'], answer: 'Augustinus' },
        { q: 'Welcher Denker schrieb den „Trost der Philosophie“ während seiner Gefangenschaft?', options: ['Boethius', 'Augustinus', 'Thomas von Aquin', 'Meister Eckhart'], answer: 'Boethius' },
        { q: 'Wer betonte in seinen Predigten die innere Gelassenheit und Gottesnähe?', options: ['Meister Eckhart', 'Augustinus', 'Boethius', 'Thomas von Aquin'], answer: 'Meister Eckhart' },
        { q: 'Welche antike Philosophie prägte Augustinus besonders?', options: ['Der Neuplatonismus', 'Der Epikureismus', 'Der Skeptizismus', 'Der Kynismus'], answer: 'Der Neuplatonismus' },
        { q: 'Welchen Philosophen integrierte Thomas von Aquin umfassend in die christliche Theologie?', options: ['Aristoteles', 'Epikur', 'Heraklit', 'Sokrates'], answer: 'Aristoteles' },
        { q: 'Was bezeichnet „Scholastik“?', options: ['Eine mittelalterliche Lehr- und Argumentationsmethode', 'Eine antike Staatsform', 'Eine moderne Kunstbewegung', 'Eine naturwissenschaftliche Messmethode'], answer: 'Eine mittelalterliche Lehr- und Argumentationsmethode' },
        { q: 'Welcher Begriff steht bei Meister Eckhart für den tiefsten, göttlichen Kern des Menschen?', options: ['Seelengrund', 'Cogito', 'Übermensch', 'Dasein'], answer: 'Seelengrund' },
        { q: 'Wie heißt Augustinus\' berühmtes Werk über das himmlische und irdische Reich auf Latein?', options: ['De civitate Dei', 'Summa Theologiae', 'Tractatus logico-philosophicus', 'Leviathan'], answer: 'De civitate Dei' },
        { q: 'Welcher Denker behandelte das Verhältnis von göttlicher Vorsehung und menschlicher Freiheit?', options: ['Boethius', 'Augustinus', 'Thomas von Aquin', 'Meister Eckhart'], answer: 'Boethius' },
        { q: 'Welcher antike Denker wurde im Mittelalter oft einfach nur als „Der Philosoph“ zitiert?', options: ['Aristoteles', 'Platon', 'Sokrates', 'Epikur'], answer: 'Aristoteles' },
        { q: 'Was meint Thomas von Aquin mit „natürlicher Theologie“?', options: ['Gotteserkenntnis durch Vernunft ohne göttliche Offenbarung', 'Ein Leben im Kloster in der Natur', 'Die Leugnung jeglicher göttlichen Kraft', 'Die mystische Erfahrung im Wald'], answer: 'Gotteserkenntnis durch Vernunft ohne göttliche Offenbarung' },
        { q: 'Welcher mittelalterliche Denker formulierte die fünf Wege der Gotteserkenntnis?', options: ['Thomas von Aquin', 'Augustinus', 'Boethius', 'Meister Eckhart'], answer: 'Thomas von Aquin' },
        { q: 'Welchem religiösen Orden gehörte Thomas von Aquin an?', options: ['Dominikaner', 'Franziskaner', 'Jesuiten', 'Benediktiner'], answer: 'Dominikaner' },
        { q: 'Mit welchem Bild beschreibt Boethius in seinem Werk die Unbeständigkeit des irdischen Glücks?', options: ['Das Rad der Fortuna', 'Die Höhle', 'Der unsichtbare Faden', 'Die Maschine'], answer: 'Das Rad der Fortuna' }
      ],
    },
    neuzeit: {
      title: 'Frühe Neuzeit',
      questions: [
        { q: 'Wer formulierte „Ich denke, also bin ich“?', options: ['René Descartes', 'David Hume', 'John Locke', 'Thomas Hobbes'], answer: 'René Descartes' },
        { q: 'Welcher Philosoph beschrieb den Staat als „Leviathan“?', options: ['Thomas Hobbes', 'Baruch de Spinoza', 'Gottfried Wilhelm Leibniz', 'Jean-Jacques Rousseau'], answer: 'Thomas Hobbes' },
        { q: 'Wer verband natürliche Rechte mit Leben, Freiheit und Eigentum?', options: ['John Locke', 'Niccolò Machiavelli', 'René Descartes', 'David Hume'], answer: 'John Locke' },
        { q: 'Welche Position verbindet man mit Spinoza?', options: ['Gott oder Natur als eine Substanz', 'Die Ideenlehre', 'Den kategorischen Imperativ', 'Die Banalität des Bösen'], answer: 'Gott oder Natur als eine Substanz' },
        { q: 'Wer kritisierte die Annahme, Kausalität sei unmittelbar erkennbar?', options: ['David Hume', 'Gottfried Wilhelm Leibniz', 'Jean-Jacques Rousseau', 'Niccolò Machiavelli'], answer: 'David Hume' },
        { q: 'Von wem stammt die „Monadologie“?', options: ['Gottfried Wilhelm Leibniz', 'John Locke', 'Thomas Hobbes', 'René Descartes'], answer: 'Gottfried Wilhelm Leibniz' },
        { q: 'Wer schrieb „Der Fürst“?', options: ['Niccolò Machiavelli', 'Thomas Hobbes', 'John Locke', 'Jean-Jacques Rousseau'], answer: 'Niccolò Machiavelli' },
        { q: 'Welcher Denker verstand den Geist zunächst als „unbeschriebenes Blatt“?', options: ['John Locke', 'René Descartes', 'Baruch de Spinoza', 'Gottfried Wilhelm Leibniz'], answer: 'John Locke' },
        { q: 'Welcher Begriff bezeichnet Descartes’ Trennung von Geist und Körper?', options: ['Substanzdualismus', 'Monismus', 'Materialismus', 'Utilitarismus'], answer: 'Substanzdualismus' },
        { q: 'Von wem stammt die Idee des „allgemeinen Willens“?', options: ['Jean-Jacques Rousseau', 'Thomas Hobbes', 'David Hume', 'Niccolò Machiavelli'], answer: 'Jean-Jacques Rousseau' },
        { q: 'Welche Erkenntnisquelle betont der Empirismus?', options: ['Erfahrung', 'Angeborene Ideen allein', 'Offenbarung allein', 'Mathematische Deduktion allein'], answer: 'Erfahrung' },
        { q: 'Wie nennt Leibniz die einfachen geistartigen Einheiten der Wirklichkeit?', options: ['Monaden', 'Ideen', 'Atome', 'Kategorien'], answer: 'Monaden' },
        { q: 'Wer riet politischen Herrschern, eher gefürchtet als geliebt zu werden?', options: ['Niccolò Machiavelli', 'Thomas Hobbes', 'John Locke', 'Jean-Jacques Rousseau'], answer: 'Niccolò Machiavelli' },
        { q: 'Wer verfasste das einflussreiche Werk „Emile oder Über die Erziehung“?', options: ['Jean-Jacques Rousseau', 'John Locke', 'David Hume', 'René Descartes'], answer: 'Jean-Jacques Rousseau' },
        { q: 'Welcher Denker vertrat die Ansicht, dass der menschliche Geist bei der Geburt ein „unbeschriebenes Blatt“ (Tabula rasa) sei?', options: ['John Locke', 'Baruch de Spinoza', 'Gottfried Wilhelm Leibniz', 'Thomas Hobbes'], answer: 'John Locke' },
        { q: 'Wer behauptete optimistisch, wir leben in der „besten aller möglichen Welten“?', options: ['Gottfried Wilhelm Leibniz', 'David Hume', 'Niccolò Machiavelli', 'René Descartes'], answer: 'Gottfried Wilhelm Leibniz' },
        { q: 'Welcher Philosoph erregte Aufsehen mit der These, dass Gott und Natur dasselbe seien („Deus sive Natura“)?', options: ['Baruch de Spinoza', 'Thomas Hobbes', 'John Locke', 'Jean-Jacques Rousseau'], answer: 'Baruch de Spinoza' },
        { q: 'Von wem stammt der Satz „Der Mensch ist dem Menschen ein Wolf“ (Homo homini lupus)?', options: ['Thomas Hobbes', 'David Hume', 'Niccolò Machiavelli', 'Baruch de Spinoza'], answer: 'Thomas Hobbes' },
        { q: 'Welcher skeptische Philosoph weckte Immanuel Kant sprichwörtlich aus seinem „dogmatischen Schlummer“?', options: ['David Hume', 'John Locke', 'René Descartes', 'Gottfried Wilhelm Leibniz'], answer: 'David Hume' },
        { q: 'Wer entwickelte die Erkenntnismethode des „methodischen Zweifels“?', options: ['René Descartes', 'Baruch de Spinoza', 'Thomas Hobbes', 'Niccolò Machiavelli'], answer: 'René Descartes' }
      ],
    },
    moderne: {
      title: 'Klassische Moderne',
      questions: [
        { q: 'Wer entwickelte den kategorischen Imperativ?', options: ['Immanuel Kant', 'Georg Wilhelm Friedrich Hegel', 'Karl Marx', 'John Stuart Mill'], answer: 'Immanuel Kant' },
        { q: 'Welcher Denker analysierte den Kapitalismus anhand von Klasse und Mehrwert?', options: ['Karl Marx', 'Søren Kierkegaard', 'Arthur Schopenhauer', 'Johann Gottlieb Fichte'], answer: 'Karl Marx' },
        { q: 'Wer schrieb „Die Welt als Wille und Vorstellung“?', options: ['Arthur Schopenhauer', 'Friedrich Nietzsche', 'Friedrich Schelling', 'Georg Wilhelm Friedrich Hegel'], answer: 'Arthur Schopenhauer' },
        { q: 'Mit welchem Denker ist der Utilitarismus besonders verbunden?', options: ['John Stuart Mill', 'Johann Gottlieb Fichte', 'Søren Kierkegaard', 'Immanuel Kant'], answer: 'John Stuart Mill' },
        { q: 'Wer stellte individuelle Existenz und Entscheidung gegen abstrakte Systeme?', options: ['Søren Kierkegaard', 'Georg Wilhelm Friedrich Hegel', 'Karl Marx', 'Friedrich Schelling'], answer: 'Søren Kierkegaard' },
        { q: 'Welcher Philosoph forderte eine „Umwertung aller Werte“?', options: ['Friedrich Nietzsche', 'Immanuel Kant', 'Arthur Schopenhauer', 'John Stuart Mill'], answer: 'Friedrich Nietzsche' },
        { q: 'Wer entwickelte die Wissenschaftslehre?', options: ['Johann Gottlieb Fichte', 'Friedrich Schelling', 'Georg Wilhelm Friedrich Hegel', 'Immanuel Kant'], answer: 'Johann Gottlieb Fichte' },
        { q: 'Welcher Denker verband Natur und Geist in seiner Naturphilosophie?', options: ['Friedrich Schelling', 'Karl Marx', 'John Stuart Mill', 'Søren Kierkegaard'], answer: 'Friedrich Schelling' },
        { q: 'Von wem stammt die „Phänomenologie des Geistes“?', options: ['Georg Wilhelm Friedrich Hegel', 'Immanuel Kant', 'Arthur Schopenhauer', 'Friedrich Nietzsche'], answer: 'Georg Wilhelm Friedrich Hegel' },
        { q: 'Was schützt Mills Freiheitsprinzip?', options: ['Individuelle Freiheit, solange anderen nicht geschadet wird', 'Unbegrenzte staatliche Herrschaft', 'Nur wirtschaftliches Eigentum', 'Die Herrschaft einer einzigen Religion'], answer: 'Individuelle Freiheit, solange anderen nicht geschadet wird' },
        { q: 'Welcher Begriff ist zentral für Schopenhauers Ethik?', options: ['Mitleid', 'Pflicht', 'Klassenkampf', 'Kommunikative Vernunft'], answer: 'Mitleid' },
        { q: 'Welche philosophische Bewegung bereitete Kierkegaard wesentlich vor?', options: ['Existenzphilosophie', 'Positivismus', 'Strukturalismus', 'Stoa'], answer: 'Existenzphilosophie' },
        { q: 'Wer unterschied fundamental zwischen dem „Ding an sich“ und der Erscheinung?', options: ['Immanuel Kant', 'Georg Wilhelm Friedrich Hegel', 'Arthur Schopenhauer', 'Karl Marx'], answer: 'Immanuel Kant' },
        { q: 'Wer prägte im 19. Jahrhundert den Begriff des „Übermenschen“?', options: ['Friedrich Nietzsche', 'Arthur Schopenhauer', 'Søren Kierkegaard', 'John Stuart Mill'], answer: 'Friedrich Nietzsche' },
        { q: 'Welcher Denker beschrieb das Universum als angetrieben von einem blinden, unvernünftigen „Willen“?', options: ['Arthur Schopenhauer', 'Georg Wilhelm Friedrich Hegel', 'Immanuel Kant', 'Johann Gottlieb Fichte'], answer: 'Arthur Schopenhauer' },
        { q: 'Wer verfasste die „Kritik der reinen Vernunft“?', options: ['Immanuel Kant', 'Friedrich Schelling', 'John Stuart Mill', 'Karl Marx'], answer: 'Immanuel Kant' },
        { q: 'Wer interpretierte die Geschichte als einen dialektischen Prozess von These, Antithese und Synthese?', options: ['Georg Wilhelm Friedrich Hegel', 'Immanuel Kant', 'Arthur Schopenhauer', 'Søren Kierkegaard'], answer: 'Georg Wilhelm Friedrich Hegel' },
        { q: 'Wer gilt als Vater der Existenzphilosophie und stellte den einzelnen „Glaubensritter“ ins Zentrum?', options: ['Søren Kierkegaard', 'Friedrich Nietzsche', 'Johann Gottlieb Fichte', 'John Stuart Mill'], answer: 'Søren Kierkegaard' },
        { q: 'Wer erweiterte den Utilitarismus um die Qualität von Freuden (besser ein unzufriedener Sokrates als ein zufriedener Narr)?', options: ['John Stuart Mill', 'Karl Marx', 'Immanuel Kant', 'Friedrich Schelling'], answer: 'John Stuart Mill' },
        { q: 'Welcher Aufklärer und Idealist formulierte das Konzept des „absoluten Ichs“?', options: ['Johann Gottlieb Fichte', 'Georg Wilhelm Friedrich Hegel', 'Arthur Schopenhauer', 'Friedrich Nietzsche'], answer: 'Johann Gottlieb Fichte' }
      ],
    },
    '20jh': {
      title: '20. Jahrhundert',
      questions: [
        { q: 'Wer entwickelte die Idee der Sprachspiele?', options: ['Ludwig Wittgenstein', 'Martin Heidegger', 'Jean-Paul Sartre', 'Jürgen Habermas'], answer: 'Ludwig Wittgenstein' },
        { q: 'Von wem stammt „Sein und Zeit“?', options: ['Martin Heidegger', 'Albert Camus', 'Michel Foucault', 'Hannah Arendt'], answer: 'Martin Heidegger' },
        { q: 'Wer formulierte, dass die Existenz der Essenz vorausgeht?', options: ['Jean-Paul Sartre', 'Ludwig Wittgenstein', 'Jürgen Habermas', 'Simone de Beauvoir'], answer: 'Jean-Paul Sartre' },
        { q: 'Welcher Begriff steht im Zentrum von Camus’ „Mythos des Sisyphos“?', options: ['Das Absurde', 'Der kategorische Imperativ', 'Die Monade', 'Der Gesellschaftsvertrag'], answer: 'Das Absurde' },
        { q: 'Wer analysierte die „Banalität des Bösen“?', options: ['Hannah Arendt', 'Simone de Beauvoir', 'Michel Foucault', 'Jean-Paul Sartre'], answer: 'Hannah Arendt' },
        { q: 'Wer untersuchte moderne Gesellschaften über den Zusammenhang von Macht und Wissen?', options: ['Michel Foucault', 'Jürgen Habermas', 'Albert Camus', 'Ludwig Wittgenstein'], answer: 'Michel Foucault' },
        { q: 'Wer schrieb „Das andere Geschlecht“?', options: ['Simone de Beauvoir', 'Hannah Arendt', 'Judith Butler', 'Martha Nussbaum'], answer: 'Simone de Beauvoir' },
        { q: 'Mit welchem Begriff verbindet Habermas demokratische Verständigung?', options: ['Kommunikative Rationalität', 'Wille zur Macht', 'Absurdität', 'Ontologische Differenz'], answer: 'Kommunikative Rationalität' },
        { q: 'Wie heißt Wittgensteins frühes Hauptwerk?', options: ['Tractatus logico-philosophicus', 'Sein und Zeit', 'Vita activa', 'Das Sein und das Nichts'], answer: 'Tractatus logico-philosophicus' },
        { q: 'Welcher Begriff bezeichnet bei Heidegger die menschliche Existenzweise?', options: ['Dasein', 'Monade', 'Habitus', 'Eudaimonia'], answer: 'Dasein' },
        { q: 'Welche politische Herrschaftsform untersuchte Hannah Arendt besonders?', options: ['Totalitarismus', 'Feudalismus', 'Absolutismus', 'Merkantilismus'], answer: 'Totalitarismus' },
        { q: 'Welche Methode ist besonders mit Foucault verbunden?', options: ['Genealogie', 'Syllogistik', 'Transzendentale Deduktion', 'Sokratische Maieutik'], answer: 'Genealogie' },
        { q: 'Wer analysierte das Panoptikum als Sinnbild für die moderne Überwachungs- und Disziplinargesellschaft?', options: ['Michel Foucault', 'Jürgen Habermas', 'Jean-Paul Sartre', 'Hannah Arendt'], answer: 'Michel Foucault' },
        { q: 'Welcher Denker unterschied zwischen der „Zuhandenheit“ und „Vorhandenheit“ von Dingen?', options: ['Martin Heidegger', 'Ludwig Wittgenstein', 'Albert Camus', 'Simone de Beauvoir'], answer: 'Martin Heidegger' },
        { q: 'Von wem stammt das berühmte Zitat: „Man wird nicht als Frau geboren, man wird es“?', options: ['Simone de Beauvoir', 'Hannah Arendt', 'Judith Butler', 'Martha Nussbaum'], answer: 'Simone de Beauvoir' },
        { q: 'Wer forderte: „Wovon man nicht sprechen kann, darüber muss man schweigen“?', options: ['Ludwig Wittgenstein', 'Martin Heidegger', 'Jean-Paul Sartre', 'Michel Foucault'], answer: 'Ludwig Wittgenstein' },
        { q: 'Welcher Philosoph prägte im Stück Geschlossene Gesellschaft den Satz „Die Hölle, das sind die anderen“?', options: ['Jean-Paul Sartre', 'Albert Camus', 'Martin Heidegger', 'Jürgen Habermas'], answer: 'Jean-Paul Sartre' },
        { q: 'Welcher Frankfurter Denker prägte die „Theorie des kommunikativen Handelns“?', options: ['Jürgen Habermas', 'Michel Foucault', 'Ludwig Wittgenstein', 'Hannah Arendt'], answer: 'Jürgen Habermas' },
        { q: 'Wer verglich das absurde menschliche Leben mit Sisyphos, der ewig einen Stein den Berg hinaufrollt?', options: ['Albert Camus', 'Jean-Paul Sartre', 'Martin Heidegger', 'Simone de Beauvoir'], answer: 'Albert Camus' },
        { q: 'Wer analysierte nach dem Zweiten Weltkrieg tiefgründig das Konzept der „Vita activa“?', options: ['Hannah Arendt', 'Simone de Beauvoir', 'Ludwig Wittgenstein', 'Jürgen Habermas'], answer: 'Hannah Arendt' }
      ],
    },
    gegenwart: {
      title: 'Gegenwart & Zukunft',
      questions: [
        { q: 'Wer vertrat eine naturalistische Theorie des Bewusstseins?', options: ['Daniel Dennett', 'Martha Nussbaum', 'Judith Butler', 'Byung-Chul Han'], answer: 'Daniel Dennett' },
        { q: 'Mit wem ist der Fähigkeitenansatz besonders verbunden?', options: ['Martha Nussbaum', 'Judith Butler', 'Daniel Dennett', 'Byung-Chul Han'], answer: 'Martha Nussbaum' },
        { q: 'Wer prägte die Theorie der Performativität von Geschlecht?', options: ['Judith Butler', 'Martha Nussbaum', 'Daniel Dennett', 'Byung-Chul Han'], answer: 'Judith Butler' },
        { q: 'Von wem stammt die Diagnose der „Müdigkeitsgesellschaft“?', options: ['Byung-Chul Han', 'Daniel Dennett', 'Judith Butler', 'Martha Nussbaum'], answer: 'Byung-Chul Han' },
        { q: 'Welches Thema gehört besonders zur gegenwärtigen Philosophie?', options: ['Ethik künstlicher Intelligenz', 'Die Erfindung der Keilschrift', 'Die ptolemäische Astronomie', 'Die mittelalterliche Lehnsherrschaft'], answer: 'Ethik künstlicher Intelligenz' },
        { q: 'Welche Frage stellt die Philosophie des Geistes an KI-Systeme?', options: ['Ob und wie Bewusstsein erklärbar ist', 'Wie viele Server ein Netzwerk besitzt', 'Welche Schriftart eine App verwendet', 'Wann der Buchdruck erfunden wurde'], answer: 'Ob und wie Bewusstsein erklärbar ist' },
        { q: 'Welches Erklärungsmodell verwendete Dennett für geistige Zustände?', options: ['Den intentionalen Standpunkt', 'Die Ideenlehre', 'Die negative Dialektik', 'Den Gesellschaftsvertrag'], answer: 'Den intentionalen Standpunkt' },
        { q: 'Was stellt Nussbaums Fähigkeitenansatz in den Mittelpunkt?', options: ['Reale menschliche Handlungsmöglichkeiten', 'Nur das Bruttoinlandsprodukt', 'Technische Effizienz', 'Religiöse Einheit'], answer: 'Reale menschliche Handlungsmöglichkeiten' },
        { q: 'Was bedeutet Performativität bei Butler?', options: ['Identität entsteht durch wiederholte soziale Praktiken', 'Identität ist vollständig biologisch festgelegt', 'Sprache hat keine soziale Wirkung', 'Politik ist von Körpern unabhängig'], answer: 'Identität entsteht durch wiederholte soziale Praktiken' },
        { q: 'Was kritisiert Byung-Chul Han an der Leistungsgesellschaft?', options: ['Selbstausbeutung und Erschöpfung', 'Mangelnde Industrialisierung', 'Zu wenig staatliche Zensur', 'Die antike Tugendlehre'], answer: 'Selbstausbeutung und Erschöpfung' },
        { q: 'Welche Frage gehört zur digitalen Ethik?', options: ['Wie algorithmische Entscheidungen fair gestaltet werden', 'Wie Monaden miteinander sprechen', 'Wie ein Lehnswesen organisiert wird', 'Wie die Planeten auf Kristallsphären kreisen'], answer: 'Wie algorithmische Entscheidungen fair gestaltet werden' },
        { q: 'Welches Problem untersucht die gegenwärtige Identitätsphilosophie?', options: ['Wie soziale Normen Selbstbilder prägen', 'Wie viele Elemente das Periodensystem hat', 'Wie Burgen befestigt wurden', 'Wie Dampfmaschinen konstruiert sind'], answer: 'Wie soziale Normen Selbstbilder prägen' },
        { q: 'Welche Philosophin beschrieb das Geschlecht (Gender) als etwas, das durch soziale Wiederholung „performiert“ wird?', options: ['Judith Butler', 'Martha Nussbaum', 'Simone de Beauvoir', 'Hannah Arendt'], answer: 'Judith Butler' },
        { q: 'Welcher Denker prägte die Gegenwartsbegriffe „Müdigkeitsgesellschaft“ und „Transparenzgesellschaft“?', options: ['Byung-Chul Han', 'Daniel Dennett', 'Jürgen Habermas', 'Michel Foucault'], answer: 'Byung-Chul Han' },
        { q: 'Wer hat den „Fähigkeitenansatz“ (Capability Approach) für eine globale Gerechtigkeitstheorie stark mitentwickelt?', options: ['Martha Nussbaum', 'Judith Butler', 'Hannah Arendt', 'Simone de Beauvoir'], answer: 'Martha Nussbaum' },
        { q: 'Welcher amerikanische Denker erklärt das menschliche Bewusstsein als komplexes informationelles Konstrukt („Multiple Drafts Model“)?', options: ['Daniel Dennett', 'Byung-Chul Han', 'Jürgen Habermas', 'Michel Foucault'], answer: 'Daniel Dennett' },
        { q: 'Welche Autorin des Buches „Das Unbehagen der Geschlechter“ revolutionierte die Queer-Theorie?', options: ['Judith Butler', 'Martha Nussbaum', 'Simone de Beauvoir', 'Hannah Arendt'], answer: 'Judith Butler' },
        { q: 'Wer kritisiert die Erosion des Anderen durch die permanente digitale Vernetzung (z. B. in „Die Austreibung des Anderen“)?', options: ['Byung-Chul Han', 'Daniel Dennett', 'Judith Butler', 'Martha Nussbaum'], answer: 'Byung-Chul Han' },
        { q: 'Wer verteidigt vehement die Bedeutung der Geisteswissenschaften in der modernen Demokratie („Nicht für den Profit“)?', options: ['Martha Nussbaum', 'Judith Butler', 'Simone de Beauvoir', 'Byung-Chul Han'], answer: 'Martha Nussbaum' },
        { q: 'Welcher Denker ist als prominenter Vertreter des sogenannten „Neuen Atheismus“ und der naturalistischen Philosophie bekannt?', options: ['Daniel Dennett', 'Byung-Chul Han', 'Martin Heidegger', 'Jean-Paul Sartre'], answer: 'Daniel Dennett' }
      ],
    },
  };

  const shuffle = (items) => {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  };

  const normalizeEra = (value) => {
    const normalized = (value || '').toLocaleLowerCase('de-DE');
    if (normalized.includes('antike')) return 'antike';
    if (normalized.includes('indien')) return 'indien';
    if (normalized.includes('china')) return 'china';
    if (normalized.includes('japan')) return 'japan';
    if (normalized.includes('islam')) return 'islam';
    if (normalized.includes('mittelalter')) return 'mittelalter';
    if (normalized.includes('frühe neuzeit') || normalized.includes('fruehe neuzeit')) return 'neuzeit';
    if (normalized.includes('klassische moderne')) return 'moderne';
    if (normalized.includes('20. jahrhundert')) return '20jh';
    if (normalized.includes('gegenwart')) return 'gegenwart';
    return null;
  };

  const prepareQuestion = (question) => {
    const options = shuffle(question.options);
    return { q: question.q, options, a: options.indexOf(question.answer) };
  };

  const params = new URLSearchParams(window.location.search);
  const bank = questionBanks[normalizeEra(params.get('era'))];
  const qBlock = document.getElementById('questionBlock');
  const aBlock = document.getElementById('answersBlock');
  const nextBtn = document.getElementById('nextBtn');
  const resultBlock = document.getElementById('resultBlock');
  const titleEl = document.getElementById('quizTitle');

  if (!bank) {
    titleEl.textContent = 'Quiz – Epoche fehlt';
    qBlock.textContent = 'Bitte starte das Quiz über eine Epoche der Timeline.';
    nextBtn.classList.add('hidden');
    return;
  }

  const questions = shuffle(bank.questions).slice(0, QUESTIONS_PER_QUIZ).map(prepareQuestion);
  let current = 0;
  let score = 0;

  const renderQuestion = () => {
    const question = questions[current];
    titleEl.textContent = `Quiz – ${bank.title}`;
    qBlock.textContent = question.q;
    aBlock.innerHTML = '';
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => handleAnswer(index, button));
      aBlock.appendChild(button);
    });
    nextBtn.classList.add('hidden');
  };

  const handleAnswer = (selectedIndex, button) => {
    const correctIndex = questions[current].a;
    const buttons = aBlock.querySelectorAll('button');
    if (selectedIndex === correctIndex) {
      score++;
      button.classList.add('answer-correct');
    } else {
      button.classList.add('answer-wrong');
      buttons[correctIndex].classList.add('answer-correct');
    }
    buttons.forEach(answerButton => {
      answerButton.disabled = true;
    });
    nextBtn.classList.remove('hidden');
  };

  nextBtn.addEventListener('click', () => {
    current++;
    if (current < questions.length) {
      renderQuestion();
      return;
    }
    qBlock.textContent = '';
    aBlock.innerHTML = '';
    nextBtn.classList.add('hidden');
    resultBlock.textContent = `Du hast ${score} von ${questions.length} richtig beantwortet.`;
  });

  renderQuestion();
})();
