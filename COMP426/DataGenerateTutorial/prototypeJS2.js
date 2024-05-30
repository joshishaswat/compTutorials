//make the mehtods const instead of dynamic to save memory

const animalMethods = {
	eat(amount) {
		console.log(`${this.name} is eating`);
		this.energy += amount;
	},
	play(amount) {
		console.log(`${this.name} is playing`);
		this.energy -= amount;
	}
}

function Animal(name, energy) {
	let animal = {};
	animal.name = name;
	animal.energy = energy;
	animal.eat = animalMethods.eat;
	animal.play = animalMethods.play;

	return animal;
}

const leo = Animal("Leo", 100);
leo.eat(100);
console.log(leo.energy);
leo.play(1000);
console.log(leo.name);
console.log(leo.energy);
