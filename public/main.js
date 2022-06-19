const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-btn');
const nextButton = document.getElementById('next-btn');
const previousButton = document.getElementById('previous-btn');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
    });



function startQuiz () {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion () {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function setPreviousQuestion () {

}

function selectAnswer () {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.setAttribute('disabled', 'disabled');
        
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState () {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function setStatusClass (element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}


const questions = [
    {
        question: 'What is the name of the main character in the game?',
        answers: [
            { text: 'Mario', correct: true },
            { text: 'Luigi', correct: false },
            { text: 'Peach', correct: false },
            { text: 'Toad', correct: false },
            { text: 'Yoshi', correct: false },
            { text: 'Bowser', correct: false },
            { text: 'Donkey Kong', correct: false },
            { text: 'Link', correct: false },
            { text: 'Samus', correct: false },
            { text: 'Pikachu', correct: false },
            { text: 'Captain Falcon', correct: false },
            { text: 'Ganondorf', correct: false },


        ]
    },
    {
        question: 'Who was the first person to walk on the moon?',
        answers: [
            { text: 'Neil Armstrong', correct: true },
            { text: 'Buzz Aldrin', correct: false },
            { text: 'Alan Bean', correct: false },
            { text: 'Alan Shepard', correct: false }
        ]
    },
    {
        question: 'Is the game called "Super Mario Bros."?',
        answers: [
            { text: 'Yes', correct: true },
            { text: 'No', correct: false }
        ]
    },
    {
        question: 'Quel est le pire cadeau que j\'ai reçu?',	
        answers: [
            {text: 'Des savates, genre des tongs bien moches', correct: false},
            {text: 'Du paté périmé', correct: true},
            {text: 'Un livre que j\'avais offert à la personne qui me l\'a offert sans s\'en souvenir', correct: false},
            {text: 'D la réponse D', correct: false},
        ]
    }
    ];