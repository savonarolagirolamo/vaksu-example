# Vasku contract example

![npm version](https://img.shields.io/npm/v/vasku-example?label=npm)
![npm downloads](https://img.shields.io/npm/dt/vasku-example?label=downloads)

## How to use

```typescript
import { TonClient } from '@eversdk/core'
import { libWeb } from '@eversdk/lib-web'
import { Global } from 'vasku'
import { Example } from 'vasku-example'

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

## How to build

```shell
npx vasku compile
```

## How to publish npm package

```shell
yarn npm publish
```

