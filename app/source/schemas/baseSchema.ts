import mongoose, { Schema } from 'mongoose';
import DatabaseConnector from '../database/connection';

class BaseSchema {
  private schemaObject: Schema;
  private collectionName: string;

  /**
   * Schema Default para conexão com o banco
   * @param collection Nome da collection
   * @param schema Schema da collection
   */
  constructor(collection: string, schema: Record<string, any>) {
    this.collectionName = collection;
    this.schemaObject = new Schema(schema);
  }

  /**
   * Realiza a conexão com a instância do banco
   * @returns
   */
  private async connect(): Promise<typeof mongoose> {
    const connectionSession = new DatabaseConnector();
    return await connectionSession.connection();
  }

  /**
   * Retorna a collection, caso ela exista. Caso contrário, cria uma nova
   * collection recebendo no construtor da classe o nome da collection e o schema.
   * @returns
   */
  private async create() {
    const con = await this.connect();

    if (!con.modelNames().some((p: string) => p === this.collectionName)) {
      return con.model(this.collectionName, this.schemaObject);
    }

    return con.model(this.collectionName);
  }

  /**
   * Retorna o objeto model do mongoose com a collection informada
   * @returns
   */
  private async model() {
    return await this.create();
  }

  /**
   * Grava um Objeto ou array de objetos no banco
   * @param data Objeto para ser cadastrado no banco
   */
  async insert(
    data: Record<string, any> | Array<Record<string, any>>,
  ): Promise<void> {
    const d = Array.isArray(data) ? data : [data];
    await (await this.model()).insertMany(d);
  }

  /**
   * Retorna um registro com base no filtro informado
   * @param filter Filtro da query
   * @returns
   */
  async findOne(filter: Record<string, any>): Promise<Record<string, any>> {
    return (await this.model()).findOne(filter);
  }

  /**
   * Retorna um array de resultados com base no filtro informado.
   * Também pode ser passados os filtros para a _projection_ do resultado
   * @param filter Filtro da Query
   * @param options Opções do retorno da projection
   * @returns
   */
  async find(
    filter: Record<string, any>,
    options?: Record<string, any>,
  ): Promise<Record<string, any>> {
    return (await this.model()).find(filter, options);
  }

  /**
   * Atualiza um registro com base no filtro informado.
   * @param filter Filtro da Query
   * @param data Objeto contendo a atualização do registro
   * @returns
   */
  async updateOne(
    filter: Record<string, any>,
    data: Record<string, any>,
  ): Promise<void> {
    await (await this.model()).findOneAndUpdate(filter, data);
  }

  /**
   * Atualiza um conjunto de registros com base no filtro informado.
   * @param filter Filtro da Query
   * @param data Objeto contendo a atualização do registro
   * @returns
   */
  async update(
    filter: Record<string, any>,
    data: Record<string, any>,
  ): Promise<void> {
    await (await this.model()).updateMany(filter, data);
  }

  /**
   * Deleta um registro com base no filtro informado.
   * @param filter Filtro da Query
   * @returns
   */
  async removeOne(filter: Record<string, any>): Promise<void> {
    await (await this.model()).findOneAndDelete(filter);
  }

  /**
   * Deleta um conjunto de registros com base no filtro informado.
   * @param filter Filtro da Query
   * @param options Opções do retorno da projection
   * @returns
   */
  async remove(
    filter: Record<string, any>,
    options?: Record<string, any>,
  ): Promise<void> {
    await (await this.model()).deleteMany(filter, options);
  }

  /**
   * Deleta um registro com base no filtro informado.
   * @param pipeline Array contendo a aggregation com os passos da query
   * @param options Opções do retorno da projection
   * @returns
   */
  async aggregate(
    pipeline: Record<string, any>[],
    options?: Record<string, any>,
  ): Promise<Record<string, any>[]> {
    return (await this.model()).aggregate(pipeline, options);
  }
}

export default BaseSchema;
