const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

function Animal(name, energy) {
	let animal = Object.create(animalMethods);
	animal.name = name;
	animal.energy = energy;

	return animal;
}

const leo = Animal("Leo", 100);
console.log(leo.name);
console.log(leo.energy);
leo.eat(100);
console.log(leo.energy);
leo.play(1000);
console.log(leo.energy);
