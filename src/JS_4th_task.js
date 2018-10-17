// Task 1
// Реализовать классы Hero и Monster
// дать возможность создавать героев
// new Hero(name, heroClass)
// дать возможность создавать монстров
// new Monster(monsterClass)
// и герои и монстры могут быть только определенных классов, см спецификацию.
// В случае создания персонажа несуществующего класса -
// вернуть исключение "Incorrect character class provided"
// свойства и методы героев и монстров так же указыны в спецификации

class Hero {
  constructor(name,className) {
    this.name=name;
    this.className=className;
  }
  get className(){
    return this.charClass;
  }
  set className(value){
    this.charClass='Incorrect character class provided';
    for(var prop in Hero.heroClasses){
      if (Hero.heroClasses[prop]['charClass']===value) {
        this.charClass=Hero.heroClasses[prop]['charClass'];
        this.life=Hero.heroClasses[prop]['life'];
        this.damage=Hero.heroClasses[prop]['damage'];
       break;
      }
    }
  }
  getName(){
    return this.name;
  }
  getCharClass(){
    return this.charClass;
  }
  attack(target){

  }
}
Hero.heroClasses = {
	warrior: {
		charClass: "Warrior",
		life: 30,
		damage: 4
	},
	rogue: {
		charClass: "Rogue",
		life: 25,
		damage: 3
	},
	sorcerer: {
		charClass: "Sorcerer",
		life: 20,
		damage: 5
	}
}

class Monster {
  constructor(monsterClass) {
    this.monsterClass=monsterClass;
  }
  get monsterClass(){
    return this.charClass;
  }
  set monsterClass(value){
    this.charClass='Incorrect character class provided';
    for(var prop in Monster.monsterClasses){
      if (Monster.monsterClasses[prop]['charClass']===value) {
        this.charClass=Monster.monsterClasses[prop]['charClass'];
        this.life=Monster.monsterClasses[prop]['life'];
        this.damage=Monster.monsterClasses[prop]['damage'];
       break;
      }
    }
  }
  getName(){
    return this.name;
  }
  getCharClass(){
    return this.charClass;
  }
  attack(target){

  }
}
Monster.monsterClasses = {
	zombie: {
		charClass: "Zombie",
		life: 8,
		damage: 4
	},
	skeleton: {
		charClass: "Skeleton",
		life: 10,
		damage: 6
	},
	holem: {
		charClass: "Holem",
		life: 15,
		damage: 6
	}
}
class Game {
  constructor(status='',hero={},monsters=[]) {
    this.status=status;
    this.hero=hero;
    this.monsters=monsters;
  }
  beginJourney(){}
  finishJourney(){}
  addHero(hero){
    if (!hero instanceof Hero) {
      console.log('Only hero instance can be hero');
    } else if (this.hero instanceof Hero) {
      console.log('Only one hero can exist');
    }else {
      this.hero=hero;
      console.log(Hero created, welcome ${hero.name});
    }


  }
  addMonster(monster){

  }
  fight(){}

}
