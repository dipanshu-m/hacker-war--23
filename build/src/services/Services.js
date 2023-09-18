"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nearbyLocations = exports.createPlace = void 0;
const Place_1 = __importDefault(require("../model/Place"));
const calculateDistance_1 = __importDefault(require("../helpers/calculateDistance"));
const createPlace = async (name, about, place) => {
    const data = await Place_1.default.create({
        name: name,
        about: about,
        location: place,
    });
    return data;
};
exports.createPlace = createPlace;
const nearbyLocations = async (lat, lon, distance) => {
    const options = {
        location: {
            $near: {
                $geometry: { type: 'Point', coordinates: [lon, lat] },
                $minDistance: 0,
                $maxDistance: distance * 1000,
            },
        },
    };
    const data = await Place_1.default.find(options).then(response => {
        return JSON.stringify(response);
    });
    const jsonData = JSON.parse(data);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    jsonData.forEach((d, index) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        jsonData[index]['distance'] =
            (0, calculateDistance_1.default)(lat, lon, d.location.coordinates[1], d.location.coordinates[0]) * 1000; //to convert it to metres
    });
    return jsonData;
};
exports.nearbyLocations = nearbyLocations;
//# sourceMappingURL=Services.js.map