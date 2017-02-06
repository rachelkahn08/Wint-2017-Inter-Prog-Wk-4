//Shuffle
function shuffle( deck ){
	for ( var j, x, i = deck.length ;
		i;
		j = Math.floor( Math.random() * i ),
		x = deck [--i],
		deck[i] = deck [j],
		deck[j] = x);
	return deck;
	
	for (var i = 0;
	i < array.length;
	i++ ) {	
	}
}


function dealCards( deck ) {
	for (var i = 0; i < deck.length; i++) {
		var card = document.createElement( "div" );
		card.setAttribute( "class", "card" );
		card.setAttribute( "data-color", deck[i].color );
		card.setAttribute( "data-suit", deck[i].suit) ;
		card.setAttribute( "data-number", deck[i].number );
		card.innerHTML = deck[i].number + deck[i].suit;
		document.body.appendChild( card );

		card.addEventListener( "click", onCardClick );
	}
}

// current target is the element that the eventlistener is attached to; target is the element that the event happens to
// in the context of an eventlistener, "this" will always be equal to the current target 
function onCardClick( e ) {
	// this.classList.toggle( "flipped" );

	// find every card that is flipped:
	var flippedCards = document.querySelectorAll( ".flipped" );

	// make sure nuber of flipped cards is less than 2
	if ( flippedCards.length < 2 ) {
		//allow card to flip:
		if ( !this.classList.contains( "flipped") && !this.classList.contains ("matched") ) {

			this.classList.add( "flipped" );

			if ( flippedCards.length == 1 ) {
				checkForMatch( this, flippedCards[0] );
			}
		} 
	}  

	// check to see if it's a match
	// stop from being flipped back over if only one is visible

}

function checkForMatch ( card1, card2 ) {

	if ( card1.dataset.number == card2.dataset.number && card1.dataset.suit == card2.dataset.suit && card1.dataset.color == card2.dataset.color) {

		//get rid of "flipped" class and replace with "matched"
		card1.classList.remove( "flipped" );
		card2.classList.remove( "flipped" );
		card1.classList.add ( "matched" );
		card2.classList.add ( "matched" );
	} else {
		setTimeout( function() {
			card1.classList.remove( "flipped" );
			card2.classList.remove( "flipped" );
		}, 500)
	}

	checkForWin();
}

function checkForWin () {
	var totalMatched = document.querySelectorAll(".matched").length;
	var totalCards = document.querySelectorAll(".card").length;
	if ( totalMatched == totalCards ) {
		setTimeout( function() {
			createAnotherModal();
		}, 250);
	}
}


function setTable() {
	var totalCards = 8;

	var deck = [
	    { color: "red",   number: "A", suit: "&hearts;" },
	    { color: "red",   number: "2", suit: "&hearts;" },
	    { color: "red",   number: "3", suit: "&hearts;" },
	    { color: "red",   number: "4", suit: "&hearts;" },
	    { color: "red",   number: "5", suit: "&hearts;" },
	    { color: "red",   number: "6", suit: "&hearts;" },
	    { color: "red",   number: "7", suit: "&hearts;" },
	    { color: "red",   number: "8", suit: "&hearts;" },
	    { color: "red",   number: "9", suit: "&hearts;" },
	    { color: "red",   number: "10", suit: "&hearts;" },
	    { color: "red",   number: "J", suit: "&hearts;" },
	    { color: "red",   number: "Q", suit: "&hearts;" },
	    { color: "red",   number: "K", suit: "&hearts;" },
	    { color: "red",   number: "A", suit: "&diams;" },
	    { color: "red",   number: "2", suit: "&diams;" },
	    { color: "red",   number: "3", suit: "&diams;" },
	    { color: "red",   number: "4", suit: "&diams;" },
	    { color: "red",   number: "5", suit: "&diams;" },
	    { color: "red",   number: "6", suit: "&diams;" },
	    { color: "red",   number: "7", suit: "&diams;" },
	    { color: "red",   number: "8", suit: "&diams;" },
	    { color: "red",   number: "9", suit: "&diams;" },
	    { color: "red",   number: "10", suit: "&diams;" },
	    { color: "red",   number: "J", suit: "&diams;" },
	    { color: "red",   number: "Q", suit: "&diams;" },
	    { color: "red",   number: "K", suit: "&diams;" },
	    { color: "black", number: "A", suit: "&spades;" },
	    { color: "black", number: "2", suit: "&spades;" },
	    { color: "black", number: "3", suit: "&spades;" },
	    { color: "black", number: "4", suit: "&spades;" },
	    { color: "black", number: "5", suit: "&spades;" },
	    { color: "black", number: "6", suit: "&spades;" },
	    { color: "black", number: "7", suit: "&spades;" },
	    { color: "black", number: "8", suit: "&spades;" },
	    { color: "black", number: "9", suit: "&spades;" },
	    { color: "black", number: "10", suit: "&spades;" },
	    { color: "black", number: "J", suit: "&spades;" },
	    { color: "black", number: "Q", suit: "&spades;" },
	    { color: "black", number: "K", suit: "&spades;" },
	    { color: "black", number: "A", suit: "&clubs;" },
	    { color: "black", number: "2", suit: "&clubs;" },
	    { color: "black", number: "3", suit: "&clubs;" },
	    { color: "black", number: "4", suit: "&clubs;" },
	    { color: "black", number: "5", suit: "&clubs;" },
	    { color: "black", number: "6", suit: "&clubs;" },
	    { color: "black", number: "7", suit: "&clubs;" },
	    { color: "black", number: "8", suit: "&clubs;" },
	    { color: "black", number: "9", suit: "&clubs;" },
	    { color: "black", number: "10", suit: "&clubs;" },
	    { color: "black", number: "J", suit: "&clubs;" },
	    { color: "black", number: "Q", suit: "&clubs;" },
	    { color: "black", number: "K", suit: "&clubs;" },
	];
	shuffle( deck );

	//Deal
		var pickedCards = deck.slice( 0, totalCards/2 );
		pickedCards = pickedCards.concat( pickedCards );

	shuffle( pickedCards );

	dealCards( pickedCards );
}

