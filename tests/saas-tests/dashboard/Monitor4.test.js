const puppeteer = require('puppeteer');
const utils = require('../../test-utils');
const init = require('../../test-init');

let browser, page;
require('should');

// user credentials
const email = utils.generateRandomBusinessEmail();
const password = '1234567890';
const componentName = utils.generateRandomString();
const testServerMonitorName = utils.generateRandomString();

describe('Monitor API', () => {
    const operationTimeOut = init.timeout;

    beforeAll(async () => {
        jest.setTimeout(init.timeout);

        browser = await puppeteer.launch(utils.puppeteerLaunchConfig);
        page = await browser.newPage();
        await page.setUserAgent(utils.agent);

        const user = {
            email,
            password,
        };
        await init.registerUser(user, page);
        await init.addComponent(componentName, page);
    });

    afterAll(async done => {
        await browser.close();
        done();
    });

    test(
        'should display SSL not found status',
        async done => {
            // Navigate to Component details
            await init.navigateToComponentDetails(componentName, page);
            
            await init.pageWaitForSelector(page, '#form-new-monitor');
            await init.pageWaitForSelector(page, 'input[id=name]', {
                visible: true,
                timeout: init.timeout,
            });
            await init.pageWaitForSelector(page, 'input[id=name]', {
                visible: true,
                timeout: init.timeout,
            });
            await init.pageClick(page, 'input[id=name]');
            await page.focus('input[id=name]');
            await init.pageType(page, 'input[id=name]', testServerMonitorName);
            await init.pageClick(page, '[data-testId=type_url]');
            await init.pageWaitForSelector(page, '#url', {
                visible: true,
                timeout: init.timeout,
            });
            await init.pageClick(page, '#url');
            await init.pageType(page, '#url', utils.HTTP_TEST_SERVER_URL);
            await init.pageClick(page, 'button[type=submit]');

            let sslStatusElement = await init.pageWaitForSelector(
                page,
                `#ssl-status-${testServerMonitorName}`,
                { visible: true, timeout: operationTimeOut }
            );
            sslStatusElement = await sslStatusElement.getProperty('innerText');
            sslStatusElement = await sslStatusElement.jsonValue();
            sslStatusElement.should.be.exactly('No SSL Found');
            done();
        },
        operationTimeOut
    );

});
