const {hasTwoNumbers, convertStringToNumber, isZeroDivisor, isUndefined} = require("./utils");
const errorHandler = require("./errorHandler");
const { ERROR_TYPES } = require("./constants");

const checkAllArguments = (operation, arg1, arg2) => {
    if (isUndefined(operation)) {
        errorHandler(ERROR_TYPES.TYPE_OPERATION);
        process.exit(1);
    }

    if (isUndefined(arg1) || isUndefined(arg2)) {
        errorHandler(ERROR_TYPES.TYPE_ARGUMENTS);
        process.exit(1);
    }

    if (!hasTwoNumbers(arg1, arg2)) {
        errorHandler(ERROR_TYPES.STRING_ARGUMENTS);
        process.exit(1);
    }

    if (isZeroDivisor(operation, arg2)) {
        errorHandler(ERROR_TYPES.ZERO_DIVISOR);
        process.exit(1);
    }
}

const convertArgumentsToNumbers = (arg1, arg2) => {
    return [arg1, arg2].map(convertStringToNumber);
}

module.exports = {
    convertArgumentsToNumbers,
    checkAllArguments,
};