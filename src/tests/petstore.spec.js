const axios = require('axios');
const expect = require('chai').expect;

describe('First script', function () {
  it('create pet order ', async function () {
    const requestBody = {
      "id": 2,
      "category": {
        "id": 2,
        "name": "test"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 2,
          "name": "str"
        }
      ],
      "status": "available"
    };

    const createPetResponse = await axios.post(
        'https://petstore.swagger.io/v2/pet',
        requestBody
      );

      expect(createPetResponse.status).to.equal(200);
      expect(createPetResponse.data).to.include({ id: 2 });

      const orderRequest = {
        "id": 2,
        "petId": 2,
        "quantity": 2,
        "shipDate": "2024-03-18T16:23:29.684Z",
        "status": "placed",
        "complete": true
      }
      const orderResponse = await axios.post('https://petstore.swagger.io/v2/store/order',orderRequest)

      expect(orderResponse.status).to.equal(200);
      expect(orderResponse.data).to.include({ id: 2 , petId: 2});

      
  });

  it('delete pet ', async function () {
    const requestBody = {
      "id": 2,
      "category": {
        "id": 2,
        "name": "test"
      },
      "name": "doggie",
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 2,
          "name": "str"
        }
      ],
      "status": "available"
    };

    const createPetResponse = await axios.post(
        'https://petstore.swagger.io/v2/pet',
        requestBody
      );

      expect(createPetResponse.status).to.equal(200);
      expect(createPetResponse.data).to.include({ id: 2 });

      const orderRequest = {
        "id": 2,
        "petId": 2,
        "quantity": 2,
        "shipDate": "2024-03-18T16:23:29.684Z",
        "status": "placed",
        "complete": true
      }
      const orderResponse = await axios.post('https://petstore.swagger.io/v2/store/order',orderRequest)

      
      
      expect(orderResponse.status).to.equal(200);
      expect(orderResponse.data).to.include({ id: 2 , petId: 2});

      const response = await axios.delete(
        'https://petstore.swagger.io/v2/store/order/2'
      );
    
      expect(response.status).to.equal(200);
    expect(response.data).to.include({ message: '2' });
      
  });

  



});

