"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceA_1 = require("./serviceA");
const serviceB_1 = require("./serviceB");
(0, serviceB_1.startServiceB)();
(0, serviceA_1.startServiceA)();
console.log('Both Service A and Service B have been started.');
