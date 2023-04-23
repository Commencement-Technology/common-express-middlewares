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
exports.ConflictError = void 0;
var custom_error_1 = require("./custom-error");
/** 4xx Client Error
 * The request could not be completed due to a conflict with the current state of the resource.
 * This code is only allowed in situations where it is expected that the user might be able to resolve the conflict and resubmit the request.
 * The response body SHOULD include enough information for the user to recognize the source of the conflict. Ideally, the response entity would include enough information for the user or user agent to fix the problem; however,
 * that might not be possible and is not required.
 * Conflicts are most likely to occur in response to a PUT request.
 * For example, if versioning were being used and the entity being PUT included changes to a resource which conflict with those made by an earlier (third-party) request, the server might use the 409 response to indicate that it can't complete the request.
 * In this case, the response entity would likely contain a list of the differences between the two versions in a format defined by the response Content-Type.
 */
var ConflictError = /** @class */ (function (_super) {
    __extends(ConflictError, _super);
    function ConflictError(msg) {
        if (msg === void 0) { msg = "Conflict Error"; }
        var _this = _super.call(this, msg) || this;
        _this.statusCode = 409;
        Object.setPrototypeOf(_this, ConflictError.prototype);
        return _this;
    }
    ConflictError.prototype.serializeErrors = function () {
        return [{ message: this.message }];
    };
    return ConflictError;
}(custom_error_1.CustomError));
exports.ConflictError = ConflictError;
