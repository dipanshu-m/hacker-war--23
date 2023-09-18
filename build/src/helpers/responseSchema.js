"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (success, message) => {
    if (success) {
        return { success, message };
    }
    else
        return {
            success,
            error: JSON.parse(JSON.stringify(message, Object.getOwnPropertyNames(message))),
        };
};
//# sourceMappingURL=responseSchema.js.map