# Vendee contract example

![npm version](https://img.shields.io/npm/v/vendee-example?label=npm)
![npm downloads](https://img.shields.io/npm/dt/vendee-example?label=downloads)

## Contract

### Code

```sol
pragma ever-solidity >= 0.68.0;

contract Example {
    ///////////////
    // Variables //
    ///////////////
    uint256 private _count;

    /////////////////
    // Constructor //
    /////////////////
    constructor(uint8 number) {
        tvm.accept();
        _count = number;
    }

    ////////////
    // Getter //
    ////////////
    function getCount() public view returns (uint256 count) {
        return _count;
    }

    /////////////
    // Receive //
    /////////////
    receive() external {
        ++_count;
    }
}
```

### Functional

* Add `+1` to `_count` every time then contract receive coins
* `getCount()` method returns `_count` value

### Address

`0:0d01f835c90fed8f59ff2ecfd18c56caa88d9d1fec90146adfd182e0bf88d25d` 

[view on testnet.venomscan.com](https://testnet.venomscan.com/accounts/0:0d01f835c90fed8f59ff2ecfd18c56caa88d9d1fec90146adfd182e0bf88d25d)

### Keys

```json
{
  "public": "1562859a48b31639c311411ac38ded9d198fbf905dd589c902df2656550e6ec5",
  "secret": "ae8a9d68a0865d23d1a33984098ed440e52927422ab38607d81f89910cfad145"
}
```

## How to build contract

```shell
npx vendee compile
```

## How to publish package

```shell
yarn publish
```

