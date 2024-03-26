const axios = require('axios');
const expect = require('chai').expect;
const chaiJsonSchema = require('chai-json-schema');
const getUserSchema = require('../data/schemas/getUserSchema.json')
const chai = require('chai')

chai.use(chaiJsonSchema)

describe('First script', function () {
  it('get user endpoint', async function () {
    const requestBody = {
      id: 1,
      username: 'test',
      firstName: 'test',
      lastName: 'test',
      email: '',
      password: 'test',
      phone: '11111',
      userStatus: 0,
    };
    const createUserResponse = await axios.post(
      'https://petstore.swagger.io/v2/user',
      requestBody
    );
   
    expect(createUserResponse.status).to.equal(200);

    
    const response = await axios.get(
      'https://petstore.swagger.io/v2/user/test'
    );
    console.log(response.data);
    expect(response.status).to.equal(200);
    expect(response.data).to.include({ username: 'test' });
    console.log(getUserSchema)
    expect(response.data).to.be.jsonSchema(getUserSchema)
  });

  it('post user endpoint', async function () {
    const requestBody = {
      id: 1,
      username: 'test',
      firstName: 'test',
      lastName: 'test',
      email: '',
      password: 'test',
      phone: '11111',
      userStatus: 0,
    };
    const response = await axios.post(
      'https://petstore.swagger.io/v2/user',
      requestBody
    );
   
    expect(response.status).to.equal(200);
    expect(response.data).to.include({ type: 'unknown', message: '1' });
  });

  it('put user endpoint', async function () {
    const requestBody = {
      id: 1,
      username: 'test',
      firstName: 'test3',
      lastName: 'test',
      email: '',
      password: 'test',
      phone: '11111',
      userStatus: 0,
    };
    const response = await axios.put(
      'https://petstore.swagger.io/v2/user/test',
      requestBody
    );
    
    expect(response.status).to.equal(200);
    expect(response.data).to.include({ type: 'unknown', message: '1' });
  });

  it('delete user endpoint', async function () {
    const requestBody = {
      id: 1,
      username: 'test',
      firstName: 'test',
      lastName: 'test',
      email: '',
      password: 'test',
      phone: '11111',
      userStatus: 0,
    };
    const createUserResponse = await axios.post(
      'https://petstore.swagger.io/v2/user',
      requestBody
    );
   
    expect(createUserResponse.status).to.equal(200);
    const response = await axios.delete(
      'https://petstore.swagger.io/v2/user/test'
    );
    
    expect(response.status).to.equal(200);
    expect(response.data).to.include({ message: 'test' });
  });
});
