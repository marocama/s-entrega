"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCoordinates = void 0;
const axios_1 = __importDefault(require("axios"));
const getCoordinates = async (address) => {
    const response = await axios_1.default.get(`https://nominatim.openstreetmap.org/search?format=json&address=${address}`);
    console.log("response address", response);
    if (response.data.length === 0)
        throw new Error("Endereço não encontrado");
    const { lat, lon } = response.data[0];
    return { lat: parseFloat(lat), lon: parseFloat(lon) };
};
exports.getCoordinates = getCoordinates;
