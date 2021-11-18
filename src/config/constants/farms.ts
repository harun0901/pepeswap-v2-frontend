import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PEPE',
    lpAddresses: {
      97: '0x699Ee768A8A2850eFdA67f5e89b12a7e20Fd631A',
      56: '',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'PLUTO-BNB LP',
    lpAddresses: {
      97: '0x928c094411B971B07f437717265a6f900058Ce3C',
      56: '',
    },
    token: tokens.pluto,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'PEPE-PLUTO LP',
    lpAddresses: {
      97: '0x0F40b172a52E02185483bC8b433cDCb0B289E071',
      56: '',
    },
    token: tokens.pepe,
    quoteToken: tokens.pluto,
  },
  {
    pid: 3,
    lpSymbol: 'PEPE-BNB LP',
    lpAddresses: {
      97: '0xE2B8e9f9Ef4e2d75765e053215D58325586FD5e2',
      56: '',
    },
    token: tokens.pepe,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'PLUTO-BUSD LP',
    lpAddresses: {
      97: '0x0fcAe3b6B0Af8458C9D401207bC647C2c34E5D74',
      56: '',
    },
    token: tokens.pluto,
    quoteToken: tokens.busd,
  },
  {
    pid: 5,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0x3d17c08cc28644aB27E8a572E8e97C6EFfdda7Ef',
      56: '',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 6,
    lpSymbol: 'PLUTO-WETH LP',
    lpAddresses: {
      97: '0xEa40b3313fEBf6DB8A6a0E0B53961B66752bC25C',
      56: '',
    },
    token: tokens.pluto,
    quoteToken: tokens.weth,
  },
  {
    pid: 7,
    lpSymbol: 'BNB-WETH LP',
    lpAddresses: {
      97: '0x53ea8201D1B1efafE7aF578cE9fA611F93A65176',
      56: '',
    },
    token: tokens.wbnb,
    quoteToken: tokens.weth,
  },
  {
    pid: 8,
    lpSymbol: 'WETH-BUSD LP',
    lpAddresses: {
      97: '0x23905d1a3bC1a8Da3A204F44d0B31270139F24e3',
      56: '',
    },
    token: tokens.weth,
    quoteToken: tokens.busd,
  },
]

export default farms
