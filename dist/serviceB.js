"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServiceB = startServiceB;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT_B = 4001;
// Simple endpoint that returns some data
app.get('/from-b', (req, res) => {
    const payload = {
        service: 'B',
        message: 'Hello from Service B',
        timestamp: new Date().toISOString()
    };
    console.log('[Service B] /from-b called, responding with:', payload);
    res.json(payload);
});
function startServiceB() {
    app.listen(PORT_B, () => {
        console.log(`Service B listening on http://localhost:${PORT_B}`);
    });
}
