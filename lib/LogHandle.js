"use strict";

const fs = require('fs');
const log4js = require('log4js');
const path = require('path');

const JSON_PATH = require('../config/log4js.json');
const LOG_DIR = path.resolve(__dirname, '../logs');

class Log {
    constructor() {
        //加载log4js配置
        if(!fs.existsSync(LOG_DIR)) {
            fs.mkdirSync(LOG_DIR);
        }
        this._defaults = {};
        log4js.configure({
          appenders: {
            app: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/app.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
            http: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/http.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
            router: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/router.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
            service: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/service.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
            request: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/request.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
            proxy: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/proxy.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
            middleware: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/middleware.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
            error: { type: 'dateFile', filename: path.resolve(__dirname, "../logs/error.log"), maxLogSize: 10485760, numBackups: 3, pattern: '-yyyy-MM-dd' },
          },
          categories: {
            default: { appenders: [ 'app', 'http', 'router', 'service', 'request', 'proxy', 'middleware'], level: 'info' },
            error: { appenders: [ 'error'], level: 'error' }
          }
        })
    }

    getLogger(name) {
        let _default = this._defaults;
        if(!name) {
            return this;
        }else{
            let logger = _default[name];
            if(!logger) {
                logger = log4js.getLogger(name);
            }
            return logger;
        }
    }

    connectLogger(name) {
        return log4js.connectLogger(this.getLogger(name), { level: 'auto'/*, format: ':method :url :status'*/ });
    }
}

var instance = new Log();
module.exports = instance;