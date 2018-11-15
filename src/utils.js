const isEven = n => n % 2 === 0;

const randNumber = (n, m) => Math.floor(Math.random() * (m - n + 1) + n);

const gcd = (n, m) => {
  if (n === m) {
    return n;
  }

  const maxNumber = Math.floor(Math.max(n, m) / 2);

  for (let i = maxNumber; i > 1; i -= 1) {
    if (n % i === 0 && m % i === 0) {
      return i;
    }
  }

  return 1;
};

const isPrime = (n) => {
  if (n <= 0) {
    return false;
  }

  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

export {
  isEven, randNumber, gcd, isPrime,
};
