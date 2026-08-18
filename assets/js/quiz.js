// assets/js/quiz.js
// Simple quiz engine – reads era from query string and presents 5 random questions

(() => {
  const getQueryParam = (name) => {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
  };

  const era = getQueryParam('era') || 'Unbekannt';

  // Simple static question bank (placeholder). In a real app each era would have its own set.
  const genericQuestions = [
    {
      q: 'Welche Epoche ist bekannt für die Entwicklung der Logik?',
      options: ['Antike', 'Mittelalter', 'Moderne', 'Gegenwart'],
      a: 0,
    },
    {
      q: 'Wer gilt als Begründer der modernen Ethik?',
      options: ['Kant', 'Aristoteles', 'Platon', 'Nietzsche'],
      a: 0,
    },
    {
      q: 'Welche Frage ist zentral für die Metaphysik?',
      options: ['Was ist Wirklichkeit?', 'Wie lautet das Gesetz der Thermodynamik?', 'Wer war der erste Präsident?', 'Wie funktioniert das Internet?'],
      a: 0,
    },
    {
      q: 'Welche philosophische Strömung beschäftigt sich mit Gesellschaft und Politik?',
      options: ['Politische Philosophie', 'Ästhetik', 'Epistemologie', 'Logik'],
      a: 0,
    },
    {
      q: 'Wer schrieb "Kritik der reinen Vernunft"?',
      options: ['Immanuel Kant', 'Friedrich Nietzsche', 'Sokrates', 'Platon'],
      a: 0,
    },
    {
      q: 'Welcher Begriff beschreibt das Studium des Wissens?',
      options: ['Epistemologie', 'Ontologie', 'Ästhetik', 'Rhetorik'],
      a: 0,
    },
    {
      q: 'Welcher Philosoph ist mit dem Existentialismus verbunden?',
      options: ['Jean-Paul Sartre', 'Aristoteles', 'Wittgenstein', 'Descartes'],
      a: 0,
    },
    {
      q: 'Was bedeutet "Dasein" in der Philosophie?',
      options: ['Existenz', 'Wissen', 'Macht', 'Gerechtigkeit'],
      a: 0,
    },
    {
      q: 'Welcher Begriff steht für die Lehre vom guten Leben?',
      options: ['Ethik', 'Logik', 'Metaphysik', 'Rhetorik'],
      a: 0,
    },
    {
      q: 'Welche Epoche betont die Vernunft und Aufklärung?',
      options: ['Aufklärung', 'Mittelalter', 'Antike', 'Postmoderne'],
      a: 0,
    },
  ];

  // Randomly pick 5 questions
  const shuffled = genericQuestions.sort(() => 0.5 - Math.random());
  const questions = shuffled.slice(0, 5);

  let current = 0;
  let score = 0;

  const qBlock = document.getElementById('questionBlock');
  const aBlock = document.getElementById('answersBlock');
  const nextBtn = document.getElementById('nextBtn');
  const resultBlock = document.getElementById('resultBlock');
  const titleEl = document.getElementById('quizTitle');

  const renderQuestion = () => {
    const q = questions[current];
    titleEl.textContent = `Quiz – ${era}`;
    qBlock.textContent = q.q;
    aBlock.innerHTML = '';
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.onclick = () => handleAnswer(idx, btn);
      aBlock.appendChild(btn);
    });
    nextBtn.style.display = 'none';
  };

  const handleAnswer = (selectedIdx, btn) => {
    const correctIdx = questions[current].a;
    const correct = selectedIdx === correctIdx;
    if (correct) {
      score++;
      btn.style.background = '#a5d6a7'; // green
    } else {
      btn.style.background = '#ef9a9a'; // red
      const buttons = aBlock.querySelectorAll('button');
      buttons[correctIdx].style.background = '#a5d6a7';
    }
    const buttons = aBlock.querySelectorAll('button');
    buttons.forEach(b => b.disabled = true);
    nextBtn.style.display = 'inline-block';
  };

  nextBtn.onclick = () => {
    current++;
    if (current < questions.length) {
      renderQuestion();
    } else {
      qBlock.textContent = '';
      aBlock.innerHTML = '';
      nextBtn.style.display = 'none';
      resultBlock.textContent = `Du hast ${score} von ${questions.length} richtig beantwortet.`;
    }
  };

  renderQuestion();
})();
