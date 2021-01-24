// https://www.hackerrank.com/challenges/sock-merchant/problem
// finding how many pairs exist in an array.

function sockMerchant(n, ar) {
  const visited = {};
  let pairs = 0;
  for (let i = 0; i < ar.length; i++) {
    let sock = ar[i];
    if (visited[sock] == undefined) visited[sock] = 1;
    else visited[sock]++;
    
    if (visited[sock] % 2 == 0) {
        pairs++;
    }
  }
  return pairs;
}