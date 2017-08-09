
exports.addOp = function (var1, var2) {
    const number1 = isNaN(var1) ? 0 : var1;
    const number2 = isNaN(var2) ? 0 : var2;

    return number1 + number2;
}