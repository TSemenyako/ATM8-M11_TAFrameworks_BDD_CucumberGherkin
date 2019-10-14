const BasePage = require ('../base_page/basePage');
const QueryList = require ('../query_page/queryList');
const QueryBuilder = require ('../query_page/queryBuilder');
const QueryResults = require ('../query_page/queryResults');
const Helper = require('../../helpers/helper');
const logger = require('../../../config/logger.config');

class QueryPage extends BasePage {
    constructor () {
        super();
        this.helper = new Helper();
        this.queryList = new QueryList();
        this.queryBuilder = new QueryBuilder();
        this.queryResults = new QueryResults();
    }

    async open() {
        logger.info('Opening Query page...');
        await browser.get(browser.baseUrl + '/UI/queries');
        await this.helper.waitForSpinnerHidden();
    }

    async searchQueryByName(queryName) {
        logger.info(`Searching for the query "${queryName}"...`);
        return this.queryList.searchQueryByName(queryName);
    }

    async runQuery(queryName) {
        logger.info(`Running the query "${queryName}"...`);
        return this.queryList.runQuery(queryName);
    }

    async isQueryLoaded(expectedQueryName) {
        return this.queryResults.isQueryLoaded(expectedQueryName);
    }
};

module.exports = QueryPage;