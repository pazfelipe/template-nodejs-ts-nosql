import ConnectionSession from '../../app/source/database/connection';
import { exampleCreate } from '../../app/source/services/example';

describe('Um exemplo de teste integrado', () => {
  afterAll(async () => {
    const session = new ConnectionSession();
    const conn = await session.connection();
    await conn.connection.db.dropDatabase();
    await conn.disconnect();
  });

  it('deveria cadastrar um novo registro', async () => {
    const register = {
      name: 'Teste',
      date: new Date(),
    };

    const result = await exampleCreate(register);

    expect(result).toStrictEqual({ message: 'Registro criado com sucesso' });
  });
});
