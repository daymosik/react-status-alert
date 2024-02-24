import { default as React, useRef } from 'react'
import { alertIcon, boxClassName } from './status-alert-item-helpers'
import { StatusAlertService } from './status-alert-service'

export type AlertType = 'success' | 'error' | 'info' | 'warning'

export interface AlertOptions {
  autoHide?: boolean
  autoHideTime?: number
  withIcon?: boolean
  withCloseIcon?: boolean
  color?: string
  backgroundColor?: string
  removeAllBeforeShow?: boolean
}

export const defaultAlertOptions: AlertOptions = {
  autoHide: true,
  autoHideTime: 3500,
  withIcon: true,
  withCloseIcon: true,
  removeAllBeforeShow: true,
}

export interface Alert {
  id: string
  message: JSX.Element | string | object
  type: AlertType
  options: AlertOptions
}

export interface StatusAlertItemProps {
  alert: Alert
}

export const StatusAlertItem: React.FC<StatusAlertItemProps> = (props: StatusAlertItemProps) => {
  const statusAlert = useRef<HTMLDivElement>(null)

  let showFrameId: number
  let hideFrameId: number

  const removeAlertCallbackSubmit = (): void => StatusAlertService.removeAlert(props.alert.id)

  const alertOptions = (): AlertOptions => ({ ...defaultAlertOptions, ...props.alert.options })

  const alertText = (): JSX.Element | string => {
    if (typeof props.alert.message === 'object' && !React.isValidElement(props.alert.message)) {
      return JSON.stringify(props.alert.message)
    }
    return props.alert.message
  }

  const showAlert = (): void => {
    showFrameId = requestAnimationFrame(() => {
      setTimeout(() => {
        statusAlert.current?.classList.remove('is-transparent')
      })
    })
  }

  const removeAlert = (): void => {
    hideFrameId = requestAnimationFrame(() => {
      if (statusAlert.current) {
        statusAlert.current.classList.add('is-transparent')
        setTimeout(removeAlertCallbackSubmit, 800)
      }
    })
  }

  React.useEffect(() => {
    let hideTimeout: NodeJS.Timeout

    showAlert()

    if (alertOptions().autoHide) {
      hideTimeout = setTimeout(removeAlert, alertOptions().autoHideTime)
    }

    return () => {
      if (showFrameId) {
        window.cancelAnimationFrame(showFrameId)
      }
      if (hideFrameId) {
        window.cancelAnimationFrame(hideFrameId)
      }
      if (hideTimeout) {
        clearTimeout(hideTimeout)
      }
    }
  })

  return (
    <div className="status-alert is-transparent" ref={statusAlert}>
      <div className="status-alert__padding-wrapper">
        <div className={`status-alert__box ${boxClassName(props.alert.type)}`}>
          {alertOptions().withCloseIcon && (
            <div className="status-alert__icon-on-right-holder">
              <div className="status-alert__icon is-close-icon" onClick={removeAlert} />
            </div>
          )}
          {alertOptions().withIcon && (
            <div className="status-alert__icon-holder">
              <div className={`status-alert__icon ${alertIcon(props.alert.type)}`} />
            </div>
          )}
          <div className="status-alert__text">{alertText()}</div>
        </div>
      </div>
    </div>
  )
}
