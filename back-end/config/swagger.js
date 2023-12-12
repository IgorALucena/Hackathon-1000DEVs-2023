const swaggerAutogen = require("swagger-autogen")();

const doc = {
    info: {
      title: 'API Carteira de vacinação',
      description: 'API criada como requisito para conclusão do Hackathon',
    },
    host: 'teste2-production.up.railway.app',
    schemes: ['https'],
  };
  
// criar a pasta "swagger" manualmente na raiz do projeto
const outputFile = "swagger_output.json";
const endpointsFiles = ["./index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);