// assets/js/quiz.js

(() => {
  const QUESTIONS_PER_QUIZ = 7;

  const questionBanks = {
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
      ],
    },
    mittelalter: {
      title: 'Mittelalter',
      questions: [
        { q: 'Welche Grundfrage prägt die mittelalterliche Philosophie besonders?', options: ['Das Verhältnis von Glaube und Vernunft', 'Die Funktionsweise des Internets', 'Die Evolution durch natürliche Selektion', 'Die industrielle Arbeitsteilung'], answer: 'Das Verhältnis von Glaube und Vernunft' },
        { q: 'Wer verfasste die „Summa Theologiae“?', options: ['Thomas von Aquin', 'Boethius', 'Averroes', 'Meister Eckhart'], answer: 'Thomas von Aquin' },
        { q: 'Unter welchem latinisierten Namen ist Ibn Sina bekannt?', options: ['Avicenna', 'Averroes', 'Augustinus', 'Aristoteles'], answer: 'Avicenna' },
        { q: 'Welches Werk schrieb Boethius?', options: ['Trost der Philosophie', 'Der Fürst', 'Leviathan', 'Kritik der reinen Vernunft'], answer: 'Trost der Philosophie' },
        { q: 'Wessen Aristoteles-Kommentare beeinflussten die europäische Scholastik stark?', options: ['Averroes', 'Sokrates', 'Rousseau', 'Nietzsche'], answer: 'Averroes' },
        { q: 'Mit welcher Strömung wird Meister Eckhart vor allem verbunden?', options: ['Mystik', 'Empirismus', 'Utilitarismus', 'Existenzialismus'], answer: 'Mystik' },
        { q: 'Wer schrieb die „Bekenntnisse“?', options: ['Augustinus', 'Boethius', 'Avicenna', 'Thomas von Aquin'], answer: 'Augustinus' },
        { q: 'Wie heißt Avicennas berühmtes medizinisches Hauptwerk?', options: ['Kanon der Medizin', 'Politik', 'Organon', 'Der Gottesstaat'], answer: 'Kanon der Medizin' },
        { q: 'Unter welchem Namen ist Ibn Ruschd im lateinischen Westen bekannt?', options: ['Averroes', 'Avicenna', 'Boethius', 'Eckhart'], answer: 'Averroes' },
        { q: 'Welche antike Philosophie prägte Augustinus besonders?', options: ['Der Neuplatonismus', 'Der Epikureismus', 'Der Skeptizismus', 'Der Kynismus'], answer: 'Der Neuplatonismus' },
        { q: 'Welchen Philosophen integrierte Thomas von Aquin umfassend in die christliche Theologie?', options: ['Aristoteles', 'Epikur', 'Heraklit', 'Sokrates'], answer: 'Aristoteles' },
        { q: 'Was bezeichnet „Scholastik“?', options: ['Eine mittelalterliche Lehr- und Argumentationsmethode', 'Eine antike Staatsform', 'Eine moderne Kunstbewegung', 'Eine naturwissenschaftliche Messmethode'], answer: 'Eine mittelalterliche Lehr- und Argumentationsmethode' },
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
