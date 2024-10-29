"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const delivery_1 = require("./controllers/delivery");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /deliveries:
 *   get:
 *     summary: Lista todas as entregas paginadas
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número da página para paginação
 *     responses:
 *       200:
 *         description: Lista de entregas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 deliveries:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Delivery'
 *                 totalPages:
 *                   type: integer
 */
router.get('/deliveries', delivery_1.getDeliveries);
/**
 * @swagger
 * /deliveries:
 *   post:
 *     summary: Adiciona uma nova entrega
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewDelivery'
 *     responses:
 *       201:
 *         description: Entrega cadastrada com sucesso
 *       400:
 *         description: Erro de validação
 */
router.post('/deliveries', delivery_1.addDelivery);
/**
 * @swagger
 * /deliveries:
 *   delete:
 *     summary: Reseta todas as entregas cadastradas
 *     responses:
 *       200:
 *         description: Todos os cadastros foram resetados
 */
router.delete('/deliveries', delivery_1.resetDeliveries);
exports.default = router;
