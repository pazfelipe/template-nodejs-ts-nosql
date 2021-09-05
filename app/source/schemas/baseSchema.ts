import { Connection, Schema } from 'mongoose';
import DatabaseConnector from '../database/connection';

class BaseSchema {
  private schemaObject: Schema;
  private collectionName: string;
  private connectionSession: any;

  constructor(collection: string, schema: Schema) {
    this.collectionName = collection;
    this.schemaObject = new Schema(schema);
    this.connectionSession = new DatabaseConnector();
  }

  private connect(): Connection {
    return this.connectionSession.connection();
  }

  private create() {
    if (
      !this.connect()
        .modelNames()
        .some((p: string) => p === this.collectionName)
    ) {
      return this.connect().model(this.collectionName, this.schemaObject);
    }
    return this.connect().model(this.collectionName);
  }

  private model() {
    return this.create();
  }

  protected async insert(data: Record<string, any>): Promise<void> {
    const d = Array.isArray(data) ? data : [data];
    await this.model().insertMany(d);
  }

  protected async findOne(
    filter: Record<string, any>,
  ): Promise<Record<string, any>> {
    return this.model().findOne(filter);
  }

  protected async find(
    filter: Record<string, any>,
    options = undefined,
  ): Promise<Record<string, any>> {
    return this.model().find(filter, options);
  }

  protected async updateOne(
    filter: Record<string, any>,
    data: Record<string, any>,
  ): Promise<void> {
    await this.model().findOneAndUpdate(filter, data);
  }

  protected async update(
    filter: Record<string, any>,
    data: Record<string, any>[],
  ): Promise<void> {
    await this.model().updateMany(filter, data);
  }

  protected async removeOne(filter: Record<string, any>): Promise<void> {
    await this.model().findOneAndDelete(filter);
  }

  protected async remove(
    filter: Record<string, any>,
    options?: Record<string, any>,
  ): Promise<void> {
    await this.model().deleteMany(filter, options);
  }

  protected async aggregate(
    pipeline: Record<string, any>[],
    options?: Record<string, any>,
  ): Promise<Record<string, any>[]> {
    return this.model().aggregate(pipeline, options);
  }
}

export default BaseSchema;
