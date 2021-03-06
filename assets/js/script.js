var quizQuestions = 
[
    {
        question: "What is the fastest animal in the sea?",
        choiceA: "Mako Shark",
        choiceB: "Bluefin Tuna",
        choiceC: "Sailfish",
        choiceD: "Marlin",
        answer: "choiceC"
    },

    {
        question: "Which animal is more venomous than the others?",
        choiceA:"Australian Box Jellyfish",
        choiceB:"Pufferfish",
        choiceC:"Stingray",
        choiceD:"Blue-Ringed Octopus",
        answer:"choiceA"
    },

    {
        question:"What can a Blue Whale's weight get to?",
        choiceA:"155 tonnes",
        choiceB:"98 tonnes",
        choiceC:"208 tonnes",
        choiceD:"267 tonnes",
        answer:"choiceC"
    },

    {
        question:"How long is a Lion's Mane Jellyfish?",
        choiceA:"47 ft.",
        choiceB:"108 ft.",
        choiceC:"132 ft",
        choiceD:"88 ft",
        answer:"choiceB"
    },

    {
        question:"On average, how many teeth does a Bull Shark have at one time?",
        choiceA:"400",
        choiceB:"267",
        choiceC:"301",
        choiceD:"350",
        answer:"choiceD"
    }
];

var scoreContainer = document.getElementById("form-input")
var timerEl = document.querySelector(".score")
var startBtn = document.querySelector("#start-btn");
var questionContent = document.querySelector("#intro-wrapper");
var counter = 0;
var currentTime = 75;
var highScores = [];

var startQuiz = function()
{
    //clear Welcome content
    var clearTitle = document.getElementById("intro");
    clearTitle.remove();
    timer();
    createQuiz();
};


var createQuiz = function()
{   // creates question
    var question = document.createElement("h2");
    question.id = "question";
    question.className = "question";
    question.textContent = quizQuestions[counter].question;
    questionContent.appendChild(question);

    //creates div to put buttons into
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContent.appendChild(answerContainer);    

    // creates choiceA
    var choiceA = document.createElement("button");
    choiceA.id = "quiz-btnA";
    choiceA.className = "quiz-btn";
    choiceA.textContent = quizQuestions[counter].choiceA;
    answerContainer.appendChild(choiceA);

    choiceA.addEventListener("click", () =>{
        checkAnswer("choiceA", choiceA, choiceB, choiceC, choiceD, question);
    });


    // creates choiceB
    var choiceB = document.createElement("button");
    choiceB.id = "quiz-btnB";
    choiceB.className = "quiz-btn";
    choiceB.textContent = quizQuestions[counter].choiceB;
    answerContainer.appendChild(choiceB);

    choiceB.addEventListener("click", () =>{
        checkAnswer("choiceB", choiceA, choiceB, choiceC, choiceD, question);
    });


    // creates choiceC
    var choiceC = document.createElement("button");
    choiceC.id = "quiz-btnC"
    choiceC.className = "quiz-btn";
    choiceC.textContent = quizQuestions[counter].choiceC;
    answerContainer.appendChild(choiceC);

    choiceC.addEventListener("click", () =>{
        checkAnswer("choiceC", choiceA, choiceB, choiceC, choiceD, question);
    });

    // creates choiceD
    var choiceD = document.createElement("button");
    choiceD.id = "quiz-btnD";
    choiceD.className = "quiz-btn";
    choiceD.textContent = quizQuestions[counter].choiceD;
    answerContainer.appendChild(choiceD);

    choiceD.addEventListener("click", () =>{
        checkAnswer("choiceD", choiceA, choiceB, choiceC, choiceD, question);
    });
};

// remove questions to iterate through rest
var removeAll = function(choiceA, choiceB, choiceC, choiceD, question) {
    choiceA.remove();
    choiceB.remove();
    choiceC.remove();
    choiceD.remove();
    question.remove();
};
var checkAnswer = function(choice, choiceA, choiceB, choiceC, choiceD, question)
{
    if(quizQuestions[counter].answer === choice)
    {
         alert("CORRECT!");
    }
    else
    {
          alert("INCORRECT!");
        currentTime = currentTime - 6;
    }
    counter++;

    removeAll(choiceA, choiceB, choiceC, choiceD, question);
    if(counter < 5)
    {
        createQuiz();
    }
    else
    {
        endQuiz();
    }
    
};

var endQuiz = function()
{
    var scoreInput = document.createElement("h2");
    scoreInput.className = "score-container";
    scoreInput.textContent = "Enter Your Initials";
    questionContent.appendChild(scoreInput);

    var intInput = document.createElement("input");
    intInput.className = "int-input";
    intInput.setAttribute("name", "player-initials");
    intInput.setAttribute("placeholder", "Initial Here");
    questionContent.appendChild(intInput);

    var intSubmit = document.createElement("button");
    intSubmit.className = "int-submit-btn";
    intSubmit.textContent = "Submit";
    intSubmit.setAttribute("type", "submit" )
    questionContent.appendChild(intSubmit);

    intSubmit.addEventListener("click", savedScore);
};

var savedScore = function() 
{
    var int = document.querySelector("input[name='player-initials']").value;

    if(!int)
    {
        alert("ENTER INITIALS!");

    }
    else
    {
        var scoreItems = 
        {
            initials: int,
            score: currentTime
        }
        highScores.push(scoreItems);
        localStorage.setItem("scores", JSON.stringify(highScores));
    }
};

var loadScores = function()
{
    highScores = localStorage.getItem("scores");

    if (!highScores)
    {
        highScores = [];
        return false;
    }
    highScores = JSON.parse(highScores);
};

var timer = function()
{
    var timeInterval = setInterval(function()
    {
        if(currentTime > 0 && counter < 5)
        {
            timerEl.textContent = "Time remaining:" + currentTime;
            currentTime--
        }
        else
        {
            clearInterval(timeInterval);
        }
    }, 1000);
};


loadScores();
startBtn.addEventListener("click", startQuiz);