function createStopwatch (stopwatch) {
	stopwatch = document.createElement("div");	

		var minutesContainer = document.createElement( "div" );
			stopwatch.appendChild(minutesContainer);
			minutesContainer.setAttribute( "id", "minutes" );
			minutesContainer.innerHTML = "00";
			
		var secondsContainer = document.createElement( "div" );
			stopwatch.appendChild(secondsContainer);
			secondsContainer.setAttribute( "id", "seconds" );
			secondsContainer.innerHTML = ":00";

		var tenthsContainer = document.createElement( "div" );
			stopwatch.appendChild(tenthsContainer);
			tenthsContainer.setAttribute( "id", "tenths" );
			tenthsContainer.innerHTML = ".0";

	return stopwatch;
}

var minutes = 0;
var seconds = 0;
var tenths = 0;

function runStopwatch (stopwatch) {	
	var stopwatch = document.getElementByID("stopwatch", "stopwatch2");
	var tenthsContainer = document.getElementByID("tenths");
	var secondsContainer = document.getElementByID("seconds");
	var minutesContainer = document.getElementByID("minutes");

	tenths++;

	if ( tenths < 10 ) {
		tenths++;
		tenthsContainer.innerHTML = ".0" + tenths;
		console.log("tenths");
	} else if (tenths > 9 ) {
		tenthsContainer.innerHTML = ":00";
		seconds++;
		secondsContainer.innerHTML = ":" + seconds;
	}

	if (seconds > 59 ) {
		minutes++;
		secondsContainer.innerHTML = ":00";
		minutesContainer.innerHTML = ":" + minutes;
	}	
}


function createModal (modal) {
// start modal function

	modal = document.createElement("div");
		modal.setAttribute( "class", "modal" );
	document.body.appendChild(modal);

	var stopwatch = createStopwatch();
	stopwatch.setAttribute( "id", "stopwatch" );

	modal.appendChild(stopwatch);

	return modal;	
}

var message = document.createElement("div");
		message.setAttribute("class", "message");
var button = document.createElement("div");
		button.setAttribute( "class", "button" );


function createFirstModal () {
	var modal = createModal(); 
		message.innerHTML = "Begin new game?";
		modal.appendChild(message);

	button.innerHTML = "START";	
		modal.appendChild(button);
		button.addEventListener("click", playGame);
}

window.addEventListener( "load", createFirstModal )

function playGame () {
	removeModal();
	gameStopwatch();
	setInterval(runStopwatch, 100);
	setTable();	
}

function removeModal () {	
	var modal = document.querySelector(".modal");
	var killmodal = modal.parentNode;
	killmodal.removeChild(modal);
}

function removeCards () {
	//select all cards
	//remove all cards
	//probably a while
}

function gameStopwatch () {
 	var minutes = 00;
 	var seconds = 00;
 	var tenths = 00;

	var stopwatch = createStopwatch();
	document.body.appendChild(stopwatch);
	stopwatch.setAttribute("id", "stopwatch2");
}

function createAnotherModal () {
	// clearInterval(STOPWATCH STUFF)

	modalStopwatch();

	var modal = createModal(); 
		message.innerHTML = "Play another round?";
		modal.appendChild(message);

	button.innerHTML = "START";
		modal.appendChild(button);
		button.addEventListener("click", playAnotherGame);

}

function playAnotherGame () {
	document.body.innerHTML = [];
	// clear away old cards
	gameStopwatch();
	setTable();
	
}


function modalStopwatch () {
	var stopwatch = document.getElementByID("stopwatch2");
	stopwatch.setAttribute("id", "stopwatch");

	var modal = document.querySelector(".modal");
	document.body.appendChild(stopwatch);
}