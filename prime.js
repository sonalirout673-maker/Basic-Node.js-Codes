function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

for (let i = 2; i <= 100; i++) {
  if (isPrime(i)) console.log(i);
}








function isprime(num){
    if(num<2) return false;
    for(let i=2; i<=Math.sqrt(num);i++){
        if(num%i===0) return false;
    }
    return true;
}
console.log(isprime(19));