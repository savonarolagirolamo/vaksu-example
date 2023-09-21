import { type CompiledContractConfig, Contract, type ContractOptions, type ResultOfCall } from 'vendee'
import { type KeyPair, type ResultOfProcessMessage } from '@eversdk/core'
import ExampleContent from './ExampleContent'
type constructorIn = {
  number: string | number | bigint
}
type getCountOut = {
  count: string
}

export class Example extends Contract {
  private readonly _call: ExampleCalls
  private readonly _run: ExampleRuns
  private readonly _payload: ExamplePayload
  constructor (config: CompiledContractConfig = {}, options: ContractOptions = {}) {
    if (config.address === undefined)
      super({
        abi: ExampleContent.abi,
        initial: config.initial ?? {},
        keys: config.keys,
        tvc: ExampleContent.tvc
      }, options)
    else
      super({
        address: config.address,
        abi: ExampleContent.abi
      }, options)
    this._call = new ExampleCalls(this)
    this._run = new ExampleRuns(this)
    this._payload = new ExamplePayload(this)
  }
  async deploy (
    value: string | number | bigint,
    input: constructorIn,
    useGiver: boolean = true,
    timeout: number = 60000
  ): Promise<ResultOfProcessMessage> {
    return await this._deploy(value, input, useGiver, timeout)
  }
  get call (): ExampleCalls {
    return this._call
  }
  get run (): ExampleRuns {
    return this._run
  }
  get payload (): ExamplePayload {
    return this._payload
  }
}
class ExampleCalls {
  constructor (private readonly contract: Contract) {}
  async getCount (keys?: KeyPair): Promise<ResultOfCall & { out: getCountOut }> {
    return await this.contract.callMethod('getCount', {}, keys)
  }
}
class ExampleRuns {
  constructor (private readonly contract: Contract) {}
  async getCount (): Promise<getCountOut> {
    return (await this.contract.runMethod('getCount')).value
  }
}
class ExamplePayload {
  constructor (private readonly contract: Contract) {}
  async getCount (): Promise<string> {
    return await this.contract.createPayload('getCount')
  }
}
