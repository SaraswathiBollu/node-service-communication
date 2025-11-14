import { startServiceA } from './serviceA';
import { startServiceB } from './serviceB';

startServiceB();
startServiceA();

console.log('Both Service A and Service B have been started.');
