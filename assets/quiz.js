// Time out counter - reversed engineered from a Youtube Tutorial

question0 = ["Please press the next button to start", "Option 1", "Option 2", "Option 3", "Option 4"]
question1 = ["Which option has the correct file extension for a Java Script files?", "file.php", "file.js", "file.py", "file.css", "file.js"]
question2 = ["Which option has the correct file extension for a Cascading Style Sheet file?", "file.php", "file.js", "file.py", "file.css", "file.css"]
question3 = ["What does HTML stand for?", "Hyper Text Markup Language", "Hyper Text Many Languages", 'Home Type Markup Language', 'Hyper Type Max Language']
question4 = ["Which option has the correct file extension for an HTML file?", "file.php", "file.html", "file.py", "file.css", "file.html"]
question5 = ["What color is Napoleon's white hourse?", "Black", "Pinto", "White", "Brown", "White"]
var corrects = 0;
var score = 0;
var questionCounter = 1;
const timeH = document.querySelector('h1');
let timeSeconds = 180;



timeH.innerHTML = `${timeSeconds} Seconds`;
const countDown = setInterval(() => {
    timeSeconds--;
    timeH.innerHTML = `${timeSeconds} Seconds`;
    if (timeSeconds < 1) {
        clearInterval(countDown)
    }
}, 1000)

//Click event listener
document.getElementById('next-btn').addEventListener('click', function() {
    questionCounter++
    console.log(questionCounter)
    if (questionCounter === 1) {
        var correctAnswer1 = question1[2]
        console.log(correctAnswer1)
        console.log('1-true')
        document.getElementById("questions").innerHTML = question1[0];
        document.getElementById('btn-1').innerHTML = question1[1];
        document.getElementById('btn-2').innerHTML = question1[2];
        document.getElementById('btn-3').innerHTML = question1[3];
        document.getElementById('btn-4').innerHTML = question1[4];
        document.getElementById("btn").addEventListener("click", function() {
            var selection = document.getElementById('btn').in;
            console.log("selection");
        });
    } else if (questionCounter === 2) {
        console.log('2-true')
        document.getElementById("questions").innerHTML = question2[0];
        document.getElementById('btn-1').innerHTML = question2[1];
        document.getElementById('btn-2').innerHTML = question2[2];
        document.getElementById('btn-3').innerHTML = question2[3];
        document.getElementById('btn-4').innerHTML = question2[4];
    } else if (questionCounter === 3) {
        console.log('3-true')
        document.getElementById("questions").innerHTML = question3[0];
        document.getElementById('btn-1').innerHTML = question3[1];
        document.getElementById('btn-2').innerHTML = question3[2];
        document.getElementById('btn-3').innerHTML = question3[3];
        document.getElementById('btn-4').innerHTML = question3[4];
    } else if (questionCounter === 4) {
        console.log('4-true')
        document.getElementById("questions").innerHTML = question4[0];
        document.getElementById('btn-1').innerHTML = question4[1];
        document.getElementById('btn-2').innerHTML = question4[2];
        document.getElementById('btn-3').innerHTML = question4[3];
        document.getElementById('btn-4').innerHTML = question4[4];
    } else if (questionCounter === 5) {
        console.log('5-true')
        document.getElementById("questions").innerHTML = question5[0];
        document.getElementById('btn-1').innerHTML = question5[1];
        document.getElementById('btn-2').innerHTML = question5[2];
        document.getElementById('btn-3').innerHTML = question5[3];
        document.getElementById('btn-4').innerHTML = question5[4];
    } else if (questionCounter === 6) {
        window.location.href = "index.html";
    }
});

function counter() {
    questionCounter = questionCounter++
        console.log(questionCounter);
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
}]

document.getElementById('questions').innerHTML = "Which option is the correct file extension for Java Script?";
document.getElementById('btn-1').innerHTML = "file.php";
document.getElementById('btn-2').innerHTML = "file.js";
document.getElementById('btn-3').innerHTML = "file.py";
document.getElementById('btn-4').innerHTML = "file.css";

console.log(questionCounter);

function question() {

    if (questionCounter == 1) {
        document.getElementById("questions").innerHTML = question1[0];
        document.getElementById('btn-1').innerHTML = question1[1];
        document.getElementById('btn-2').innerHTML = question1[2];
        document.getElementById('btn-3').innerHTML = question1[3];
        document.getElementById('btn-4').innerHTML = question1[4];
    } else if (questionCounter == 2) {

        document.getElementById("questions").innerHTML = question2[0];
        document.getElementById('btn-1').innerHTML = question2[1];
        document.getElementById('btn-2').innerHTML = question2[2];
        document.getElementById('btn-3').innerHTML = question2[3];
        document.getElementById('btn-4').innerHTML = question2[4];
    }
}