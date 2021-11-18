import { usePricePepeBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalPepe = getBalanceNumber(totalRewards)
  const pepePriceBusd = usePricePepeBusd()

  return totalPepe * pepePriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
