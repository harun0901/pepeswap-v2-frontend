import React from 'react'
import { Flex, Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { usePepeVault, usePricePepeBusd } from 'state/hooks'
import { getPepeVaultEarnings } from 'views/Pools/helpers'
import RecentPepeProfitBalance from './RecentPepeProfitBalance'

const RecentPepeProfitCountdownRow = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { pepeAtLastUserAction, userShares, lastUserActionTime },
  } = usePepeVault()
  const pepePriceBusd = usePricePepeBusd()
  const { hasAutoEarnings, autoPepeToDisplay, autoUsdToDisplay } = getPepeVaultEarnings(
    account,
    pepeAtLastUserAction,
    userShares,
    pricePerFullShare,
    pepePriceBusd.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent PEPE profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentPepeProfitBalance
          pepeToDisplay={autoPepeToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentPepeProfitCountdownRow
