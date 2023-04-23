"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
var custom_error_1 = require("./custom-error");
/** 4xx Client Error
 * The request could not be understood by the server due to malformed syntax.
 * The client SHOULD NOT repeat the request without modifications.
 * Wikipedia
 * The request cannot be fulfilled due to bad syntax.
 * General error when fulfilling the request would cause an invalid state. Domain validation errors, missing data, etc. are some examples.
 */
var BadRequestError = /** @class */ (function (_super) {
    __extends(BadRequestError, _super);
    function BadRequestError(msg) {
        if (msg === void 0) { msg = "Bad request"; }
        var _this = _super.call(this, msg) || this;
        _this.statusCode = 404;
        Object.setPrototypeOf(_this, BadRequestError.prototype);
        return _this;
    }
    BadRequestError.prototype.serializeErrors = function () {
        return [{ message: this.message }];
    };
    return BadRequestError;
}(custom_error_1.CustomError));
exports.BadRequestError = BadRequestError;
