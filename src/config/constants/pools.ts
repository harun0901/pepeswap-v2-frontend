import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.pepe,
    earningToken: tokens.pepe,
    contractAddress: {
      56: '',
      97: '0xa94f172a68a38F787CC14Cb9e3D3c7F424eFF675',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.05',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.busd,
    earningToken: tokens.pepe,
    contractAddress: {
      56: '',
      97: '0x30636145fbf0b177684186670EDC9c70169D2A22',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    sortOrder: 999,
    tokenPerBlock: '0.01',
    isFinished: false,
  },
]

export default pools
