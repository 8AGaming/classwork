// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן

// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2'
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה

type Player = string;
type playGameFunction = <K extends Player>(player1: K, player2: K) => string;

const playGame: playGameFunction = (player1, player2) => {
  enum options {
    Rock,
    Paper,
    Scissors,
  }
  const choosePlayer1: string =
    options[Number(prompt("Choose: 1 - Rock , 2 - Paper 3 - Scissors ")) - 1];

  const player1Result: string = choosePlayer1;
  const player2Result: string = options[Math.round(Math.random() * 2)];
  if (player1Result === "Rock" && player2Result === "Rock") return "tie";
  if (player1Result === "Rock" && player2Result === "Paper") return player2;
  if (player1Result === "Rock" && player2Result === "Scissors") return player1;
  if (player1Result === "Paper" && player2Result === "Rock") return player1;
  if (player1Result === "Paper" && player2Result === "Paper") return "tie";
  if (player1Result === "Paper" && player2Result === "Scissors") return player2;
  if (player1Result === "Scissors" && player2Result === "Rock") return player2;
  if (player1Result === "Scissors" && player2Result === "Paper") return player1;
  if (player1Result === "Scissors" && player2Result === "Scissors")
    return "tie";
  else return "U have to choose only 1,2,3";
};

const player1 = "Asaf";
const player2 = "8A Gaming";
const play = playGame(player1, player2);
console.log(play);

//Output: player1 or player2 or tie
