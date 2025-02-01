package sieve

import "math"

type Sieve interface {
	NthPrime(n int64) int64
}

type eratosthenes struct {
	composites []int64
}

func NewSieve() Sieve {
	return &eratosthenes{}
}

func (e *eratosthenes) NthPrime(n int64) int64 {
	if n < 0 {
		return -1
	}

	fnp1 := float64(n + 1)
	limit := int64(fnp1 * (math.Log(fnp1) + 2))

	// Minimum of size 3 is needed to get first prime with zero-indexing
	limit = int64(math.Max(3, float64(limit)))

	composites := make([]bool, limit)
	composites[0], composites[1] = true, true

	// Mark evens upfront
	for i := int64(4); i < limit; i += 2 {
		composites[i] = true
	}

	// Check remaining
	for i := int64(3); i < limit; i += 2 {
		if !composites[i] {
			for j := i * i; j < limit; j += i * 2 {
				composites[j] = true
			}
		}
	}

	// Find and return the nth prime
	count := int64(0)
	for i, isComposite := range composites {
		if !isComposite {
			if count == n {
				return int64(i)
			}
			count++
		}
	}

	// Something went wrong
	return -1
}
