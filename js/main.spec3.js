describe('Тестирование функции weekFn(cond)', function () {
  it('Функция должна принимать номер дня недели и возвращать его название', function () {
    expect(weekFn(1)).toBe('Понедельник');
    expect(weekFn(3)).toBe('Среда');
    expect(weekFn(7)).toBe('Воскресенье');
  });

  it('Если вводится строка, любое дробное число или число вне диапазона 1..7 – функция должна вернуть null.', function () {
    expect(weekFn(9)).toBeNull();
    expect(weekFn(1.5)).toBeNull();
    expect(weekFn('2')).toBeNull();
  });
});
