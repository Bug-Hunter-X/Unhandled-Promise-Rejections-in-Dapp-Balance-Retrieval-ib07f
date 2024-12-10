# Unhandled Promise Rejections in Dapp Balance Retrieval

This repository demonstrates a common error in decentralized applications (dApps): unhandled promise rejections.  The `getBalance` function attempts to retrieve an account's balance using web3.js but lacks proper error handling.  This can lead to unexpected behavior and a poor user experience.

The `getBalanceBug.js` file contains the erroneous code, while `getBalanceSolution.js` provides a corrected version with comprehensive error handling.