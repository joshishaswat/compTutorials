function Animal (name, energy)
{
	let animal = {};
	animal.name = name;
	animal.energy = energy;

	animal.eat = function(amount) {
		console.log(`${this.name} is eating`);
		this.energy += amount;
	}

	animal.play = function(amount) {
		console.log(`${this.name} is sleeping`);
		this.energy -= amount;
	}

	return animal;
}

const leo = Animal('leo', 0);
leo.eat(100);
console.log(leo.energy);
leo.play(1000);
console.log(leo.energy);
console.log(leo.name);
