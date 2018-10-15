// Напишите функцию compareObjects, которая
// принимает 2 объекта и название числового свойства,
// по которому нужно выполнить сравнение объектов,
// и выводит в консоль свойство name того объекта,
// у которого значение переданного свойства больше.

function compareObjects(obj1,obj2,propName) {
  if (obj1[propName]>obj2[propName]) {
    console.log(obj1.name);
  }
  if (obj1[propName]<obj2[propName]) {
    console.log(obj2.name);
  }
}


// Создайте два объекта с помощью литерала

obj1={
  name: "Vova",
  cash: 1000
};
obj2={
  name: "Kir",
  cash: 2000
};


// Вызовите написанную функцию и передайте два
// созданных объекта и свойство для сравнения

compareObjects(obj1,obj2,"cash");


// Создайте коллекцию из 5 музыкальных песен, где
// каждая песня содержит следующую информацию:
// played - количество раз песня была проиграна
// (определить случайным образом), name - имя песни

// function Song(name, played){
//   this.name=name;
//   this.played=played;
// }
//
// let songsCollection[];
// songsCollection.push(new Song("Like a Stone",Math.floor(Math.random()*1001));
// songsCollection.push(new Song("Scar On The Sky",Math.floor(Math.random()*1001)));
// songsCollection.push(new Song("Before We Disappear",Math.floor(Math.random()*1001)));
// songsCollection.push(new Song("Can't Change Me",Math.floor(Math.random()*1001)));
// songsCollection.push(new Song("The Promise",Math.floor(Math.random()*1001)));
//
// // Напишите функцию favoriteSong, которая принимает коллекцию
// // из песен, и возвращает следующую информацию: название песни,
// // сколько раз песня была проиграна, индекс песни в коллекции.


// Create object Car with the method `drive` and the property `mileage`
// Method `drive` accepts distance as a parameter and logs to console `The car has driven ${distance} miles`
// Property `mileage` has a getter that returns total mileage after several calls of `drive`
// Make several calls to `drive` and output total mileage

  var Car={
    totalMilage:0,
    drive(distance){
      this.totalMilage+=distance;
      console.log(`The car has driven ${distance} miles`);
    },
    get mileage(){
      return this.totalMilage;
    }
  };

Car.drive(120);
Car.drive(14);
Car.drive(66);
console.log(Car.totalMilage);


// Modify method `drive` to log mileage after `distance` seconds
// Implement container to collect callbacks to call when `drive` is finished
// Make several calls to `drive` and output total mileage

function addItemToList(message) {
  let li=document.createElement('li');
  li.innerHTML= message;
  document.getElementById("list").appendChild(li);
}

Car={
  totalMilage:0,
  drive(distance){
    this.totalMilage+=distance;
    setTimeout (()=>{addItemToList(`The car has driven ${distance} miles`)}, distance*1000);
  },
  get mileage(){
    return this.totalMilage;
  }
};
Car.drive(1);
Car.drive(2);
Car.drive(4);
addItemToList('Total milage is: '+Car.totalMilage);


// Create a mixin object that has the `list` method which loops over `props` object property
// and outputs all existing properties and their respective values,
// if a property doesn't exist on the current object, it outputs `Property ${name} doesn't exist`

// Create two objects with `props` property as an array of strings,
// where each string denotes a property on an object and other properties
// listed in the `props` property

// Mix in `list` method to these objects and call it

var mixin={
  list(){
    if (this.hasOwnProperty('props')) {
      for(var key in this.props){
        console.log(key+":"+this.props[key]);
      }
    } else {
      console.log("Property 'props' doesn't exist");
    }
  },
};
var anotherObj1={
  prop1:'prop1',
  prop2:'prop2',
  prop3:'prop3',
  props:['prop1','prop2','prop3']
}
var anotherObj2={
  prop4:'prop4',
  prop5:'prop5',
  prop6:'prop6',
  props:['prop4','prop5','prop6']
}
mixin.list.bind(anotherObj1)();
mixin.list.bind(anotherObj2)();


// Create array of properties
// Add all properties in the array to an object using computed property syntax
// Loop through the properties and output their name and value

var propArray=['prop1','prop2','prop3','prop4'];
var anotherObj3={};
for(let key in propArray){
  anotherObj3[propArray[key]]=key;
}
for(let key in anotherObj3){
  console.log(key+':'+anotherObj3[key]);
}


// Опишите конструктор объектов (класс) Calculator с двумя методами: add -
// принимает число и прибавляет его к предыдущему, getCurrentSum - принимает индекс
// и возвращает результирующее число на шаге указанном в индексе
// (если индекса нет, возвращает текущую сумму)
// Создайте два экземпляра класса Calculator
// Добавьте в первый объект числа 3,8,11 и во второй 5,12,17.
// Выведите в консоль сумму:
// всех чисел всех объектов, убедитесь (56)
// сумму чисел всех объектов на втором шаге (28)
// для одного объекта сумму после третьего шага и общую результирующую сумму (должна совпадать)

  function Calculator() {
    this.stepSum=[0];
    this.add=function(number){
      this.stepSum.push(this.stepSum[this.stepSum.length-1]+number);
    }
    this.getCurrentSum=function(index){
      if (typeof index==='undefined') {
        return this.stepSum[this.stepSum.length-1];
      } else {
        return this.stepSum[index];
      }
    }
  }
  var calculator1=new Calculator();
  var calculator2=new Calculator();
  calculator1.add(3);
  calculator1.add(8);
  calculator1.add(11);
  calculator2.add(5);
  calculator2.add(12);
  calculator2.add(17);
console.log(calculator1.stepSum[calculator1.stepSum.length-1]+calculator2.stepSum[calculator2.stepSum.length-1]);
console.log(calculator1.getCurrentSum(2)+calculator2.getCurrentSum(2));
console.log(calculator1.getCurrentSum(3));
console.log(calculator1.getCurrentSum());


// Modify solution for practical task 4 to share `list` method through prototype

var mixin2={
  name:'Vova',
  list(){
    if (this.hasOwnProperty('props')) {
      for(var key in this.props){
        console.log(key+":"+this.props[key]);
      }
    } else {
      console.log("Property 'props' doesn't exist");
    }
  },
};
var anotherObj4={
  prop1:'prop1',
  prop2:'prop2',
  prop3:'prop3',
  props:['prop1','prop2','prop3']
}
var anotherObj5={
  prop4:'prop4',
  prop5:'prop5',
  prop6:'prop6',
  props:['prop4','prop5','prop6']
}
Object.setPrototypeOf(anotherObj4,mixin2);
Object.setPrototypeOf(anotherObj5,mixin2);
anotherObj4.list();
anotherObj5.list();


//Task 8
// Create an object `animal` with shared method `run` that outputs '[name] is
// running', where [name] is placeholder for animal name
// Create a function constructor for Rabbit that when instantiated accepts
// the name of the animal and stores it on the instance
// Set `animal` as a prototype for instances of the Rabbit
// Instantiate Rabbit instance and call `run` method

var animal={
  run(){
    return this.name+' is running';
  }
};
function Rabbit(name) {
  this.name=name;
}
Rabbit.prototype=animal;
var rabbit01=new Rabbit('rabbit01');
console.log(rabbit01.run());


// Modify task 8 to use classes instead of a function constructor
class RabbitClass {
  constructor(name) {
    this.name=name;
  }
  run(){
    return this.name+' is running';
  }
}
var rabbit02=new RabbitClass('rabbit02');
console.log(rabbit02.run());
