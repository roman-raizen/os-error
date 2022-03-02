import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'

// @ts-ignore
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main,
})