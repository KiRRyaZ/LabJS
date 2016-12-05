'use strict'
console.time('\nВремя работы программы: ');
let fs = require('fs');
let science = require('./MainLabArray.js');


//---------------------------------------------------
function substringInArray(str, arr) {
  str = str.toLowerCase();
  return arr.filter(item => item.toLowerCase().includes(str));
}


//---------------------------------------------------
function stringsInText(text, arr) {
  text = text.toLowerCase();
  return arr.filter(item => text.includes(item.toLowerCase()));
}


//-------------------------------------------------
//Задание #1
console.log('\nЗадание #1. Массив science: \n');
science.forEach(item => console.log(item));


//---------------------------------------------------
//Задание #2
console.log("\n\nЗадание #2. Отфильтрованный массив science: \n");
science.filter(item => item.length <= 10).forEach(i => console.log(i));


//---------------------------------------------------
//Задание #3
console.log("\n\nЗадание #3. Отсортированный массив science: \n");
science.sort().forEach(item => console.log(item));


//---------------------------------------------------
//Задание #4
//Вариант 1
console.log('\nЗадание #4. Вариант #1. Массив кодов символов строки: \n');
let scienceASCIIcode = (
  science
  .map(item => item.split('')
    .map(i => i.charCodeAt(0))
  )
);

scienceASCIIcode.forEach(
  item => console.log(
    science[scienceASCIIcode.indexOf(item)] + 
    ': ' + 
    JSON.stringify(item)
  )
);

//Вариант 2
console.log('\n\nЗадание #4. Вариант #2. Массив слов, встречающихся в строке:\n');
let scienceWords = science.map(item => item.split(' '));
scienceWords.forEach(item => console.log(item));


//---------------------------------------------------
//Задание #5
//Вариант 1
console.log(
  '\n\nЗадание #5. Вариант #1. ' +
  'Строки, которые имеют в себе данную подстроку \'ro\': \n' +
  substringInArray('ro', science)
);


//Вариант 2
console.log(
  '\n\nЗадание #5. Вариант #2. ' + 
  'Текст имеет эти слова из массива: \n' + 
  stringsInText(fs.readFileSync('Text.txt', 'utf8'), science)
);





console.timeEnd('\nВремя работы программы: ');