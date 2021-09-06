import BaseSchema from './baseSchema';

class ExampleSchema extends BaseSchema {
  constructor() {
    super('example', {
      name: String,
      date: Date,
    });
  }
}

export default ExampleSchema;
