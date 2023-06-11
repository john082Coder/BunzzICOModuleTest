import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});



export const getICOContract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.ICO;
}


export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}

export const airdrop = async (airdropERC20Contract, recipients, amounts, account) => {
  return airdropERC20Contract.methods.airdrop(recipients, amounts.map(x=>new BigNumber(x).times(new BigNumber(10).pow(9)).toString())).send({ from: account })
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const connectToOtherContracts = async (icoContract, contracts, account) => {
  return icoContract.methods.connectToOtherContracts([contracts]).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
export const buy = async (icoContract, amount,  account) => {
  return icoContract.methods.buy().send({ from: account, value:new BigNumber(amount).times(new BigNumber(10).pow(18)).toString()})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
export const updatePrice = async (icoContract, _price, account) => {
  return icoContract.methods.updatePrice(new BigNumber(_price).times(new BigNumber(10).pow(18)).toString()).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
export const withdrawETH = async (icoContract, account) => {
  return icoContract.methods.withdrawETH().send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}
export const withdrawToken = async (icoContract, account) => {
  return icoContract.methods.withdrawToken().send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}





