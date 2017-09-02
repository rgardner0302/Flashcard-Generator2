var inquirer = require("inquirer");
var cards = [];
var cardCount = 0;
var clozeText


function ClozeCard(text, cloze) {
	this.text = text
	this.cloze = cloze

}

//make the sentence complete 
ClozeCard.prototype.full = function() {
	//show sentence with a blank
	clozeDeleted = this.cloze
	clozeText = this.text

	//replace the incomplete sentence with the answer (cloze)
	clozeText = clozeText.replace("...", clozeDeleted);

	//show answer
	console.log(clozeText);

}


var card1 = new ClozeCard("There are ... counties in Utah.", "29");
var card2 = new ClozeCard("A human head weights ... pounds.", "8");
var card3 = new ClozeCard("There are ... countries in the world.", "195");
var card4 = new ClozeCard("Elon Musk has ... Billion in the bank.", "21");

//push cards into the array
cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);



function studyCards() {
	//starts the question function w/inquirer
	if(cardCount < cards.length) {

				inquirer.prompt([
					{
						name: "partial",
						message: cards[cardCount].text
					}
				]).then(function(answer) {

					//if user's answer matches the cloze answer, log Correct, loop back through studyCards.
					if((answer.partial).toLowerCase() === cards[cardCount].cloze) {
						console.log("correct");
						//increase card count per loop
						cardCount ++
						
						studyCards();
					} 
					else {
						//if user's answer does not match cloze answer, log Incorrect and show the full sentence.  
						console.log("incorrect");
						cards[cardCount].full();
						//increase card count per loop
						cardCount ++
						
						studyCards();
					}

				});

	}


}

studyCards();