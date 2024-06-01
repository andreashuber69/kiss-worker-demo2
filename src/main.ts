import { createCalculatorWorker } from "./createCalculatorWorker.ts";

// Start a new worker thread waiting for work.
const worker = await createCalculatorWorker();

const element = document.querySelector("p");
let current = 2n;

for (let round = 0; element && round < 20; ++round) {
    // worker.obj is a proxy for the Calculator object on the worker
    // thread
    current = await worker.obj.multiply(current, current);
    element.textContent = `${current}`;
}
