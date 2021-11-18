import BigNumber from 'bignumber.js'
import { convertSharesToPepe } from 'views/Pools/helpers'
import { multicallv2 } from 'utils/multicall'
import pepeVaultAbi from 'config/abi/pepeVault.json'
import { getPepeVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'

export const fetchPublicVaultData = async () => {
  try {
    const calls = [
      'getPricePerFullShare',
      'totalShares',
      'calculateHarvestPepeRewards',
      'calculateTotalPendingPepeRewards',
    ].map((method) => ({
      address: getPepeVaultAddress(),
      name: method,
    }))

    const [[sharePrice], [shares], [estimatedPepeBountyReward], [totalPendingPepeHarvest]] = await multicallv2(
      pepeVaultAbi,
      calls,
    )

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    const totalPepeInVaultEstimate = convertSharesToPepe(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalPepeInVault: totalPepeInVaultEstimate.pepeAsBigNumber.toJSON(),
      estimatedPepeBountyReward: new BigNumber(estimatedPepeBountyReward.toString()).toJSON(),
      totalPendingPepeHarvest: new BigNumber(totalPendingPepeHarvest.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalPepeInVault: null,
      estimatedPepeBountyReward: null,
      totalPendingPepeHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const calls = ['performanceFee', 'callFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: getPepeVaultAddress(),
      name: method,
    }))

    const [[performanceFee], [callFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(pepeVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      callFee: callFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
