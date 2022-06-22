function validateNotEmpty(received) {
    expect(received).not.toBeNull();
    expect(received).not.toBeUndefined();
    expect(received).toBeTruthy();
}
exports.validateNotEmpty = validateNotEmpty;

function validateStringEquality(received, expected) {
    expect(received).not.toEqual('randomlettershehe');
    expect(received).toEqual(expected);
}
exports.validateStringEquality = validateStringEquality;

function validateMongoDuplicationError(name, code) {
    expect(name).not.toEqual(/dummy/i);
    expect(name).toEqual('ValidationError');
}
exports.validateMongoDuplicationError = validateMongoDuplicationError;