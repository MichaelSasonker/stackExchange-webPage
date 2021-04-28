const express = require('express');
const cors = require('cors');
const path = require('path');
require('./db/mongoose');
const app = express();
// const puppeteer = require('./scraping/scrap');
const router = new express.Router();
const accountRouter = require('./routers/user');

//express uses
app.use(cors());
app.use(express.json());
app.use(router);
app.use(accountRouter);
// puppeteer;

//deploy to heroku
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/*', (req, res) => {
// 	res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// var exec = require('child_process').exec,
// 	child;
// console.log(exec);

// child = () => {
// 	exec('cat *.js | wc -l', function (error, stdout, stderr) {
// 		console.log('stdout: ' + stdout);
// 		console.log('stderr: ' + stderr);
// 		if (error !== null) {
// 			console.log('exec error: ' + error);
// 		}
// 	});
// };
// child();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
	console.log('listening...');
});
