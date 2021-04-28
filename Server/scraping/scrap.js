const puppeteer = require('puppeteer');

const scrapFunc = async (url) => {
	if (url === undefined) { 
		return '';
	}

	console.log(url);
	const browser = await puppeteer.launch({
		headless: false,
		args: [
			'--start-maximized', // you can also use '--start-fullscreen'
		],
	});

	const page = await browser.newPage();
	await page.setViewport({ width: 1920, height: 1080 });
	// await page.goto(
	// 	'https://physics.stackexchange.com/questions/632189/if-i-pull-a-metal-bar-for-long-enough-with-a-constant-small-force-will-it-event'
	// );
	
	await page.goto(url);
	// const title = await page.title();
	// const url = await page.url();

	// const quest = await page.$('header');
	// console.log(quest);

	const titleQuestion = await page.evaluate(
		() => document.querySelector('.question-hyperlink').textContent
	);
	// const ansArr = await page.evaluate(() =>
	// 	document.querySelector('#answer-632249')
	// );
	const content = await page.evaluate(() => {
        const contentArr = [];
        let a = document.querySelectorAll('.answer');
        // document.querySelector('.container #content + div + div #mainbar #answers .answer .post-layout .answercell .js-post-body')

                // .querySelectorAll('p')
                // .forEach( p => contentArr.push(p.innerText))
                // .forEach( p => {
				// 	console.log(p)	
				// })
		return (a);
        // return contentArr
		// .join(' ').replace(/[\"]/g,'')
    });
	console.log(content);
	// console.log(ansArr);
	// ansArr.forEach((ans) => {
	// 	console.log(ans);
	// });

	console.log(titleQuestion);
	await browser.close();
	return titleQuestion;
}

module.exports = scrapFunc;

// module.exports = (async (url) => {
// 	if (url === undefined) { return ''}
// 	console.log(url);
// 	const browser = await puppeteer.launch({
// 		headless: false,
// 		args: [
// 			'--start-maximized', // you can also use '--start-fullscreen'
// 		],
// 	});

// 	const page = await browser.newPage();
// 	await page.setViewport({ width: 1920, height: 1080 });
// 	// await page.goto(
// 	// 	'https://physics.stackexchange.com/questions/632189/if-i-pull-a-metal-bar-for-long-enough-with-a-constant-small-force-will-it-event'
// 	// );
	
// 	await page.goto(url);
// 	// const title = await page.title();
// 	// const url = await page.url();

// 	// const quest = await page.$('header');
// 	// console.log(quest);

// 	const titleQuestion = await page.evaluate(
// 		() => document.querySelector('.question-hyperlink').textContent
// 	);
// 	// const ansArr = await page.evaluate(() =>
// 	// 	document.querySelector('#answer-632249')
// 	// );
// 	// const content = await page.evaluate(() => {
//     //     const contentArr = []
//     //     document.querySelector('.container > #content > div > div > #mainbar > #answers > .answer > div > ')
//     //             .querySelectorAll('p')
//     //             .forEach( p => contentArr.push(p.innerText))
//     //     return contentArr
// 	// 	// .join(' ').replace(/[\"]/g,'')
//     // })
// 	// console.log(ansArr);
// 	// ansArr.forEach((ans) => {
// 	// 	console.log(ans);
// 	// });

// 	console.log(titleQuestion);
// 	return titleQuestion;
// 	// await browser.close();
// })();
