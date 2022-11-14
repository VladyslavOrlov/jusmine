//#1

function ageClassification(n) {
  return n > 0
    ? n > 24
      ? n > 44
        ? n > 65
          ? n > 75
            ? n > 90
              ? n > 122
                ? null
                : 'долгожители'
              : 'старческий возраст'
            : 'пожилой возраст'
          : 'средний возраст'
        : 'молодой возраст'
      : 'детский возраст'
    : null;
}
// console.log('    -1 :', ageClassification(-1)); // -1 : null
// console.log('     1 :', ageClassification(1)); // 1 : детский возраст
// console.log('    24 :', ageClassification(24)); // 24 : детский возраст
// console.log(' 24.01 :', ageClassification(24.01)); // 24.01 : молодой возраст
// console.log('    44 :', ageClassification(44)); // 44 : молодой возраст
// console.log(' 44.01 :', ageClassification(44.01)); // 44.01 : средний возраст
// console.log('    65 :', ageClassification(65)); // 65 : средний возраст
// console.log('  65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст
// console.log('    75 :', ageClassification(75)); // 75 : пожилой возраст
// console.log(' 75.01 :', ageClassification(75.01)); // 75.01 : старческий возраст
// console.log('    90 :', ageClassification(90)); // 90 : старческий возраст
// console.log(' 90.01 :', ageClassification(90.01)); // 90.01 : долгожители
// console.log('   122 :', ageClassification(122)); // 122 : долгожители
// console.log('122.01 :', ageClassification(122.01)); // 122.01 : null
// console.log('   150 :', ageClassification(150)); // 150 : null

// console.log('    -1 :', ageClassification(-1) === null); // -1 : null
// console.log('     1 :', ageClassification(1) === 'детский возраст'); // 1 : детский возраст
// console.log('    24 :', ageClassification(24) === 'детский возраст'); // 24 : детский возраст
// console.log(' 24.01 :', ageClassification(24.01) === 'молодой возраст'); // 24.01 : молодой возраст
// console.log('    44 :', ageClassification(44) === 'молодой возраст'); // 44 : молодой возраст
// console.log(' 44.01 :', ageClassification(44.01) === 'средний возраст'); // 44.01 : средний возраст
// console.log('    65 :', ageClassification(65) === 'средний возраст'); // 65 : средний возраст
// console.log('  65.1 :', ageClassification(65.1) === 'пожилой возраст'); // 65.1 : пожилой возраст
// console.log('    75 :', ageClassification(75) === 'пожилой возраст'); // 75 : пожилой возраст
// console.log(' 75.01 :', ageClassification(75.01) === 'старческий возраст'); // 75.01 : старческий возраст
// console.log('    90 :', ageClassification(90) === 'старческий возраст'); // 90 : старческий возраст
// console.log(' 90.01 :', ageClassification(90.01) === 'долгожители'); // 90.01 : долгожители
// console.log('   122 :', ageClassification(122) === 'долгожители'); // 122 : долгожители
// console.log('122.01 :', ageClassification(122.01) === null); // 122.01 : null
// console.log('   150 :', ageClassification(150) === null); // 150 : null

//#2
function defUpperStr(str) {
  return (str || 'Default text').toUpperCase();
}

// console.log(defUpperStr('My text'));
// console.log(defUpperStr());

// #3
function weekFn(cond) {
  let strin = '';

  switch (cond) {
    case 1:
      strin = 'Понедельник';
      break;
    case 2:
      strin = 'Вторник';
      break;
    case 3:
      strin = 'Среда';
      break;
    case 4:
      strin = 'Четверг';
      break;
    case 5:
      strin = 'Пятница';
      break;
    case 6:
      strin = 'Суббота';
      break;
    case 7:
      strin = 'Воскресенье';
      break;
    default:
      strin = null;
  }

  return strin;
}

// console.log(weekFn(1)); // 'Понедельник'
// console.log(weekFn(3)); // 'Среда'
// console.log(weekFn(7)); // 'Воскресенье'
// console.log(weekFn(9)); // null
// console.log(weekFn(1.5)); // null
// console.log(weekFn('2')); // null
