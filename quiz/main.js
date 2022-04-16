let optionButton = $("quiz__answer");
const answerBtns = $(".quiz__answer");
let currentQuiz = 0;
let optionsData = [];
let currentQuestion = "";
let totalCorrectAnswers = 0;
let quizData;

const checkAnswer = function (e) {
  $(".next").removeClass("hidden");
  const [currentAnswer] = optionsData.filter((answer, index) => {
    return answer.text === e.target.textContent;
  });

  if (currentAnswer.correct) {
    totalCorrectAnswers++;
  }

  $.each(optionsData, (index, button) => {
    if (button.correct) {
      $(answerBtns[index]).css("background", "rgb(16, 211, 16)");
    } else {
      $(answerBtns[index]).css("background", "red");
    }
  });
};

const startGame = function () {
  currentQuestion = quizData[currentQuiz].question;
  optionsData = quizData[currentQuiz].answer;
  $(document).ready(() => {
    $(".question").removeClass("hidden");
    $(".quiz__btns").removeClass("hidden");
    $(".question").html(currentQuestion);
    $.each(answerBtns, (index, button) => {
      $(button).html(optionsData[index].text);

      $(button).click(function (e) {
        checkAnswer(e);
      });
    });
  });
};

const displayResults = function () {
  $(".overlay").removeClass("hidden");
  $(".overlay").html(`
      <div class="modal">
        <h1>Parabéns, você acertou <span>${totalCorrectAnswers}</span> perguntas</h1>
        <button onclick="location.reload()">Try again</button>
      </div>
  `);
};

const nextQuestion = function () {
  currentQuiz++;
  if (currentQuiz >= quizData.length) {
    displayResults();
    return;
  }

  currentQuestion = quizData[currentQuiz].question;
  optionsData = quizData[currentQuiz].answer;
  $(".next").addClass("hidden");

  $(".question").html(currentQuestion);
  $.each(answerBtns, (index, button) => {
    $(button).css("background", "rgb(23, 168, 235)");
    $(button).html(optionsData[index].text);
  });
};

const fetchQuestions = async function () {
  const response = await fetch("https://lotr-quiz.herokuapp.com/read");
  const questionsData = await response.json();
  quizData = questionsData;
};
fetchQuestions();

$(".start").click(() => {
  $(".start").hide();
  startGame();
});

$(".next").click(() => {
  nextQuestion();
});
