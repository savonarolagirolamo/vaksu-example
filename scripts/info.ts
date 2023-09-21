import { Example } from '../build'
import { AccountType, Global, namedKeys } from 'vendee'

async function main (): Promise<void> {
  const example = new Example( { keys: await namedKeys('example')})
  console.log(`Address: ${await example.address()}`)
  console.log(`Account type: ${await example.accountType()}`)
  console.log(`Balance: ${await example.balance()}`)
  if (await example.accountType() === AccountType.active)
    console.log(`Count: ${(await example.run.getCount()).count}`)
  Global.client?.close()
}

main().catch(console.error)