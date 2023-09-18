import { Place as PlaceType } from '../types/Types';
import mongoose from 'mongoose';
export declare const createPlace: (name: string, about: string, place: PlaceType) => Promise<mongoose.Document<unknown, {}, {
    location: {
        type: "Point";
        coordinates: number[];
    };
    name?: string | undefined;
    about?: string | undefined;
}> & {
    location: {
        type: "Point";
        coordinates: number[];
    };
    name?: string | undefined;
    about?: string | undefined;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const nearbyLocations: (lat: number, lon: number, distance: number) => Promise<any>;
