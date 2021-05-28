function CheckPrime(prime) {
  for (var i = 2; i <= prime/2; i++) {
    if (prime % i === 0) {
      return;
    }
}
}