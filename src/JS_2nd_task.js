// Напишите функцию, которая будет возвращать набор уникальных символов,
// которые были переданы в эту функцию, как аргумент. Сортировка - не
// нужна, строчные и заглавные буквы - 1 символ.

function extractCharacters(str){
    var arr=Array.from(str.toLowerCase());
    var arrCleaned=arr.filter( (item,index) => (arr.indexOf(item)===index) );
    return arrCleaned;
}

// extractCharacters('abcd');

    //['a', 'b', 'c', 'd']

// extractCharacters('aaaabc');
    //['a', 'b', 'c']
// extractCharacters('Hello, world');
    //[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];




// 2. Напишите функцию, которая будет возвращать новую функцию, с помощью
// которой можно будет выводить в консоль текстовую информацию.
function createLogger(prefix) {
  var additionalMethods = {
    toString: function() {
      let str = 'Object {';
      for (var p in this) {
        if (this.hasOwnProperty(p)) {
          str += p + ':' + this[p] + ',';
        }
      }
      str = str.slice(0, -1) + "}";
      return str;
    }
  }
  return function() {
    var logDate = new Date(Date.now()).toISOString();
    var str="";
    for(var key in arguments){
      if((arguments[key].toString()==='[object Object]')){
        str+=additionalMethods.toString.bind(arguments[key])()+" ";
      }else {
        str+=arguments[key].toString()+" ";
      }
    }
    console.log(logDate + ' ' + prefix + ': '+str);
  }
}

var myLogger = createLogger('My Logger');


myLogger('some data');
    // 2016-06-06T09:55:44.162Z My Logger: some data
    // hint: use toISOString method to format Date object

myLogger({ data: 1 });
    // 2016-06-06T09:55:44.162Z My Logger: Object {data: 1}
myLogger('My data is -', { data: 1 });
    // 2016-06-06T09:55:44.162Z My Logger: my data is - Object {data: 1}
