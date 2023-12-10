const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
      title: 'swagger-exemplo',
      description: 'Iteris - Express Swgger',
    },
    host: 'localhost:3000',
    schemes: ['http'],
  };
  
// criar a pasta "swagger" manualmente na raiz do projeto
const outputFile = "swagger_output.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);