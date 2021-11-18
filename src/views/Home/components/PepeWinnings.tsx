import React from 'react'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePricePepeBusd } from 'state/hooks'
import { Text } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'bignumber.js'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import CardValue from './CardValue'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 24px;
`

interface PepeWinningsProps {
  claimAmount: BigNumber
}

const PepeWinnings: React.FC<PepeWinningsProps> = ({ claimAmount }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const pepeAmount = getBalanceNumber(claimAmount)
  const pepePriceBusd = usePricePepeBusd()
  const claimAmountBusd = new BigNumber(pepeAmount).multipliedBy(pepePriceBusd).toNumber()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '76px' }}>
        {t('Locked')}
      </Text>
    )
  }

  return (
    <Block>
      <CardValue value={pepeAmount} lineHeight="1.5" />
      {pepePriceBusd.gt(0) && <CardBusdValue value={claimAmountBusd} decimals={2} />}
    </Block>
  )
}

export default PepeWinnings
