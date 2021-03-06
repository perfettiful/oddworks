'use strict';

const Promise = require('bluebird');
const _ = require('lodash');
const logger = require('../logger');

function StoresUtils() {
	return this;
}

function initializer(bus, config) {
	logger.log(`Initializing store: ${config.store.name}`);
	return config.store.initialize(bus, config.options);
}

Object.assign(StoresUtils.prototype, {
	load(bus, storeConfigurations) {
		return Promise.all(_.map(storeConfigurations, config => initializer(bus, config)));
	}
});

module.exports = exports = new StoresUtils();
