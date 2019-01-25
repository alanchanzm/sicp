const { smallest_divisor } = require('./1.21');

function search_for_primes(limit) {
  return search_for_primes_iter();

  function search_for_primes_iter(count = 0, n = limit) {
    if (count >= 3) return;
    if (timed_prime_test(n)) {
      search_for_primes_iter(count + 1, n + 2);
    } else {
      search_for_primes_iter(count, n + 2);
    }
  }
}

function is_prime(n) {
  return n === smallest_divisor(n);
}

function timed_prime_test(n) {
  return start_prime_test(runtime());

  function start_prime_test(start_time) {
    const result = is_prime(n);
    if (result) report_prime(runtime() - start_time);
    return result;
  }
  function report_prime(elapsed_time) {
    console.log(n);
    console.log(` *** ${elapsed_time}`);
  }
  function runtime() {
    return new Date().valueOf();
  }
}

search_for_primes(1001);
search_for_primes(10001);
search_for_primes(100001);
search_for_primes(1000001);
