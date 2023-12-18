const { OPERATIONS } = require('./constants');

const isUndefined = (value) => value === undefined;

const isNumber = (value) => !isNaN(value);

const hasTwoNumbers = (arg1, arg2) => [arg1, arg2].every(isNumber);

const convertStringToNumber = (string) => Number(string);

const isZeroDivisor = (operation, arg2) => operation === OPERATIONS.DIV && arg2 === '0';

module.exports = {
    isNumber,
    hasTwoNumbers,
    convertStringToNumber,
    isZeroDivisor,
    isUndefined,
}