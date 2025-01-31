import { NthPrime } from "./sieve";

describe("Sieve", () => {
  test("smoke test", () => {
    expect(NthPrime).not.toBeNull();
  });

  test("valid results", () => {
    expect(NthPrime(0)).toBe(2);
    expect(NthPrime(19)).toBe(71);
    expect(NthPrime(99)).toBe(541);
    expect(NthPrime(500)).toBe(3581);
    expect(NthPrime(986)).toBe(7793);
    expect(NthPrime(2000)).toBe(17393);
    expect(NthPrime(1000000)).toBe(15485867);
    expect(NthPrime(10000000)).toBe(179424691);
    //expect(NthPrime(100000000)).toBe(2038074751); not required, just a fun challenge
  });
});
