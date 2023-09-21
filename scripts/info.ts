import { Example } from '../build'
import { AccountType, Global } from 'vendee'
import { namedKeys } from 'vendee-keys'

async function main (): Promise<void> {
  const keys = await namedKeys('example')
  const example = new Example( { keys })
  console.log(`Address: ${await example.address()}`)
  console.log(`Account type: ${await example.accountType()}`)
  console.log(`Balance: ${await example.balance()}`)
  if (await example.accountType() === AccountType.active)
    console.log(`Count: ${(await example.run.getCount()).count}`)
  Global.client?.close()
}

main().catch(console.error)