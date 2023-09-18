"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const pointSchema = new mongoose_1.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true,
    },
    coordinates: {
        type: [Number],
        required: true,
    },
});
const placeSchema = new mongoose_1.Schema({
    name: String,
    about: String,
    location: {
        type: pointSchema,
        required: true,
        index: '2dsphere',
    },
}, { collection: 'place' });
exports.default = (0, mongoose_1.model)('Place', placeSchema, 'place');
//# sourceMappingURL=Place.js.map