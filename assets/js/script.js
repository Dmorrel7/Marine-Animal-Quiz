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

var timerEl = document.querySelector(".score")
var startBtn = document.querySelector("#start-btn");
var questionContent = document.querySelector("#intro-wrapper");
var counter = 0;
var currentTime = 75;

var startQuiz = function()
{
    //clear Welcome content
    var clearTitle = document.getElementById("intro");
    clearTitle.remove();
    createQuiz();
};


var createQuiz = function()
{   // creates question
    var question = document.createElement("h2");
    question.id = "question";
    question.className = "question";
    question.textContent = quizQuestions[counter].question;
    questionContent.appendChild(question);

    // creates choiceA
    var choiceA = document.createElement("button");
    choiceA.id = "quiz-btnA";
    choiceA.className = "quiz-btn";
    choiceA.textContent = quizQuestions[counter].choiceA;
    questionContent.appendChild(choiceA);

    choiceA.addEventListener("click", () =>{
        checkAnswer("choiceA", choiceA, choiceB, choiceC, choiceD, question);
    });


    // creates choiceB
    var choiceB = document.createElement("button");
    choiceB.id = "quiz-btnB";
    choiceB.className = "quiz-btn";
    choiceB.textContent = quizQuestions[counter].choiceB;
    questionContent.appendChild(choiceB);

    choiceB.addEventListener("click", () =>{
        checkAnswer("choiceB", choiceA, choiceB, choiceC, choiceD, question);
    });


    // creates choiceC
    var choiceC = document.createElement("button");
    choiceC.id = "quiz-btnC"
    choiceC.className = "quiz-btn";
    choiceC.textContent = quizQuestions[counter].choiceC;
    questionContent.appendChild(choiceC);

    choiceC.addEventListener("click", () =>{
        checkAnswer("choiceC", choiceA, choiceB, choiceC, choiceD, question);
    });

    // creates choiceD
    var choiceD = document.createElement("button");
    choiceD.id = "quiz-btnD";
    choiceD.className = "quiz-btn";
    choiceD.textContent = quizQuestions[counter].choiceD;
    questionContent.appendChild(choiceD);

    choiceD.addEventListener("click", () =>{
        checkAnswer("choiceD", choiceA, choiceB, choiceC, choiceD, question);
    });

};

var checkAnswer = function(choice, choiceA, choiceB, choiceC, choiceD, question)
{
    if(quizQuestions[counter].answer === choice)
    {
        alert("You are correct");
    }
    else
    {
        alert("You are incorrect");
    }
    counter++;

    removeAll(choiceA, choiceB, choiceC, choiceD, question);
    createQuiz();
};

var timer = function()
{
    var timeInterval = setInterval(function()
    {
        if(currentTime > 0 && counter < 5)
        {
            timerEl
        }
    });
};



startBtn.addEventListener("click", startQuiz);


var removeAll = function(choiceA, choiceB, choiceC, choiceD, question) {
    choiceA.remove();
    choiceB.remove();
    choiceC.remove();
    choiceD.remove();
    question.remove();
};

