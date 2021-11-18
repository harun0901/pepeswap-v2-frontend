import { useEffect, useState } from 'react'
import { useTranslation } from 'contexts/Localization'
import BigNumber from 'bignumber.js'
import { BIG_ZERO } from 'utils/bigNumber'
import { multicallv2 } from 'utils/multicall'
import profileABI from 'config/abi/pancakeProfile.json'
import { getPancakeProfileAddress } from 'utils/addressHelpers'
import useToast from './useToast'

const useGetProfileCosts = () => {
  const { t } = useTranslation()
  const [costs, setCosts] = useState({
    numberPepeToReactivate: BIG_ZERO,
    numberPepeToRegister: BIG_ZERO,
    numberPepeToUpdate: BIG_ZERO,
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const calls = ['numberPepeToReactivate', 'numberPepeToRegister', 'numberPepeToUpdate'].map((method) => ({
          address: getPancakeProfileAddress(),
          name: method,
        }))
        const [[numberPepeToReactivate], [numberPepeToRegister], [numberPepeToUpdate]] = await multicallv2(
          profileABI,
          calls,
        )

        setCosts({
          numberPepeToReactivate: new BigNumber(numberPepeToReactivate.toString()),
          numberPepeToRegister: new BigNumber(numberPepeToRegister.toString()),
          numberPepeToUpdate: new BigNumber(numberPepeToUpdate.toString()),
        })
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve PEPE costs for profile'))
      }
    }

    fetchCosts()
  }, [setCosts, toastError, t])

  return costs
}

export default useGetProfileCosts
