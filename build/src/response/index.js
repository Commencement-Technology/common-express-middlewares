"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseGenerator = void 0;
function responseGenerator(responseOptions) {
    var _a = responseOptions.statusCode, statusCode = _a === void 0 ? 200 : _a, _b = responseOptions.message, message = _b === void 0 ? "ok" : _b, _c = responseOptions.data, data = _c === void 0 ? [] : _c, _d = responseOptions.ok, ok = _d === void 0 ? true : _d;
    return {
        statusCode: statusCode,
        ok: ok,
        message: message,
        data: data,
    };
}
exports.responseGenerator = responseGenerator;
