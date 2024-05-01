const quizData = [
    {
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language', 'Hyper Tool Markup Language'],
      answer: 'Hyper Text Markup Language'
    },
    {
      question: 'What does CSS stand for?',
      options: ['Colorful Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets'],
      answer: 'Cascading Style Sheets'
    },
    {
      question: 'Which programming language is also known as the "mother of all languages"?',
      options: ['Python', 'C', 'Java', 'Assembly'],
      answer: 'C'
    },
    {
      question: 'What is the output of the following code snippet? \nconsole.log(typeof([]));',
      options: ['object', 'array', 'undefined', 'string'],
      answer: 'object'
    },
    {
      question: 'In JavaScript, what is a closure?',
      options: ['A data structure used to store multiple values', 'A way to protect variables from being modified', 'A function that has access to its outer function scope even after the outer function has finished executing', 'A way to iterate over arrays'],
      answer: 'A function that has access to its outer function scope even after the outer function has finished executing'
    },
    {
      question: 'What is the correct way to declare a variable in Python?',
      options: ['var x = 5;', 'int x = 5;', 'let x = 5;', 'x = 5;'],
      answer: 'x = 5;'
    },
    {
      question: 'What is the result of 2 + 2 * 3 in most programming languages?',
      options: ['8', '10', '12', '14'],
      answer: '8'
    },
    {
      question: 'Which of the following is not a programming language?',
      options: ['Java', 'HTML', 'CSS', 'Ruby'],
      answer: 'HTML'
    },
    {
      question: 'What does the SQL acronym stand for?',
      options: ['Structured Query Language', 'Sequential Query Language', 'Simple Query Language', 'Standardized Query Language'],
      answer: 'Structured Query Language'
    },
    {
      question: 'What does the acronym API stand for?',
      options: ['Advanced Programming Interface', 'Application Programming Interface', 'Automated Programming Interface', 'All Purpose Interface'],
      answer: 'Application Programming Interface'
    }
  ];
  
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const submitButton = document.getElementById('submit');
  const resultElement = document.getElementById('result');
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.classList.add('option-btn');
      button.addEventListener('click', () => selectOption(option));
      optionsElement.appendChild(button);
    });
  }
  
  function selectOption(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    resultElement.innerHTML = `You scored  ${score} out of ${quizData.length}`;
    submitButton.style.display = 'none';
  }
  
  loadQuestion();