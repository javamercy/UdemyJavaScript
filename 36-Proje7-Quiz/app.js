function Question(text, choices, answer) {

    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question prototype
Question.prototype.checkAnswer = function(answer) {
    return this.answer.toLowerCase() === answer.toLowerCase();
}


// Quiz Constructor

function Quiz(questions) {

    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}

// Quiz prototype

Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}


// Quiz isFinished

Quiz.prototype.isFinished = function() {

    return this.questions.length === this.questionIndex;
}

// Quiz guess

Quiz.prototype.guess = function(answer) {

    let question = this.getQuestion();
    if (question.checkAnswer(answer)) {

        this.score++;

    }

    this.questionIndex++;


}







let q1 = new Question("What is the best programming language ?", ["C#", "JavaScript", "Python", "Asp.net"], "JavaScript");
let q2 = new Question("What is the most popular programming language ?", ["C#", "Visual Basic", "Nodejs", "JavaScript"], "JavaScript");
let q3 = new Question("What is the best modern programming language ?", ["C#", "JavaScript", "Python", "Ruby"], "JavaScript");
let q4 = new Question("What is the best modern programming language ?", ["C#", "JavaScript", "Python", "Ruby"], "JavaScript");

let questions = [q1, q2, q3];


// Start Quiz

let quiz = new Quiz(questions);

loadQuestion();


function loadQuestion() {

    if (quiz.isFinished()) {

        showScore();
    } else {

        let question = quiz.getQuestion();
        document.querySelector("#question").textContent = question.text;

        let choices = question.choices;

        for (let i = 0; i < choices.length; i++) {

            let element = document.querySelector("#choice" + i);
            element.innerHTML = choices[i];

            guess("btn" + i, choices[i])
        }

        showProgress();
    }
}


function guess(id, guess) {

    let btn = document.getElementById(id);

    btn.onclick = function() {
        quiz.guess(guess);
        loadQuestion();
    }
}

function showScore() {

    let html = `<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector(".card-body").innerHTML = html;
}

function showProgress() {

    let totalQuestion = quiz.questions.length;
    let questionNumber = quiz.questionIndex + 1;




    if (quiz.isFinished()) {

        document.querySelector("#progress").innerHTML = "Questionnaire is over";
    } else {
        document.querySelector("#progress").innerHTML = "Question " + questionNumber +
            " / " + totalQuestion;
    }


}