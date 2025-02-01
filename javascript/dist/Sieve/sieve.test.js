"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sieve_1 = require("./sieve");
describe("Sieve", function () {
    test("smoke test", function () {
        expect(sieve_1.nthPrime).not.toBeNull();
    });
    test("valid results", function () {
        expect((0, sieve_1.nthPrime)(0)).toBe(2);
        expect((0, sieve_1.nthPrime)(19)).toBe(71);
        expect((0, sieve_1.nthPrime)(99)).toBe(541);
        expect((0, sieve_1.nthPrime)(500)).toBe(3581);
        expect((0, sieve_1.nthPrime)(986)).toBe(7793);
        expect((0, sieve_1.nthPrime)(2000)).toBe(17393);
        expect((0, sieve_1.nthPrime)(1000000)).toBe(15485867);
        expect((0, sieve_1.nthPrime)(10000000)).toBe(179424691);
        expect((0, sieve_1.nthPrime)(100000000)).toBe(2038074751);
        expect((0, sieve_1.nthPrime)(100000001)).toBe(2038074761);
    });
    test("invalid params", function () {
        expect(function () { return (0, sieve_1.nthPrime)(-1); }).toThrow("n must be >= 0");
        expect(function () { return (0, sieve_1.nthPrime)(100000002); }).toThrow("Only values of n <= 100000001 are supported");
    });
});
