describe('Тестирование функции defUpperStr()', function () {
  it('Функция должна вернуть переданный текст в верхнем регистре', function () {
    const text = 'My text';

    expect(defUpperStr(text)).toBe(text.toUpperCase());
  });

  it('Функция должна вернуть переданный текст по умолчанию "DEFAULT TEXT" в верхнем регистре', function () {
    expect(defUpperStr()).toBe('DEFAULT TEXT');
  });
});
