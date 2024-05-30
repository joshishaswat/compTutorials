let play = {};

play.state = "Intro";

play.player = function (choice) {
	let result = choice;
	return result;
}

play.rock = function () {
	beat(scissor);
	lose(paper);
}

play.scissors = function () {
	beat(paper);
	lose(rock);
}
