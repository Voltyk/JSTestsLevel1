// Напишите функцию, которая будет возвращать набор уникальных символов,
// которые были переданы в эту функцию, как аргумент. Сортировка - не
// нужна, строчные и заглавные буквы - 1 символ.

function extractCharacters(str){
    str=str.toLowerCase();
    var arr=Array.from(str);
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
function createLogger(prefix){
    //...
}

var myLogger = createLogger('My Logger');


myLogger('some data');
    // 2016-06-06T09:55:44.162Z My Logger: some data
    // hint: use toISOString method to format Date object

myLogger({ data: 1 });
    // 2016-06-06T09:55:44.162Z My Logger: Object {data: 1}
myLogger('My data is -', { data: 1 });
    // 2016-06-06T09:55:44.162Z My Logger: my data is - Object {data: 1}
=======
//     //['a', 'b', 'c', 'd']
//
// extractCharacters('aaaabc');
//     //['a', 'b', 'c']
// extractCharacters('Hello, world');
//     //[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];
