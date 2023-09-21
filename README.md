# Vendee contract example

![npm version](https://img.shields.io/npm/v/vendee-example?label=npm)
![npm downloads](https://img.shields.io/npm/dt/vendee-example?label=downloads)

## How to use

```typescript
import { TonClient } from '@eversdk/core'
import { libWeb } from '@eversdk/lib-web'
import { Global } from 'vendee'
import { Example } from 'vendee-example'

const endpoints = ['https://gql-devnet.venom.network']
const address = '0:0d01f835c90fed8f59ff2ecfd18c56caa88d9d1fec90146adfd182e0bf88d25d'

async function main (): Promise<void> {
  TonClient.useBinaryLibrary(libWeb as any)
  Global.client = new TonClient({ network: { endpoints } })
  const example = new Example({ address })
  const count = (await example.run.getCount()).count
}

main().catch(console.error)
```


## Contract

### Address 

`0:0d01f835c90fed8f59ff2ecfd18c56caa88d9d1fec90146adfd182e0bf88d25d`

view on [devnet.venomscan.com](https://devnet.venomscan.com/accounts/0:0d01f835c90fed8f59ff2ecfd18c56caa88d9d1fec90146adfd182e0bf88d25d)

### Keys

```json
{
  "public": "1562859a48b31639c311411ac38ded9d198fbf905dd589c902df2656550e6ec5",
  "secret": "ae8a9d68a0865d23d1a33984098ed440e52927422ab38607d81f89910cfad145"
}
```

## How to build

```shell
npx vendee compile
```

## How to publish npm package

```shell
yarn publish
```

