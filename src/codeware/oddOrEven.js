function divisors(integer) {
  const divisors = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) divisors.push(i);
  }

  return divisors.length === 0 ? `${integer} is prime` : divisors;
}

divisors(16);
