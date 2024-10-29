"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetDeliveries = exports.addDelivery = exports.getDeliveries = void 0;
const delivery_1 = require("../models/delivery");
const geolocation_1 = require("../services/geolocation");
const getDeliveries = async (req, res) => {
    const limit = 10;
    const page = parseInt(req.query.page) || 1;
    const deliveries = await delivery_1.Delivery.find().skip((page - 1) * limit).limit(limit);
    const total = await delivery_1.Delivery.countDocuments();
    res.json({ deliveries, totalPages: Math.ceil(total / limit) });
};
exports.getDeliveries = getDeliveries;
const addDelivery = async (req, res) => {
    try {
        const { name, weight, address } = req.body;
        if (!name || !weight || !address) {
            res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }
        const { lat, lon } = await (0, geolocation_1.getCoordinates)(`${address.street}, ${address.number}, ${address.neighborhood}, ${address.city}, ${address.state}, ${address.country}`);
        const newDelivery = new delivery_1.Delivery({
            name,
            weight,
            address,
            coordinates: { lat, lon },
        });
        await newDelivery.save();
        res.status(201).json(newDelivery);
    }
    catch (error) {
        console.log("ERRORRR", error);
        res.status(500).json({ error: 'Erro ao cadastrar entrega', message: error });
    }
};
exports.addDelivery = addDelivery;
const resetDeliveries = async (req, res) => {
    await delivery_1.Delivery.deleteMany({});
    res.status(200).json({ message: 'Todos os cadastros foram resetados' });
};
exports.resetDeliveries = resetDeliveries;
