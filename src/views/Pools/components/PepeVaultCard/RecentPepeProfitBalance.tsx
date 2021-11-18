import React from 'react'
import { Text, TooltipText, useTooltip } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

interface RecentPepeProfitBalanceProps {
  pepeToDisplay: number
  dollarValueToDisplay: number
  dateStringToDisplay: string
}

const RecentPepeProfitBalance: React.FC<RecentPepeProfitBalanceProps> = ({
  pepeToDisplay,
  dollarValueToDisplay,
  dateStringToDisplay,
}) => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Balance fontSize="16px" value={pepeToDisplay} decimals={3} bold unit=" PEPE" />
      <Balance fontSize="16px" value={dollarValueToDisplay} decimals={2} bold prefix="~$" />
      {t('Earned since your last action')}
      <Text>{dateStringToDisplay}</Text>
    </>,
    {
      placement: 'bottom-end',
    },
  )

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={pepeToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentPepeProfitBalance
