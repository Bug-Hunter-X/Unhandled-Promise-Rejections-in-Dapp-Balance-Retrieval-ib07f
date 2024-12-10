function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

// Calling the function without handling potential errors
getBalance(account).then(balance => {
  console.log('Balance:', balance);
});