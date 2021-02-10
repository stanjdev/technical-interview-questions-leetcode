// https://www.hackerrank.com/challenges/priyanka-and-toys/problem

// Shipping containers can only carry 4 + minimum weight, how many containers do you need?
function toys(w) {
  let containers = 0;
  let ceil = -1; // there are items that weigh 0 units.. 
  w.sort((a, b) => a - b);
  for (const num of w) {
    if (num <= ceil) {
      continue; 
    } else {
      containers++;
      ceil = num + 4;
    }
  }
  return containers;
}
