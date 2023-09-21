import { Example } from '../build'
import { B, Global } from 'vendee'
import { namedKeys } from 'vendee-keys'

async function main (): Promise<void> {
  const keys = await namedKeys('example')
  const example = new Example( { keys })
  await example.deploy(0.1 * B, { number: 0 })
  console.log(`Address: ${await example.address()}`)
  Global.client?.close()
}

main().catch(console.error)