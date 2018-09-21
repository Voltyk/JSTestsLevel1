/*
	Напишите функцию, которая принимает 1 аргумент и возварщает его тип
	*/
function getDataType(variable) {
  return typeof variable;
};

/*
	Напишите функцию, которая принимает 1 аргумент и возвращает:
	'primitive' если тип данных относится к примивным
	'primitive-special' если тип данных специальный
	'object' - если простой обьект
	'object-array' - если массив
	'object-function' - если функция
	*/
function getDataTypePseudoName(variable) {
  switch (typeof variable) {
    case 'boolean':
      return 'primitive';
      break;
    case 'number':
      return 'primitive';
      break;
    case 'string':
      return 'primitive';
      break;
    case 'symbol':
      return 'primitive';
      break;
    case 'undefined':
      return 'primitive-special';
      break;
    case 'object':
      if (variable === null) {
        return 'primitive-special';
      } else {
        if (Array.isArray(variable)) {
          return 'object-array';
        } else {
          return 'object';
        }
      }
      break;
    case 'function':
      return 'object-function';
      break;
    default:
      return 'Is\'s something new';

  }

};


/*
	Напишите функцию, которая принимает 2 аргумента,
	и возврвщает 1 если их значения и их типы равны,
	0 если равны только значения
	и -1 в другом случае
	*/
function compareByType(a, b) {
  if (a === b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else {
    return -1;
  }
};

// Numbers

/*
	Напишите функцию, которая принимает 1 аргумент,
	и в случае если аргумент имеет числовой тип увеличивает его на 1
	и возврвщвет результат,
	в любом другом случае возврвщвет -1
	*/
function increase(value) {
  if (typeof value === 'number') {
    return value + 1;
  } else {
    return -1;
  }

};

/*
	Напишите функцию, которая принимает 1 аргумент(число),
	и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
	*/
function testForSafeNumber(value) {
  if (value !== Infinity && !isNaN(value)) {
    return 'safe';
  } else {
    return 'danger';
  }
};



// Strings

/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает массив из елементов строки разделенных по пробелу ' '
	*/
function stringToArray(str) {
  var wordsArray = [];
  var cleanedWordsArray = [];
  var i = 0;
  var k = 0;
  var startWord = -1;
  var endWord = str.indexOf(' ', startWord + 1);
  while (endWord !== -1) {
    wordsArray[i] = str.slice(startWord + 1, endWord);
    startWord = endWord;
    endWord = str.indexOf(' ', startWord + 1);
    i++;
  }
  wordsArray[i] = str.slice(startWord + 1, str.length);

  for (i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] !== "") {
      cleanedWordsArray[k] = wordsArray[i];
      k++;
    }
  }
  return cleanedWordsArray;
};


/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает часть этой строки до первой запятой
	*/
function getStringPart(str) {
  var strPartIndex = str.indexOf(',');
  if (strPartIndex !== -1) {
    return str.slice(0, strPartIndex);
  } else {
    return str;
  }
};

/*
	Напишите функцию, которая принимает 2 аргумента (строку и символ),
	и возвращает порядковый номер симовола в строке если символ встречается в строке 1 раз,
	false в противоположном случае
	*/
function isSingleSymbolMatch(str, symbol) {
  var symbolIndex = str.indexOf(symbol);
  if (symbolIndex === str.lastIndexOf(symbol) && symbolIndex >= 0) {
    return symbolIndex;
  } else {
    return false;
  }
};

/*
	Напишите функцию, которая принимает 2 аргумента,
	массив и разделитель[опционально],
	и возвращает строку ввиде элементов массива c разделителями если разделитель задан
	или строку разделенную "-" если не задан
	*/
function join(array, separator) {
  if (separator == undefined || typeof separator !== 'string' || separator === "") separator = "-";
  return array.join(separator);
};


/*
	Напишите функцию, которая принимает 2 массива,
	и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
	*/
function glue(arrA, arrB) {
  return arrA.concat(arrB);
};


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой массив отсортированный от большего к меньшему
	*/

function order(arr) {
  return arr.slice().sort().reverse();
};


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой без чисел которые меньше 0
	*/
function removeNegative(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
};

/*
	Напишите функцию, которая принимает 2 числовых массива,
	и возвращает новый массив, состоящий из элементов первого но без элементов
	которые присутствуют во втром
	[1,2,3], [1, 3] => [2]
	*/
function without(arrA, arrB) {
  for (var i = 0; i < arrA.length; i++) {
    if (arrB.indexOf(arrA[i]) !== -1) {
      arrA.splice(i, 1);
      i--;
    }
  }
  return arrA;
};
