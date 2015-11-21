var player1;
var player2;


player1 = "rock";
player2 = "paper";

var winner;
if ( player1 === "rock" && player2 === "paper" ) {
    winner = "player2";
console.log("player2 winner")
}

player1 = "rock";
player2 = "scissor";


if ( player1 === "rock" && player2 === "scissor" ) {
    winner = "player1";
console.log("player1 winner")
}

player1 = "paper";
player2 = "scissor";


if ( player1 === "paper" && player2 === "scissor" ) {
    winner = "player2";
console.log("player2 winner")
}

player1 = "paper";
player2 = "rock";


if ( player1 === "paper" && player2 === "rock" ) {
    winner = "player1";
console.log("player1 winner")
}

player1 = "scissor";
player2 = "rock";


if ( player1 === "scissor" && player2 === "rock" ) {
    winner = "player2";
console.log("player2 winner")
}

player1 = "scissor";
player2 = "paper";

 
if ( player1 === "scissor" && player2 === "paper" ) {
    winner = "player1";
console.log("player1 winner")
}
player1 = "rock";
player2 = "rock";

var winner;
if ( player1 === "rock" && player2 === "rock" ) {
    winner = "draw";
console.log("draw")
}

player1 = "paper";
player2 = "paper";

var winner;
if ( player1 === "paper" && player2 === "paper" ) {
    winner = "draw";
console.log("draw")
}
player1 = "scissor";
player2 = "scissor";

var winner;
if ( player1 === "scissor" && player2 === "scissor" ) {
    winner = "draw";
console.log("draw")
}

// END



// FOOD FOR THOUGHT:
// how annoying is it that you have to go back and change your variables
// to see different outcomes??
// what could you do to the code to ensure that you could run our logic over and over?
