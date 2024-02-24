import * as React from 'react'
import { StatusAlertContainer } from './status-alert-container'
import { Alert } from './status-alert-item'
import statusAlertStore from './status-alert-store'

export const StatusAlertView: React.FC = () => {
  const [alerts, setAlerts] = React.useState<Alert[]>([])

  let frameId = 0
  let frameId2 = 0

  const updateState = () => {
    frameId = requestAnimationFrame(() => {
      frameId2 = requestAnimationFrame(() => {
        const state = statusAlertStore.getState()
        setAlerts(state)
      })
    })
  }

  React.useEffect(() => {
    const unsubscribeStore = statusAlertStore.subscribe(updateState)

    return () => {
      unsubscribeStore()

      window.cancelAnimationFrame(frameId)
      window.cancelAnimationFrame(frameId2)
    }
  })

  return <StatusAlertContainer alerts={alerts} />
}
