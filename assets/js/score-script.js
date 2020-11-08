var highScores = [];
var scoreDiv = document.querySelector("#high-scores");

var loadScores = function()
{
    highScores = localStorage.getItem("scores");

    if (!highScores)
    {
        highScores = [];
        return false;
    }
    highScores = JSON.parse(highScores);
    highScores.sort(compare);
};

var compare = function(a, b)
{
    var scoreA = parseInt(a.score);
    var scoreB = parseInt(b.score);

    var comparison = 0;
    if(scoreA < scoreB)
    {
        comparison = 1;
    }
    else if (scoreA > scoreB)
    {
        comparison = -1;
    }
    return comparison;
};

var outputScore = function()
{
    for(var i = 0; i < highScores.length; i++)
    {
        var playerNames = document.createElement("h3");
        playerNames.className = "playerName";
        playerNames.textContent = highScores[i].initials +" : " + highScores[i].score;
        scoreDiv.appendChild(playerNames);

        
    }
};

loadScores();
outputScore();