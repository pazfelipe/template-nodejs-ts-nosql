import mongoose, { Schema } from 'mongoose';
import DatabaseConnector from '../database/connection';

class BaseSchema {
  private schemaObject: Schema;
  private collectionName: string;
  private connectionSession: any;

  /**
   * Schema Default para conexão com o banco
   * @param collection Nome da collection
   * @param schema Schema da collection
   */
  constructor(collection: string, schema: Record<string, any>) {
    this.collectionName = collection;
    this.schemaObject = new Schema(schema);
  }

  private async connect(): Promise<typeof mongoose> {
    const connectionSession = new DatabaseConnector();
    return await connectionSession.connection();
  }

  private async create() {
    const con = await this.connect();

    if (!con.modelNames().some((p: string) => p === this.collectionName)) {
      return con.model(this.collectionName, this.schemaObject);
    }

    return con.model(this.collectionName);
  }

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

  async findOne(filter: Record<string, any>): Promise<Record<string, any>> {
    return (await this.model()).findOne(filter);
  }

  async find(
    filter: Record<string, any>,
    options = undefined,
  ): Promise<Record<string, any>> {
    return (await this.model()).find(filter, options);
  }

  async updateOne(
    filter: Record<string, any>,
    data: Record<string, any>,
  ): Promise<void> {
    await (await this.model()).findOneAndUpdate(filter, data);
  }

  async update(
    filter: Record<string, any>,
    data: Record<string, any>[],
  ): Promise<void> {
    await (await this.model()).updateMany(filter, data);
  }

  async removeOne(filter: Record<string, any>): Promise<void> {
    await (await this.model()).findOneAndDelete(filter);
  }

  async remove(
    filter: Record<string, any>,
    options?: Record<string, any>,
  ): Promise<void> {
    await (await this.model()).deleteMany(filter, options);
  }

  async aggregate(
    pipeline: Record<string, any>[],
    options?: Record<string, any>,
  ): Promise<Record<string, any>[]> {
    return (await this.model()).aggregate(pipeline, options);
  }
}

export default BaseSchema;
