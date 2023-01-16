defaultHuman = {
    sayHi: function() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

function Human(age, name) {
    this.age = age;
    this.name = name;
    this.sayHi();
}
Human.prototype = defaultHuman;

defaultNinja = {
    punch: function(enemy) {
        console.log(`${this.name} punched ${enemy.name}`);
    }
}
Object.setPrototypeOf(defaultNinja, Human.prototype);

function Ninja(age, name, rank) {
    this.rank = rank;
    Human.call(this, age, name);
}
Ninja.prototype = defaultNinja;

defaultWizard = {
    cast: function() {
        console.log(`${this.name} casted ${this.spell}`);
    }
}
Object.setPrototypeOf(defaultWizard, Human.prototype);

function Wizard(age, name, spell) {
    this.spell = spell;
    Human.call(this, age, name);
}
Wizard.prototype = defaultWizard;

naruto = new Ninja(10, 'Naruto', 'genin');
console.log(naruto);

harry = new Wizard(11, 'Harry Potter', 'expelliarmus');
console.log(harry);