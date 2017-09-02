var inquirer = require("inquirer");
var cards = []
var cardCount = 0

function BasicCard(front, back) {
    this.front = front
    this.back = back
}

var card1 = new BasicCard("Who was the first President of the United States?", "george washington");
var card2 = new BasicCard("What team is going to win out of BYU and LSU?", "BYU"); 
var card3 = new BasicCard("What is the best coding bootcamp in the country?", "uofu"); 
var card4 = new BasicCard("What ice-cream is better Cookies & Cream or Cookie Dough?", "cookies & cream");

cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);


function studyCards() {
    //starts the question function w/inquirer
    if(cardCount < cards.length) {

                inquirer.prompt([
                    {
                        name: "question",
                        message: cards[cardCount].front
                    }
                ]).then(function(answer) {

                    if((answer.question).toLowerCase() === cards[cardCount].back) {
                        console.log("correct");
                        //increase card count per loop
                        cardCount ++
                        
                        studyCards();
                    } 
                    else {
                        //state back of card
                        console.log("incorrect");
                        console.log("BACK READS:  " + cards[cardCount].back);
                        //increase card count per loop
                        cardCount ++
                        
                        studyCards();
                    }

                });

    }


}

studyCards();