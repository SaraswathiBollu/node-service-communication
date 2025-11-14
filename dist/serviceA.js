"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServiceA = startServiceA;
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const PORT_A = process.env.PORT || 3000; // 👈 important for Azure
const SERVICE_B_BASE_URL = 'http://localhost:4000';
app.get('/from-a', async (req, res) => {
    try {
        console.log('[Service A] /from-a called. Calling Service B...');
        const responseFromB = await axios_1.default.get(`${SERVICE_B_BASE_URL}/from-b`);
        const combinedResponse = {
            service: 'A',
            messageFromA: 'Hello from Service A',
            dataFromB: responseFromB.data,
            timestamp: new Date().toISOString()
        };
        res.json(combinedResponse);
    }
    catch (error) {
        console.error('[Service A] Error calling Service B:', error);
        res.status(500).json({ error: 'Failed to communicate with Service B' });
    }
});
function startServiceA() {
    app.listen(PORT_A, () => {
        console.log(`Service A listening on port ${PORT_A}`);
    });
}
