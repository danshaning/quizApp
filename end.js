const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById("finalScore");

//creating an array of Highscores
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
finalScore.textContent = mostRecentScore;

//enable or no the save button
username.addEventListener('keyup', () => {
   saveScoreBtn.disabled = !username.value;
});

//populating the array with the score and name and sorting them 
saveHighScore = (e)  => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);

    highScores.sort((a,b) => {
        b.score - a.score
    });

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign('/game.html');

};
