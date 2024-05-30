function Animal(name,energy) {
	let animal = {};
	animal.name = name;
	animal.energy = energy;

	animal.eat = function(amount) {
		console.log(`${this.name} is eating.`);
		this.energy += amount;
	}
	
	animal.play = function(amount) {
		console.log(`${this.name} is playing.`);
		this.energy -= amount;
	}

	return animal;
}

const animal1 = Animal("Ponyo", 100);
console.log(animal1.name);
console.log(animal1.energy);
animal1.eat(50);
console.log(animal1.name);
console.log(animal1.energy);
animal1.play(1000);
console.log(animal1.name);
console.log(animal1.energy);
