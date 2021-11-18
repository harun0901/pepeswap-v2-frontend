import BigNumber from 'bignumber.js'
import { getPepeAddress } from 'utils/addressHelpers'
import useTokenBalance from './useTokenBalance'

/**
 * A hook to check if a wallet's PEPE balance is at least the amount passed in
 */
const useHasPepeBalance = (minimumBalance: BigNumber) => {
  const { balance: cakeBalance } = useTokenBalance(getPepeAddress())
  return cakeBalance.gte(minimumBalance)
}

export default useHasPepeBalance
