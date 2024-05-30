function Animal(name, energy) {
	let animal = Object.create(Animal.prototype);
	animal.name = name;
	animal.energy = energy;

	return animal;
}

Animal.prototype.eat = function(amount) {
	console.log(`${this.name} is eating`);
	this.energy += amount;
}

Animal.prototype.play = function(amount) {
	console.log(`${this.name} is playing`);
	this.energy -= amount;
}

const leo = Animal("leo", 100);
leo.eat(100);
console.log(leo.energy);
console.log(leo.name);
leo.play(1000);
console.log(leo.energy);
