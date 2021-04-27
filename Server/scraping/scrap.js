const puppeteer = require('puppeteer');

module.exports = (async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: [
			'--start-maximized', // you can also use '--start-fullscreen'
		],
	});

	const page = await browser.newPage();
	await page.setViewport({ width: 1920, height: 1080 });
	await page.goto('https://stackexchange.com/');
	const title = await page.title();
	const url = await page.url();
	console.log(title, url);
	console.log('a');
	// // Get the "viewport" of the page, as reported by the page.
	// const dimensions = await page.evaluate(() => {
	// 	return {
	// 		width: document.documentElement.clientWidth,
	// 		height: document.documentElement.clientHeight,
	// 		deviceScaleFactor: window.devicePixelRatio,
	// 	};
	// });

	// console.log('Dimensions:', dimensions);
	// // await browser.close();
})();
