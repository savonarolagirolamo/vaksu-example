import { assert } from 'chai'
import { Example } from '../build'
import { B, createTransferPayload, generateRandomKeyPair, SafeMultisigWallet, x0 } from 'vendee'

const INITIAL_VALUE = 10

describe('Example', function () {
  it('deploy', async (): Promise<void> => {
    const example = new Example()
    await example.deploy(0.1 * B, { number: INITIAL_VALUE })
    const getCountOut = await example.run.getCount()
    assert.equal(parseInt(getCountOut.count), INITIAL_VALUE)
  })

  it('receive', async (): Promise<void> => {
    const example = new Example()
    await example.deploy(0.1 * B, { number: INITIAL_VALUE })
    const wallet = new SafeMultisigWallet()
    const keys = await generateRandomKeyPair()
    await wallet.deploy(0.2 * B, { owners: [x0(keys.public)], reqConfirms: 1 })
    await wallet.call.sendTransaction({
      dest: await example.address(),
      value: 0.1 * B,
      bounce: true,
      flags: 0,
      payload: await createTransferPayload()
    }, keys)
    await example.wait()
    const getCountOut = await example.run.getCount()
    assert.equal(parseInt(getCountOut.count), INITIAL_VALUE + 1)
  })
})