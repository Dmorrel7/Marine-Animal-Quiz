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

var startBtn = document.querySelector("#start-btn");
var questionContent = document.querySelector("#intro");
var counter = 0;
var currentTime = 75;


var createQuiz = function()
{   
    var question = document.createElement("h2");
    question.className = "question-head";
    question.textContent = quizQuestions[counter].question;
    questionContent.appendChild(question);

    var choiceA = document.createElement("button");
    choiceA.className = "quiz-btn";
    choiceA.textContent = quizQuestions[counter].choiceA;
    questionContent.appendChild(choiceA);

    var choiceB = document.createElement("button");
    choiceB.className = "quiz-btn";
    choiceB.textContent = quizQuestions[counter].choiceB;
    questionContent.appendChild(choiceB);

    var choiceC = document.createElement("button");
    choiceC.className = "quiz-btn";
    choiceC.textContent = quizQuestions[counter].choiceC;
    questionContent.appendChild(choiceC);

    var choiceD = document.createElement("button");
    choiceD.className = "quiz-btn";
    choiceD.textContent = quizQuestions[counter].choiceD;
    questionContent.appendChild(choiceD);
};

var startQuiz = function()
{
    //clear Welcome content
    var clearTitle = document.getElementById("intro");
    clearTitle.remove();
    createQuiz();
}

startBtn.addEventListener("click", startQuiz);

