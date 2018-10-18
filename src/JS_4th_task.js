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
class Character {
  constructor() {

  }
  getName(){
    return this.name;
  }
  getCharClass(){
    return this.charClass;
  }
  attack(target){
    if ((target instanceof Hero) || (target instanceof Monster)) {
      target.life-=this.damage;
      if (target.life<=0) {
        return `${target.charClass} killed`
      } else {
        return `done ${this.damage} damage to ${target.charClass}`
      }
    } else {
      return 'monster can not attack monster or hero attack hero';
    }
  }
}
class Hero extends Character {
  constructor(name,className) {
    super();
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

  attack(target){
    if(!(target instanceof Monster)){
      return 'I will attack only monsters';
    }else {
      let msg=Character.prototype.attack.call(this,target);
      return `Hero attacked, ${msg}`;
    }
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

class Monster extends Character {
  constructor(monsterClass) {
    super();
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
  attack(target){
    if(!(target instanceof Hero)){
      return 'I will attack only heroes';

    }else {
      let msg=Character.prototype.attack.call(this,target);
      return `Monster attacked, ${msg}`;
    }
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
  constructor(status='Idle',hero={},monsters=[]) {
    this.status=status;
    this.hero=hero;
    this.monsters=monsters;
  }
  beginJourney(){
    if (this.hero!=={} && this.monsters!==[]) {
      this.status='In progress'
      console.log('Your journey has started, fight monsters');
    } else {
      console.log('Cannot start journey, populate the world with hero and monsters first');
    }
  }
  finishJourney(){
    let monstsAlive=this.monsters.some((item)=>(item['life']>0))
    if (this.hero.life<=0 || !monstsAlive) {
      this.status='Finished';
      if (!monstsAlive) {
        console.log('The Game is finished. Monstrs are dead. Congratulations');
      }
      if (this.hero.life<=0) {
        console.log('The Game is finished. Hero is dead :(');
      }
    }else {
      console.log('Don`t stop. Some monsters are still alive. Kill`em all');
    }
  }
  addHero(hero){
    if (!(hero instanceof Hero)) {
      console.log('Only hero instance can be hero');
    } else if (this.hero instanceof Hero) {
      console.log('Only one hero can exist');
    }else {
      this.hero=hero;
      console.log(`Hero created, welcome ${hero.name}`);
    }


  }
  addMonster(monster){
    if (!(monster instanceof Monster)) {
      console.log('Only monster Instances can become monsters');
    } else if (this.monsters.length>=Game.maxMonsters) {
      console.log('Only 2 monsters can exist');
    }else {
      if (this.monsters.some((item)=>(item===monster))) {
        console.log('This monster already exists. Add another monster instance');
      } else {
        this.monsters.push(monster);
        console.log(`Monster Created, ${monster.charClass} appeared in the world`);
      }
    }
  }
  fight(monsterIndex){
    while(true){
      console.log(this.hero.attack(this.monsters[monsterIndex]));
      if (this.monsters[monsterIndex].life<=0) {
        return 'Hero win';
        break;           //return should break all the method including current loop, but for shure...
      }
      console.log(this.monsters[monsterIndex].attack(this.hero));
      if (this.hero.life<=0) {
        return 'Monster win';
        break;
      }
    }
  }

}
Game.maxMonsters = 2;
