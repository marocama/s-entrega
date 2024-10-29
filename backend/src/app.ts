import cors from 'cors';
import routes from './route';
import express from 'express';
import mongoose from 'mongoose';
import { setupSwagger } from './swagger';

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'DELETE']
}));

app.use('/api', routes);
setupSwagger(app);

mongoose.connect('mongodb://mongo:27017/delivery', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o MongoDB:'));
db.once('open', () => console.log('Conectado ao MongoDB'));

export default app;
