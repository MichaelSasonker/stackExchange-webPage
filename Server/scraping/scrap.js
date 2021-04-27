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
	await page.goto(
		'https://physics.stackexchange.com/questions/632189/if-i-pull-a-metal-bar-for-long-enough-with-a-constant-small-force-will-it-event'
	);
	// const title = await page.title();
	// const url = await page.url();

	// const quest = await page.$('header');
	// console.log(quest);

	const titleQuestion = await page.evaluate(
		() => document.querySelector('.question-hyperlink').textContent
	);
	const ansArr = await page.evaluate(() =>
		document.querySelectorAll('#answers > .answer > .post-layout > p')
	);
	console.log(ansArr);
	// ansArr.forEach((ans) => {
	// 	console.log(ans);
	// });

	// console.log(titleQuestion);
	// console.log(title, url);
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
