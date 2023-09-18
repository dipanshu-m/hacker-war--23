"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const dbURI = 'mongodb+srv://dipanshumahato:LoEFbs9diDLIsCXS@cluster0.nwcakhm.mongodb.net/';
exports.default = () => {
    return (0, mongoose_1.connect)(dbURI, { dbName: 'SIH' })
        .then(data => {
        console.log('Connected to database successfully');
        return data;
    })
        .catch(error => {
        throw error;
    });
};
//# sourceMappingURL=mongoDbConfig.js.map