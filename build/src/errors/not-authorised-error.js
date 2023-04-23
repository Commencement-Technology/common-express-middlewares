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
exports.NotAuthorizedError = void 0;
var custom_error_1 = require("./custom-error");
/** 4xx Client Error
 * The request requires user authentication.
 * The response MUST include a WWW-Authenticate header field containing a challenge applicable to the requested resource.
 * The client MAY repeat the request with a suitable Authorization header field.
 * If the request already included Authorization credentials, then the 401 response indicates that authorization has been refused for those credentials.
 * If the 401 response contains the same challenge as the prior response, and the user agent has already attempted authentication at least once,
 * then the user SHOULD be presented the entity that was given in the response,
 * since that entity might include relevant diagnostic information. HTTP access authentication is explained in "HTTP Authentication: Basic and Digest Access Authentication".
 * Wikipedia
 * Similar to 403 Forbidden, but specifically for use when authentication is possible but has failed or not yet been provided.
 * The response must include a WWW-Authenticate header field containing a challenge applicable to the requested resource.
 * Error code response for missing or invalid authentication token.
 */
var NotAuthorizedError = /** @class */ (function (_super) {
    __extends(NotAuthorizedError, _super);
    function NotAuthorizedError(msg) {
        if (msg === void 0) { msg = "Not authorized"; }
        var _this = _super.call(this, msg) || this;
        _this.statusCode = 401;
        Object.setPrototypeOf(_this, NotAuthorizedError.prototype);
        return _this;
    }
    NotAuthorizedError.prototype.serializeErrors = function () {
        return [
            {
                message: this.message,
            },
        ];
    };
    return NotAuthorizedError;
}(custom_error_1.CustomError));
exports.NotAuthorizedError = NotAuthorizedError;
