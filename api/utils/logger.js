"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevels = void 0;
class Logger {
    static isLoggable(level) {
        if (process.env.BOT_ENV == "dev") {
            return true;
        }
        else {
            if (level == LogLevels.info)
                return true;
        }
        return false;
    }
    static get whiteColor() {
        return "\x1b[37m";
    }
    static get blueColor() {
        return "\x1b[36m";
    }
    static getLogColor(level) {
        switch (level) {
            case LogLevels.debug:
                return "\x1b[35m";
            case LogLevels.info:
                return "\x1b[37m";
            case LogLevels.warn:
                return "\x1b[33m";
            case LogLevels.error:
                return "\x1b[31m";
        }
    }
    static info(message) {
        Logger.log(message, LogLevels.info);
    }
    static warn(message) {
        Logger.log(message, LogLevels.warn);
    }
    static error(message) {
        Logger.log(message, LogLevels.error);
    }
    static log(message, level = LogLevels.debug) {
        if (Logger.isLoggable(level))
            console.log(`${Logger.getLogColor(level)}[${Logger.blueColor}BOT${Logger.getLogColor(level)}] ` + message);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static dump(...obj) {
        if (Logger.isLoggable(LogLevels.debug))
            console.log(`${Logger.getLogColor(LogLevels.debug)}[${Logger.blueColor}BOT${Logger.getLogColor(LogLevels.debug)}] - DUMPING OBJECT => ${Logger.whiteColor}`, ...obj);
    }
}
exports.default = Logger;
var LogLevels;
(function (LogLevels) {
    LogLevels[LogLevels["debug"] = 0] = "debug";
    LogLevels[LogLevels["info"] = 1] = "info";
    LogLevels[LogLevels["warn"] = 2] = "warn";
    LogLevels[LogLevels["error"] = 3] = "error";
})(LogLevels = exports.LogLevels || (exports.LogLevels = {}));
