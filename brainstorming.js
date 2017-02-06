//OKAY we are now in JS

// steps to make this shite happen

// set it up in HTML and CSS

	// HTML:  <div class="modal" id="start">
	// 		<div class="stopwatch">
	// 			<div id="minutes"></div>
	// 			<div id="seconds"></div>
	// 		</div>
	// 		<div id="start-button"></div>
	// 	</div>
	// 	<div class="modal" id="win">
	// 		<div class="stopwatch">
	// 			<div id="minutes"></div>
	// 			<div id="seconds"></div>
	// 		</div>
	// 		<div id="restart-button"></div>
	// 	</div>

	// 	CSS: .modal {
	//     position: absolute;
	//     left: 50%;
	//     top: 50%;
	//     transform: translate(-50%, -50%);
	//     background: grey;
	//     border-style: outset;
	//     border-width: 5px;
	//     border-color: blue;
	//     height: 400px;
	//     width: 650px;
	//     font-family: "Helvetica";
	//     font-size: 1.5em;
	// }

	// .stopwatch {
	//     position: absolute;
	//     margin-left: 50%;
	//     transform: translate(-50%);
	//     margin-top: 10%;
	// }

	// #minutes, #seconds {
	//     float:left;
	//     font-size: 3em;
	//     color: white;
	// }

	// .button {
	//     position: absolute;
	//     margin-left: 50%;
	//     bottom: 50px;
	//     transform: translate(-50%);
	//     border-style: solid;
	//     border-width: 3px;
	//     border-style: outset;
	//     border-color: white;
	//     padding: 20px;
	//     background: green;
	//     color: white;
	// }

// start modal function
// 	create modal
// 	style modal
// 	include button
// 		triggers stopwatch to start

// win modal function
// 	pause stopwatch
// 	create modal
// 	style modal
// 		include stopwatch display
// 	include button
// 		resets stopwatch

// stopwatch function
// 	define variables
// 		seconds
// 		milliseconds
// 	append shite
// 		add milliseconds
// 			when milliseconds > 99, restart to zero and add a second
// 		add seconds
// 			when milliseconds > 59, restart to zero and add a minute
// 		will people seriously spend an hour on this? i doubt it




		