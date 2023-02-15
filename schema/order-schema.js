const ajv = require('./ajv-schema')


const jsonSchema = {
    type: 'array',
    properties: {
      name: {
        type:'string',
        minLength: 10,
        maxLength: 50
      },
      phone: {
        type: 'number',
        minLength: 10,
        maxLength: 10
      },
      age: {
        type: 'number',
        minimum: 0
      },
    },
    required: ['name', 'age'],
    additionalProperties: false
  };

  module.exports = ajv.compile(jsonSchema);
