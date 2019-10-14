const path = require('path');
const args = require('yargs')
    .option('instances', {alias: 'i', description: 'Number of test run streams', type: 'string', default: 1})
    .option('tag', {alias: 't', description: 'Test suite(s) tag to run', type: 'string', demandedOption: true})
    .argv;

exports.config = {
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000,
    },

    baseUrl: 'https://qa.aws.cpaglobal.com/tipms/Q491',
    directConnect: true,
    allScriptsTimeout: 120000,
    capabilities: {
        'browserName': 'chrome',
        shardTestFiles: args.instances > 1,
        maxInstances: args.instances || 1
    },

    specs: [path.resolve('./tests/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        ignoreUncaughtExceptions: true,
        tags: args.tag ? `@${args.tag}` : `@all`
    },

    //jasmine reporters
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
    }
}
