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

//Superclass contains Hero class and Monster class
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


// instance of hero should have
// .name // string
// .charClass // sting
// .life	// number
// .damage	// number
// .getName() // function returning name
// .getCharClass() // function returning character class
// accepts - target - instance of Monster
// returns:
//         "I will attack only monsters" - in not monster was passed as target
//         "Hero attacked, " + GENERAL_ATTACK_MESSAGE
// .attack(target)

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

  // accepts - target - instance of Monster
  // returns:
  //         "I will attack only monsters" - in not monster was passed as target
  //         "Hero attacked, " + GENERAL_ATTACK_MESSAGE
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


// instance of Monster should have
// .charClass // sting
// .life	// number
// .damage	// number
// .getName() // function returning "I am MONSTER_CHARACTER_CLASS I don`t have name"
// .getCharClass() // function returning character class
//
// accepts - target - instance of Hero
// returns:
//         "I will attack only Hero" - in not hero was passed as target
//         "Monster attacked, " + GENERAL_ATTACK_MESSAGE
// .attack(target) //

class Monster extends Character {
  constructor(monsterClass) {
    super();
    this.name=`I am ${this.monsterClass} I don't have name`;
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

  // accepts - target - instance of Hero
  // returns:
  //         "I will attack only Hero" - in not hero was passed as target
  //         "Monster attacked, " + GENERAL_ATTACK_MESSAGE
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
  constructor(status='Idle',hero,monsters=[]) {
    this.status=status;
    this.hero=hero;
    this.monsters=monsters;
  }

// Change game status from "Idle" to "In progress", should be possible only if hero and monsters are defined
// returns:
//     "Your journey has started, fight monsters" - if ok
// throw new Error(
//     "Cannot start journey, populate the world with hero and monsters first") - if smth went wrong
  beginJourney(){
    if (typeof this.hero==='undefined' || this.monsters.length===0) {
      return 'Cannot start journey, populate the world with hero and monsters first';
    } else {
      this.status='In progress'
      return 'Your journey has started, fight monsters';
    }
  }

// Change game status from "In progress" to "Finished", possible only if hero or both monsters are dead(their life equals 0)
// retures:
//        "The Game is finished. Monstrs are dead. Congratulations" - if both monsters are dead
//        "The Game is finished. Hero is dead :(" - if hero is dead
//        "Don`t stop. Some monsters are still alive. Kill`em all" - if its not time yet
  finishJourney(){
    let monstsAlive=this.monsters.some((item)=>(item['life']>0))
    if (this.hero.life<=0 || !monstsAlive) {
      this.status='Finished';
      if (!monstsAlive) {
        return 'The Game is finished. Monsters are dead. Congratulations';
      }
      if (this.hero.life<=0) {
        return'The Game is finished. Hero is dead :(';
      }
    }else {
      return 'Don`t stop. Some monsters are still alive. Kill`em all';
    }
  }

// set game.hero to hero instance
// accepts: instance of Hero class
// throw:
//        "Only one hero can exist" - if hero is already defined
//        "Only hero instance can be hero" - if not hero was passed to function
// returns:
//        "Hero created, welcome HERO_NAME" - if ok
  addHero(hero){
    if (!(hero instanceof Hero)) {
      return 'Only hero instance can be hero';
    } else if (this.hero instanceof Hero) {
      return'Only one hero can exist';
    }else {
      this.hero=hero;
      return `Hero ${this.hero.getCharClass()} created, welcome ${this.hero.getName()}`;
    }


  }

// adds monster to game.monsters array
// accepts: instance of Monster class
// throw:
//        "Only 2 monsters can exist" - if there are already 2 monsters defined
//        "Only monster Instances can become monsters" - if not monster was passed to function
// returns:
//        "Monster Created, MONSTER_CHARACTER_CLASS appeared in the world" - if ok
  addMonster(monster){
    if (!(monster instanceof Monster)) {
      return 'Only monster Instances can become monsters';
    } else if (this.monsters.length>=Game.maxMonsters) {
      return 'Only '+ Game.maxMonsters +' monsters can exist';
    }else {
      if (this.monsters.some((item)=>(item===monster))) {
        return 'This monster already exists. Add another monster instance';
      } else {
        this.monsters.push(monster);
        return`Monster Created, ${monster.charClass} appeared in the world`;
      }
    }
  }

// Initiate a battle between hero and monster, one after another, they should attack each other, starting from hero,
// and until someone life is not 0
// returns string 'Hero win' or 'Monster win', depending on who has life points left
  fight(monsterIndex){
    var msg='';
    var heroAttaks=true;
    //function which make 1 sec delay for 1 fight action to make fight more real
    (function msgDelay(obj){
      setTimeout(function(){
        if (heroAttaks) {
          addConsoleMessage(obj.hero.attack(obj.monsters[monsterIndex]));
          heroAttaks=false;
        }else {
          addConsoleMessage(obj.monsters[monsterIndex].attack(obj.hero));
          heroAttaks=true;
        }
        if (obj.monsters[monsterIndex].life<=0) {
          msg='Hero win';
        }
        if (obj.hero.life<=0) {
          msg='Monster win'
        }
        if (msg==='') {
          msgDelay(obj);
        }else{
          addConsoleMessage(obj.finishJourney());
          htmlElements.aliveMonstersSelect.options[htmlElements.aliveMonstersSelect.selectedIndex].disabled=true;
          htmlElements.aliveMonstersSelect.innerHTML=htmlElements.aliveMonstersSelect.innerHTML;
          //clear game characters from html elements and game object after game was finished
          if (obj.status==='Finished') {
            htmlElements.aliveMonstersSelect.style.display='none';
            htmlElements.attackButton.style.display='none';
            htmlElements.heroCreateButton.disabled=false;
            htmlElements.monsterCreateButton.disabled=false;
            htmlElements.startButton.disabled=false;
            delete obj.hero;
            delete obj.monsters;
            obj.monsters=[];


            addConsoleMessage('Start new game!');

          }
        }
      },1000);
    })(this);
    return msg;
    /*
    // running a fight without log delays
    while(true){
      //console.log(this.hero.attack(this.monsters[monsterIndex]));
      addConsoleMessage(this.hero.attack(this.monsters[monsterIndex]));
      if (this.monsters[monsterIndex].life<=0) {
        return 'Hero win';
        break;           //return should break all the method including current loop, but for shure...
      }
      //console.log(this.monsters[monsterIndex].attack(this.hero));
      addConsoleMessage(this.monsters[monsterIndex].attack(this.hero));
      if (this.hero.life<=0) {
        return 'Monster win';
        break;
      }
    }
    */
  }

}
Game.maxMonsters = 2;

// creating object which contains all the objects-tags which will be manipulated by code below
var htmlElements={
  //existing tags
  heroDiv: document.getElementById('hero'),
  heroName: document.getElementById('heroNameInput'),
  heroCreateButton: document.getElementById('heroCreateButton'),
  monsterDiv: document.getElementById('monster'),
  monsterCreateButton: document.getElementById('monsterCreateButton'),
  startButton: document.getElementById('startButton'),
  gameConsole: document.getElementById('gameConsole'),
  aliveMonstersSelect: document.getElementById('aliveMonstersSelect'),
  attackButton: document.getElementById('attackButton'),
  //js created tags
  heroClassesSelect: document.createElement("select"),
  monstClassesSelect: document.createElement("select"),

};
//fill dropdown list of possible hero's classes
htmlElements.heroDiv.insertBefore(htmlElements.heroClassesSelect,htmlElements.heroCreateButton);
var heroOption;
for (var variable in Hero.heroClasses ) {
  if (Hero.heroClasses.hasOwnProperty(variable)) {
    heroOption=document.createElement('option');
    heroOption.innerHTML=Hero.heroClasses[variable].charClass;
    htmlElements.heroClassesSelect.appendChild(heroOption);
  }
}

//fill dropdown list of possible monster's classes
htmlElements.monsterDiv.insertBefore(htmlElements.monstClassesSelect,htmlElements.monsterCreateButton);
var monstOption;
for (var variable in Monster.monsterClasses ) {
  if (Monster.monsterClasses.hasOwnProperty(variable)) {
    monstOption=document.createElement('option');
    monstOption.innerHTML=Monster.monsterClasses[variable].charClass;
    htmlElements.monstClassesSelect.appendChild(monstOption);
  }
}
var hero;
var monster;
var game=new Game;

//function to log in game console (html textarea)
var addConsoleMessage=function(text){
  let gameConsole=htmlElements.gameConsole;
  gameConsole.value+= text+'\r\n';
  //gameConsole.focus();
  gameConsole.scrollTop=gameConsole.scrollHeight;
}

//add new instance of Hero on  button Click
htmlElements.heroCreateButton.onclick=function(){
  let heroName=htmlElements.heroName.value;
  if(heroName===''){
    heroName='Noname Hero';
  }
  hero=new Hero(heroName,htmlElements.heroClassesSelect.value);
  addConsoleMessage(game.addHero(hero));
}
//add new instance of Monster on  button Click
htmlElements.monsterCreateButton.onclick=function(){
  monster=new Monster(htmlElements.monstClassesSelect.value);
  addConsoleMessage(game.addMonster(monster));
}
//start the game on  button Click, add dropdown list of monsters which were added to the game
//add button Attack Monster to attack selected monster
htmlElements.startButton.onclick=function(){
  addConsoleMessage(game.beginJourney());

  if (game.status==='In progress') {
    //disable buttons and clear added monsters list before it will be filled
    htmlElements.heroCreateButton.disabled=true;
    htmlElements.monsterCreateButton.disabled=true;
    htmlElements.startButton.disabled=true;
    while (htmlElements.aliveMonstersSelect.firstChild) {
    htmlElements.aliveMonstersSelect.removeChild(htmlElements.aliveMonstersSelect.firstChild);
    }
    //fill monsters to fight dropdown list with game monsters
    var aliveMonster;
    game.monsters.forEach(function(item){
      aliveMonster=document.createElement('option');
      aliveMonster.innerHTML= item['charClass'];
      htmlElements.aliveMonstersSelect.appendChild(aliveMonster);
    });
    //begin to show elements for fighting
    htmlElements.aliveMonstersSelect.style.display='inherit';
    htmlElements.attackButton.style.display='inherit';
  }

}
//run fight method of game
htmlElements.attackButton.onclick=function(){
  addConsoleMessage(game.fight(htmlElements.aliveMonstersSelect.selectedIndex));
}
//remove js problem message from page
document.getElementById('jsFail').style.display='none';
