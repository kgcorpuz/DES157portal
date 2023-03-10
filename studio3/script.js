(function(){
	
	"use strict";
	/* 
	This gets the player: gameData.players[gameData.index]
	This gets the first die: gameData.dice[gameData.roll1-1]
	This gets the second die: gameData.dice[gameData.roll2-1]
	This gets the score of the current player: gameData.score[gameData.index]
	*/
	
	const startGame = document.getElementById('startgame');
	const gameControl = document.getElementById('gamecontrol');
	const game = document.getElementById('game');
	const score1 = document.getElementById('score1');
	const score2 = document.getElementById('score2');
	const actionArea = document.getElementById('actions');

	//for audio button effects
	const audio1 = new Audio("sounds/bubble1.mp3");
	const audio2 = new Audio("sounds/button_roll.mp3");
	const audio3 = new Audio("sounds/clap.mp3");
	const audio4 = new Audio("sounds/bubble5.mp3");

	const gameData = {
		dice: ['images/1dice.png', 'images/2dice.png', 'images/3dice.png', 
			   'images/4dice.png', 'images/5dice.png', 'images/6dice.png'],
		players: ['Player 1', 'Player 2'],
		score: [0, 0],
		roll1: 0,
		roll2: 0,
		roll3: 0,
		rollSum: 0,
		index: 0,
		gameEnd:50
	};

	startGame.addEventListener('click', function () {
		gameData.index = Math.round(Math.random());
		console.log(gameData.index);
		setUpTurn();
		 
		gameControl.innerHTML = '<h2>Sleepy?</h2>';
		gameControl.innerHTML += '<button id="quit">Quit Here?</button>';
		
		document.getElementById('score1').className="showing";
		document.getElementById('score2').className="showing";
		document.getElementById('actions').className="showing";

		document
			.getElementById('quit').addEventListener('click', function () {
				location.reload();
			});
		setUpTurn();

	});

	function setUpTurn() {
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
		document.getElementById('roll').addEventListener('click', function(){
			throwDice();
			audio4.play();
		});
	}

	function throwDice(){
		actionArea.innerHTML = '';
		gameData.roll1 = Math.floor(Math.random() * 6) + 1; //using ceil could result in a zero
		gameData.roll2 = Math.floor(Math.random() * 6) + 1;
		gameData.roll3 = Math.floor(Math.random() * 6) + 1;
		game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
		game.innerHTML += `<div id='dice'><img src="${gameData.dice[gameData.roll1-1]}"> 
							<img src="${gameData.dice[gameData.roll2-1]}">
							<img src="${gameData.dice[gameData.roll3-1]}"></div>`;
		gameData.rollSum = gameData.roll1 + gameData.roll2 + gameData.roll3;

		// if three 1's are rolled...
		if( gameData.rollSum === 3 ){ 
			game.innerHTML += '<p>Oh snap! 3 peas in a pod!</p>';
			gameData.score[gameData.index] = 0;
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			showCurrentScore();
			setTimeout(setUpTurn, 2000);
		}

		// if either die is a 1...
		else if(gameData.roll1 === 1 || gameData.roll2 === 1 || gameData.roll3 === 1){ 
			gameData.index ? (gameData.index = 0) : (gameData.index = 1);
			game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to  ${
				gameData.players[gameData.index]
			}</p>`;
			setTimeout(setUpTurn, 2000);
		}


		// if neither die is a 1...
		else { 
			gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
			actionArea.innerHTML = '<button id="rollagain">Roll</button> or <button id="pass">Pass</button>';

			document.getElementById('rollagain').addEventListener('click', function () {
				audio1.play();
				throwDice();
			});

			
			document.getElementById('pass').addEventListener('click', function () {
				audio2.play();
				gameData.index ? (gameData.index = 0) : (gameData.index = 1);
				setUpTurn();
		
			});

			

			checkWinningCondition();
		}

	}

	function checkWinningCondition() {
		if (gameData.score[gameData.index] > gameData.gameEnd) {
			game.innerHTML = `<h2>${gameData.players[gameData.index]} 
			wins with ${gameData.score[gameData.index]} points!</h2>
			<img id="confetti" class="move" src="images/confetti.png">`;
			actionArea.innerHTML = '';
			score1.innerHTML = `<p><strong>--</strong></p>`;
			score2.innerHTML = `<p><strong>--</strong></p>`;
			audio3.play();
			document.getElementById('quit').innerHTML = 'Start a New Game?';
		} else {
			// show current score...
			showP1_Score();
			showP2_Score();
		}
	}

	function showP1_Score() {
		score1.innerHTML = `<p><strong>${gameData.score[0]}</strong></p>`;
	}

	function showP2_Score() {
		score2.innerHTML = `<p><strong>${gameData.score[1]}</strong></p>`;
	}

}());