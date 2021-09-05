import BaseSchema from './baseSchema';

class ExampleSchema extends BaseSchema {
  constructor() {
    super('test', {
      name: String,
      date: Date,
    });
  }
}

export default ExampleSchema;
