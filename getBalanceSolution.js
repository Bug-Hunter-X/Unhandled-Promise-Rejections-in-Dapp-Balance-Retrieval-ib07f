async function getBalance(address) {
  try {
    const balance = await web3.eth.getBalance(address);
    return balance;
  } catch (error) {
    console.error('Error retrieving balance:', error);
    // Handle the error appropriately, e.g., display a user-friendly message
    return null; // Or throw the error to be handled further up the call stack
  }
}

// Using async/await and error handling
getBalance(account).then(balance => {
  if (balance !== null) {
    console.log('Balance:', balance);
  } else {
    console.log('Failed to retrieve balance.');
  }
});