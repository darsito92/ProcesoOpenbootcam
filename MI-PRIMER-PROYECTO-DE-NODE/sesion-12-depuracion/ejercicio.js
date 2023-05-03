function fibonacci(num) {
    const sequence = [1, 1];
  
    for (let i = 2; i < num; i++) {
      const prev1 = sequence[i - 1];
      const prev2 = sequence[i - 2];
      sequence.push(prev1 + prev2);
    }
  
    return sequence.slice(0, num);
  }
  
  console.log(fibonacci(6));
  