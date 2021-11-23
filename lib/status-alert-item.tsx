import { default as React, RefObject } from 'react'
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

export class StatusAlertItem extends React.PureComponent<StatusAlertItemProps, unknown> {
  public statusAlert: RefObject<HTMLDivElement>

  public constructor(props: StatusAlertItemProps) {
    super(props)

    this.statusAlert = React.createRef()
  }

  public componentDidMount() {
    this.showAlert()

    if (this.alertOptions.autoHide) {
      setTimeout(this.removeAlert, this.alertOptions.autoHideTime)
    }
  }

  public render() {
    return (
      <div className="status-alert is-transparent" ref={this.statusAlert}>
        <div className="status-alert__padding-wrapper">
          <div className={`status-alert__box ${this.boxClassName}`}>
            {this.alertOptions.withCloseIcon && (
              <div className="status-alert__icon-on-right-holder">
                <div className="status-alert__icon is-close-icon" onClick={this.removeAlert} />
              </div>
            )}
            {this.alertOptions.withIcon && (
              <div className="status-alert__icon-holder">
                <div className={`status-alert__icon ${this.alertIcon}`} />
              </div>
            )}
            <div className="status-alert__text">{this.alertText}</div>
          </div>
        </div>
      </div>
    )
  }

  public showAlert = (): void => {
    setTimeout(() => {
      if (this.statusAlert.current) {
        this.statusAlert.current.classList.remove('is-transparent')
      }
    })
  }

  public removeAlert = (): void => {
    if (this.statusAlert.current) {
      this.statusAlert.current.classList.add('is-transparent')
      setTimeout(this.removeAlertCallbackSubmit, 800)
    }
  }

  public removeAlertCallbackSubmit = (): void => StatusAlertService.removeAlert(this.props.alert.id)

  get boxClassName(): string {
    return boxClassName(this.props.alert.type)
  }

  get alertOptions(): AlertOptions {
    return { ...defaultAlertOptions, ...this.props.alert.options }
  }

  get alertIcon(): string {
    return alertIcon(this.props.alert.type)
  }

  get alertText(): JSX.Element | string {
    if (typeof this.props.alert.message === 'object' && !React.isValidElement(this.props.alert.message)) {
      return JSON.stringify(this.props.alert.message)
    }
    return this.props.alert.message
  }
}
