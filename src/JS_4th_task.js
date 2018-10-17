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
    return this._className;
  }
  set className(value){
    if (value==='Warrior') {
      this._className='Warrior';
    }else {
      this._className='Incorrect character class provided';
    }
  }
}
hero1=new Hero('Vova','Trol');
