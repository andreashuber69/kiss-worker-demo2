import { implementObjectWorker } from "kiss-worker";

// We want to serve an object of this class on a worker thread
class Calculator {
    public multiply(left: bigint, right: bigint) {
        return left * right;
    }

    public divide(left: bigint, right: bigint) {
        return left / right;
    }
}

export const createCalculatorWorker = implementObjectWorker(
    // A function that creates a web worker running this script
    () => new Worker(
        new URL("createCalculatorWorker.js", import.meta.url),
        { type: "module" },
    ),
    Calculator,
);
