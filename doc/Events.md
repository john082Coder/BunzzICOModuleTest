## Buy
Event emitted when the user bought tokens

|Name|Type|Description|
|--- |---|---|
|_buyer|address|The address of the buyer|
|_amount|uint256|The amount of the tokens which the buyer bought|

## OwnershipTransferred
Event emitted when ownership transferred to another address.

|Name|Type|Description|
|--- |---|---|
|previousOwner|uint256|The address of the previous owner of the contract|
|newOwner|address|The address of the new owner|

## SetToken
Event emitted when the executor changed the token address.

|Name|Type|Description|
|--- |---|---|
|_executor|address|The address of the account which set the token address|
|_token|address|The address of the new token for ICO|

## UpdatePrice
Event emitted when the owner updated price for token

|Name|Type|Description|
|--- |---|---|
|_executor|address|The address of the account which changed the price|
|_price|uint256|The new price|