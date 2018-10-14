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
