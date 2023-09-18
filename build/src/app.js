"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoDbConfig_1 = __importDefault(require("./config/mongoDbConfig"));
const Routes_1 = __importDefault(require("./router/Routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use('*', (0, cors_1.default)());
app.use('/', Routes_1.default);
app.listen(port, async () => {
    await (0, mongoDbConfig_1.default)();
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map