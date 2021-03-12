const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainertElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffleQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


// Start game function, add the hideclass

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random - .5)
    currentQuestionIndex = 0
    questionContainertElement.classList.remove('hide')
    setNextQuestion()
}

// Seting the next question function

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

// Reset State Function

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}

// Setinf function "Action when we select a question - "Correct Vs Incorrect"

function selectAnswer(e) {
    const selectButton = e.target
    const correct = selectButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')

    }

}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else(
        element.classList.add('wrong')
    )
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

// List of questions

const questions = [{
        question: 'Which option is the correct file extension for Java Script?',
        answers: [
            { text: 'file.exe', correct: false },
            { text: 'file.js', correct: true },
            { text: 'file.txt', correct: false },
            { text: 'file.doc', correct: false }
        ]
    },
    {
        question: 'Which option is the correct file extension for Cascading Style Sheet?',
        answers: [
            { text: 'file.exe', correct: false },
            { text: 'file.js', correct: false },
            { text: 'file.css', correct: true },
            { text: 'file.txt', correct: false }
        ]
    },
    {
        question: 'What does DOM stand for?',
        answers: [
            { text: 'Department of Medicine', correct: false },
            { text: 'Document Object Model', correct: true },
            { text: 'Direct Object Model', correct: false },
            { text: 'Digital Object Model', correct: false }
        ]
    },
    {
        question: 'What is the best way to learn full stak development',
        answers: [
            { text: 'Lots of parctice (and we mean a lot)', correct: false },
            { text: 'Lots of reading', correct: false },
            { text: 'watch lots video of people doing it', correct: false },
            { text: 'All of the above', correct: true }
        ]
    },
    {
        question: 'Which option is not an HTML Tag?',
        answers: [
            { text: '<p></P>', correct: false },
            { text: '<h1></h1>', correct: false },
            { text: '<m></m>', correct: true },
            { text: '<p></p>', correct: false }
        ]
    }
]