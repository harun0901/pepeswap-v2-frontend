import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getPepeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledPepeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const PepeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getPepeAddress()))
  const pepeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledPepeStats>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Pepe Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Total PEPE Supply')}</Text>
          {pepeSupply && <CardValue fontSize="14px" value={pepeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total PEPE Burned')}</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">{t('New PEPE/block')}</Text>
          <CardValue fontSize="14px" decimals={0} value={20} />
        </Row>
      </CardBody>
    </StyledPepeStats>
  )
}

export default PepeStats
