describe('Тестирование функции ageClassification(n)', function () {
  it('Функция должна вернуть значение "true"', function () {
    expect(ageClassification(-1) === null).toBeTruthy();
    expect(ageClassification(1) === 'детский возраст').toBeTruthy();
    expect(ageClassification(24) === 'детский возраст').toBeTruthy();
    expect(ageClassification(24.01) === 'молодой возраст').toBeTruthy();
    expect(ageClassification(44) === 'молодой возраст').toBeTruthy();
    expect(ageClassification(44.01) === 'средний возраст').toBeTruthy();
    expect(ageClassification(65) === 'средний возраст').toBeTruthy();
    expect(ageClassification(65.1) === 'пожилой возраст').toBeTruthy();
    expect(ageClassification(75) === 'пожилой возраст').toBeTruthy();
    expect(ageClassification(75.01) === 'старческий возраст').toBeTruthy();
    expect(ageClassification(90) === 'старческий возраст').toBeTruthy();
    expect(ageClassification(90.01) === 'долгожители').toBeTruthy();
    expect(ageClassification(122) === 'долгожители').toBeTruthy();
    expect(ageClassification(122.01) === null).toBeTruthy();
    expect(ageClassification(150) === null).toBeTruthy();
  });
});
