import { nthPrime } from "./sieve";

describe("Sieve", () => {
  test("smoke test", () => {
    expect(nthPrime).not.toBeNull();
  });

  test("valid results", () => {
    expect(nthPrime(0)).toBe(2);
    expect(nthPrime(19)).toBe(71);
    expect(nthPrime(99)).toBe(541);
    expect(nthPrime(500)).toBe(3581);
    expect(nthPrime(986)).toBe(7793);
    expect(nthPrime(2000)).toBe(17393);
    expect(nthPrime(1000000)).toBe(15485867);
    expect(nthPrime(10000000)).toBe(179424691);
    expect(nthPrime(100000000)).toBe(2038074751);
    expect(nthPrime(100000001)).toBe(2038074761);
  });

  test("invalid params", () => {
    expect(() => nthPrime(-1)).toThrow("n must be >= 0");
    expect(() => nthPrime(100000002)).toThrow(
      "Only values of n <= 100000001 are supported"
    );
  });
});
