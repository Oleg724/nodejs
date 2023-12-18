#!/usr/bin/env node

const operations = require('../index');
const { convertArgumentsToNumbers, checkAllArguments } = require('./processes');

const [,, operation, arg1, arg2] = process.argv;

checkAllArguments(operation, arg1, arg2);

const [a, b] = convertArgumentsToNumbers(arg1, arg2);

operations[operation](a, b);