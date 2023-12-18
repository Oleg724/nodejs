const { ERROR_MESSAGES } = require('./constants');

const errorHandler = (errorType) => {
    console.log(ERROR_MESSAGES[errorType]); // throw new Error
}

module.exports = errorHandler;