import swaggerAutogen from "swagger-autogen"

const outputFile = './swagger.json';
const endpointsFiles = ['./app.ts'];

swaggerAutogen()(outputFile, endpointsFiles);