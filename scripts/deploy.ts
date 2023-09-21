import { Example } from '../build'
import { B, Global, namedKeys } from 'vendee'

async function main (): Promise<void> {
  await (new Example( { keys: await namedKeys('example')}))
    .deploy(0.1 * B, { number: 0 })
  Global.client?.close()
}

main().catch(console.error)