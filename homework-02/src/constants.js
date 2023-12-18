const ERROR_TYPES = {
    ZERO_DIVISOR: 'zeroDivisor',
    STRING_ARGUMENTS: 'stringArguments',
    TYPE_OPERATION: 'enterOperation',
    TYPE_ARGUMENTS: 'typeArguments',
}

const ERROR_MESSAGES = {
    [ERROR_TYPES.ZERO_DIVISOR]: 'You cannot divide by zero',
    [ERROR_TYPES.STRING_ARGUMENTS]: 'Both arguments must be numbers',
    [ERROR_TYPES.TYPE_OPERATION]: 'Operation must be entered',
    [ERROR_TYPES.TYPE_ARGUMENTS]: 'Two arguments must be entered',
}

const OPERATIONS = {
    ADD: 'add',
    DIV: 'div',
    MUL: 'mul',
    SUB: 'sub',
}

module.exports = {
    ERROR_TYPES,
    ERROR_MESSAGES,
    OPERATIONS,
};