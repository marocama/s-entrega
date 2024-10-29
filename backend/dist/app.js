"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("./route"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const swagger_1 = require("./swagger");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE']
}));
app.use('/api', route_1.default);
(0, swagger_1.setupSwagger)(app);
mongoose_1.default.connect('mongodb://mongo:27017/delivery', {
// useNewUrlParser: true,
// useUnifiedTopology: true,
});
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => console.log('Conectado ao MongoDB'));
exports.default = app;
