import { Express } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API - Sistema de entrega',
      version: '1.0.0',
      description: 'Documentação da API do sistema de entrega',
    },
    servers: [
      {
        url: 'http://localhost:5001/api',
      },
    ],
    components: {
      schemas: {
        Delivery: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            weight: { type: 'number' },
            address: {
              type: 'object',
              properties: {
                street: { type: 'string' },
                number: { type: 'string' },
                neighborhood: { type: 'string' },
                complement: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
                country: { type: 'string' },
              },
            },
            coordinates: {
              type: 'object',
              properties: {
                lat: { type: 'number' },
                lon: { type: 'number' },
              },
            },
          },
        },
        NewDelivery: {
          type: 'object',
          required: ['name', 'weight', 'address'],
          properties: {
            name: { type: 'string' },
            weight: { type: 'number' },
            address: {
              type: 'object',
              properties: {
                street: { type: 'string' },
                number: { type: 'string' },
                neighborhood: { type: 'string' },
                complement: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
                country: { type: 'string' },
              },
            },
          },
        },
      },
    },
  },
  apis: ['./src/route.ts'], 
};

const swaggerSpec = swaggerJsDoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
