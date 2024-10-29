"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API - Teste Uhuu',
            version: '1.0.0',
            description: 'Documentação da API para o teste Fullstack Uhuu',
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const setupSwagger = (app) => {
    app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
};
exports.setupSwagger = setupSwagger;
