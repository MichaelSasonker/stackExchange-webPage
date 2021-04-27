const express = require('express');
const cors = require('cors');
const path = require('path');
require('./db/mongoose');
const app = express();
// const puppeteer = require('./scrap');
const router = new express.Router();
const accountRouter = require('./routers/user');

//express uses
app.use(cors());
app.use(express.json());
app.use(router);
app.use(accountRouter);
puppeteer;

//deploy to heroku
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/*', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log('listening...');
});
