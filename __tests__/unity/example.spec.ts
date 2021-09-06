import mock from '../mock/mock.json';

describe('Um exemplo de teste unitário', () => {
  beforeEach(() => {
    mock.name = expect.any(String);
    mock.date = expect.any(Date);
  });

  it('deveria conter todos os atributos do mockup', () => {
    const register = {
      name: 'Teste',
      date: new Date(),
    };

    // delete register.name;
    expect(register).toStrictEqual(mock);
  });
});
