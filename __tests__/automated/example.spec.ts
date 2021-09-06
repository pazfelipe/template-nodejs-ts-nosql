import { Server } from 'http';
import request from 'supertest';

import server from '../../app/source/app';
import ConnectionSession from '../../app/source/database/connection';

describe('Um exemplo de teste automatizado', () => {
  let url: string;
  let app: Server;
  let cookie: string;

  beforeAll((done) => {
    app = server.listen(process.env.PORT);
    url = `http://localhost:${process.env.PORT}/api`;
    request(url)
      .post('/example/login')
      .send({ username: 'example' })
      .then((response) => {
        cookie = response.text;
        done();
      })
      .catch((err) => done(err));
  });

  afterAll(async () => {
    const session = new ConnectionSession();
    const conn = await session.connection();
    await conn.connection.db.dropDatabase();
    await conn.disconnect();
    app.unref();
  });

  it('deveria cadastrar um novo registro acessando a url e retornar status 201', (done) => {
    const register = {
      name: 'Example',
      date: new Date(),
    };

    request(url)
      .post('/example')
      .set('Authorization', cookie)
      .send(register)
      .expect(201)
      .then((response) => {
        expect(response.body).toStrictEqual({
          message: 'Registro criado com sucesso',
        });
        done();
      })
      .catch((err) => done(err));
  });

  it('deveria retornar um erro HTTP 400 por faltar o valor do atributo name', (done) => {
    const register = {
      name: null,
      date: new Date(),
    };

    type Result = {
      messages: string[];
    };

    request(url)
      .post('/example')
      .set('Authorization', cookie)
      .send(register)
      .expect(400)
      .then((response) => {
        expect(JSON.parse(response.text)).toMatchObject<Result>({
          messages: ['Campo name é obrigatório'],
        });
        done();
      })
      .catch((err) => done(err));
  });

  it('deveria retornar um erro HTTP 401', (done) => {
    request(url)
      .post('/example')
      .send({})
      .expect(401)
      .then(() => {
        done();
      })
      .catch((err) => done(err));
  });
});
