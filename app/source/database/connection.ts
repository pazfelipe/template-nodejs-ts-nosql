import mongoose from 'mongoose';

class Connection {
  private url;
  private port;
  private db;

  constructor() {
    this.url =
      process.env.ENV === 'test'
        ? process.env.DB_HOST_TEST
        : process.env.DB_HOST;
    this.port =
      process.env.ENV === 'test'
        ? process.env.DB_PORT_TEST
        : process.env.DB_PORT;
    this.db =
      process.env.ENV === 'test'
        ? process.env.DB_NAME_TEST
        : process.env.DB_NAME;
  }

  protected connection() {
    return mongoose.connect(`mongodb://${this.url}:${this.port}/${this.db}`);
  }
}

export default Connection;
