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
exports.NotFoundError = void 0;
var custom_error_1 = require("./custom-error");
/**
 * The server has not found anything matching the Request-URI.
 * No indication is given of whether the condition is temporary or permanent.
 * The 410 (Gone) status code SHOULD be used if the server knows, through some internally configurable mechanism, that an old resource is permanently unavailable and has no forwarding address.
 * This status code is commonly used when the server does not wish to reveal exactly why the request has been refused, or when no other response is applicable.
 * Wikipedia
 * The requested resource could not be found but may be available again in the future.
 * Subsequent requests by the client are permissible.
 * Used when the requested resource is not found, whether it doesn't exist or if there was a 401 or 403 that, for security reasons, the service wants to mask.
 */
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(msg) {
        if (msg === void 0) { msg = "Resource not found"; }
        var _this = _super.call(this, msg) || this;
        _this.statusCode = 404;
        Object.setPrototypeOf(_this, NotFoundError.prototype);
        return _this;
    }
    NotFoundError.prototype.serializeErrors = function () {
        return [{ message: this.message }];
    };
    return NotFoundError;
}(custom_error_1.CustomError));
exports.NotFoundError = NotFoundError;
