import { createCalculatorWorker } from "./createCalculatorWorker.ts";

const worker = await createCalculatorWorker();
let current = 2n;

for (let round = 0; round < 20; ++round) {
    current = await worker.obj.multiply(current, current);
}

console.log(current);
worker.terminate();
