"use strict";
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן
const playGame = (player1, player2) => {
    let options;
    (function (options) {
        options[options["Rock"] = 0] = "Rock";
        options[options["Paper"] = 1] = "Paper";
        options[options["Scissors"] = 2] = "Scissors";
    })(options || (options = {}));
    const choosePlayer1 = options[Number(prompt("Choose: 1 - Rock , 2 - Paper 3 - Scissors ")) - 1];
    const player1Result = choosePlayer1;
    const player2Result = options[Math.round(Math.random() * 2)];
    if (player1Result === "Rock" && player2Result === "Rock")
        return "tie";
    if (player1Result === "Rock" && player2Result === "Paper")
        return player2;
    if (player1Result === "Rock" && player2Result === "Scissors")
        return player1;
    if (player1Result === "Paper" && player2Result === "Rock")
        return player1;
    if (player1Result === "Paper" && player2Result === "Paper")
        return "tie";
    if (player1Result === "Paper" && player2Result === "Scissors")
        return player2;
    if (player1Result === "Scissors" && player2Result === "Rock")
        return player2;
    if (player1Result === "Scissors" && player2Result === "Paper")
        return player1;
    if (player1Result === "Scissors" && player2Result === "Scissors")
        return "tie";
    else
        return "U have to choose only 1,2,3";
};
const player1 = "Asaf";
const player2 = "8A Gaming";
const play = playGame(player1, player2);
console.log(play);
//Output: player1 or player2 or tie
