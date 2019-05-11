const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicianco o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o db:
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useFindAndModify: false });
// require('./src/models/Product');
requireDir('./src/models');

// Primeira rota
// app.get('/', (req, res) => {
// 	Product.create({
// 		title: 'React Native',
// 		description: 'Build native apps with React',
// 		url: 'https://github.com/facebook/react-native'
// 	});
// 	return res.send('Hello world');
// });

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
