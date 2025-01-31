const MAX_N = 100_000_001;

/*
 * The sieve only needs to be large enough to include expected primes, so it is
 * beneficial to have an approximation of how many primes to expect to pre-size
 * the sieve array.
 *
 * On one hand, the test shows the prime value for the largest number so there
 * is really no need to calculate this, but in a real scenario, we wouldn't know
 * so it would beneficial to have some approximation.
 *
 * Based on the Wikipedia article below, n * ln(n) provides a proportional
 * approximation to the nth prime value, however we must ensure that our limit
 * exceeds the actual value of the nth prime to guarantee all may be stored.
 *
 * I loaded up a bunch of known primes in Desmos.com so I can tweak the
 * approximation to a fitting curve. It's possible that at even higher prime
 * values, this approximation will no longer suffice.
 *
 * https://en.wikipedia.org/wiki/Prime_number#:~:text=It%20also%20implies,%5B83%5D
 */
const getLimit = (n: number) => n * (Math.log(n) + 2);

/**
 * The Sieve of Eratosthenes algorithm identifies primes by process of
 * elimination. Starting at the first prime, 2, all multiples of two are removed
 * from the range. The next consecutive remaining number may be presumed prime.
 * Then rinse and repeat until the whole range is covered.
 *
 * I took me a while to understand how this algorithm worked until I saw the gif
 * on the wikipedia article.
 *
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 */
const sievePrimes = () => {
  const sieve = new Uint8Array(getLimit(MAX_N));

  // Note: I found it interesting that the tests use an zero-based nth
  const primes = new Int32Array(MAX_N + 1);

  /**
   * Optimization:
   * Evens are the largest range to check. Pre-population saves a lot of time.
   */
  let found = 0;
  primes[found++] = 2;

  // Mark index with a positive value to indicate a composite (non-prime)
  for (let i = 4; i < sieve.length; i += 2) {
    sieve[i] = 1;
  }

  // Iterate through all remaining values, skipping evens for performance
  for (let i = 3; i < sieve.length; i += 2) {
    // If the next number wasn't marked, it must be prime
    if (!sieve[i]) {
      primes[found++] = i;

      /**
       * Mark all the composites.
       * Starting at i^2 is another nice trick that won't miss any primes
       * but also save quite a bit of time as the last found prime gets larger.
       */
      for (let j = i * i; j < sieve.length; j += i * 2) {
        sieve[j] = 1;
      }
    }
  }
  return primes;
};

// Primes are cached upfront at module scope to avoid need to recalculate
const primes = sievePrimes();

/** Ensure that good arguments are provided */
const validateArguments = (n: number) => {
  if (n < 0) {
    throw new Error("n must be >= 0");
  }

  if (n > MAX_N) {
    throw new Error(`Only values of n <= ${MAX_N} are supported`);
  }
};

/**
 * We should have all the primes cached up to our configured max.
 *
 * I toyed with the idea of using generators to yield the next value until
 * a larger number is needed, but I didn't find the edge cases and added
 * complexity to be worth the effort.
 *
 * What a fun problem with endless potential for optimization!
 */
export const nthPrime = (n: number) => {
  validateArguments(n);

  const prime = primes[n];

  if (!prime) {
    throw new Error("Failed to find the nth prime");
  } else {
    return prime;
  }
};
