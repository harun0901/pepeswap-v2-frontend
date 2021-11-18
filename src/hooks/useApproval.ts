import { useCallback, useState } from 'react'
import { useLotteryApprove } from './useApprove'

export const useApproval = (onPresentApprove: () => void) => {
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { onApprove } = useLotteryApprove()

  const handleApprove = useCallback(async () => {
    let isSubscribed = true
    try {
      if (isSubscribed) {
        setRequestedApproval(true)
      }
      const txHash = await onApprove()
      // user rejected tx or didn't go thru
      if (!txHash) {
        if (isSubscribed) {
          setRequestedApproval(false)
        }
      }
      onPresentApprove()
    } catch (e) {
      console.error(e)
    }
    return () => {
      isSubscribed = false
    }
  }, [onApprove, onPresentApprove])

  return { handleApprove, requestedApproval }
}

export default useApproval
