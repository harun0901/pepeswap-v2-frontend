import { ReactText } from 'react'
import { usePricePepeBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import easterPrizes from 'config/constants/trading-competition/easter'
import BigNumber from 'bignumber.js'

export const localiseTradingVolume = (value: number, decimals = 0) => {
  return value.toLocaleString('en-US', { maximumFractionDigits: decimals })
}

export const useCompetitionPepeRewards = (userPepeReward: ReactText) => {
  const pepeAsBigNumber = new BigNumber(userPepeReward as string)
  const pepeBalance = getBalanceNumber(pepeAsBigNumber)
  const pepePriceBusd = usePricePepeBusd()
  return {
    pepeReward: pepeBalance,
    dollarValueOfCakeReward: pepePriceBusd.gt(0) ? pepeBalance * pepePriceBusd.toNumber() : null,
  }
}

// 1 is a reasonable teamRank default: accessing the first team in the config.
// We use the smart contract userPointReward to get a users' points
// Achievement keys are consistent across different teams regardless of team team rank
// If a teamRank value isn't passed, this helper can be used to return achievement keys for a given userRewardGroup
export const getRewardGroupAchievements = (userRewardGroup: string, teamRank = 1) => {
  const userGroup = easterPrizes[teamRank].filter((prizeGroup) => {
    return prizeGroup.group === userRewardGroup
  })[0]
  const userAchievements = userGroup && userGroup.achievements
  return userAchievements
}

export default localiseTradingVolume
