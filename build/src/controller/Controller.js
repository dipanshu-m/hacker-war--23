"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDestination = exports.createLocation = exports.updateLocation = void 0;
const Services_1 = require("../services/Services");
const responseSchema_1 = __importDefault(require("../helpers/responseSchema"));
const updateLocation = async (req, res) => {
    const { lat, lon, distance = 1 } = req.body;
    try {
        const data = await (0, Services_1.nearbyLocations)(lat, lon, distance);
        return res.json((0, responseSchema_1.default)(true, data));
    }
    catch (error) {
        return res.json((0, responseSchema_1.default)(false, error));
    }
};
exports.updateLocation = updateLocation;
const createLocation = async (req, res) => {
    const { name, about, lat, long } = req.body;
    try {
        const place = { type: 'Point', coordinates: [long, lat] };
        const data = await (0, Services_1.createPlace)(name, about, place);
        return res.json((0, responseSchema_1.default)(true, data));
    }
    catch (error) {
        return res.json((0, responseSchema_1.default)(false, error));
    }
};
exports.createLocation = createLocation;
const createDestination = async (req, res) => {
    res.json((0, responseSchema_1.default)(true, req.body));
};
exports.createDestination = createDestination;
//# sourceMappingURL=Controller.js.map