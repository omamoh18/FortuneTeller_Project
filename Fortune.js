

/* Code for the user to write his/hers name*/

var userInput = prompt("Whats your name");

/* If the user insert a name, it will run a "Hello + the user's name" , if not. Only "Hello" will be printed out*/

if (userInput){
	console.log("Hello" + " " + userInput);


} else {
	console.log("Hello");

}

/* User get a prompt window to ask a question, and it will print the question and with the name of the user.
 If not the name is given in the begining of the program, only the question is printed out


 fsdfsdfsdfsdf
 sdfsdfsdfsdfsdf*/

var userQuestion = prompt("Please ask a question");

if (userInput) {
	console.log(userInput + " " +"asks" + " " + userQuestion);


} else {
	console.log(userQuestion);

}

/* generate a random number between 0 and 7*/

var magicNumber = Math.floor(Math.random() * 8);

var numberBall ="";

if (magicNumber === 0){
	alert(numberBall = "Yes");

} else if (magicNumber === 1){
	alert(numberBall= "Without a doubt");

} else if (magicNumber === 2) {
	alert(numberBall = "My reply is no");

} else if (magicNumber === 3) {
	alert(numberBall = "Don'\t count on it" );

} else if (magicNumber === 4){
	alert(numberBall = "Cannot predict now");

} else if (magicNumber === 5){
	alert(numberBall ="You may rely on it");

} else if (magicNumber === 6) {
	alert(numberBall="My sources says no");

} else if (magicNumber === 7){
	alert(numberBall ="Ask again later");

} else {
	alert(magicNumber === 8);

}