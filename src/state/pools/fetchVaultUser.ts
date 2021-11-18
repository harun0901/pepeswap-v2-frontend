import BigNumber from 'bignumber.js'
import { getPepeVaultContract } from 'utils/contractHelpers'

const pepeVaultContract = getPepeVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await pepeVaultContract.methods.userInfo(account).call()
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime as string,
      lastUserActionTime: userContractResponse.lastUserActionTime as string,
      pepeAtLastUserAction: new BigNumber(userContractResponse.pepeAtLastUserAction).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      pepeAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
