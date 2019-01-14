import { default as React, RefObject } from 'react'
import { IconInfo } from './icons/info-icon'
import { StatusAlertService } from './status-alert-service'

export type AlertType = 'success' | 'error' | 'info' | 'warning'

export interface AlertOptions {
  autoHide?: boolean
  autoHideTime?: number
  withIcon?: boolean
  withCloseIcon?: boolean
  color?: string
  backgroundColor?: string
}

export const defaultAlertOptions: AlertOptions = {
  autoHide: false,
  autoHideTime: 3000,
  withIcon: true,
  withCloseIcon: true,
}

export interface Alert {
  id: string
  message: JSX.Element | string
  type: AlertType
  options: AlertOptions
}

export interface StatusAlertItemProps {
  alert: Alert
}

export class StatusAlertItem extends React.PureComponent<StatusAlertItemProps, {}> {
  private statusAlert: RefObject<HTMLDivElement>

  public constructor(props: StatusAlertItemProps) {
    super(props)

    this.statusAlert = React.createRef()
  }

  public componentDidMount() {
    this.showAlert()

    if (this.alertOptions.autoHide) {
      setTimeout(() => this.removeAlert(), this.alertOptions.autoHideTime)
    }
  }

  public render() {
    return (
      <div className="status-alert is-transparent" ref={this.statusAlert}>
        <div className="status-alert__padding-wrapper">
          <div className={`status-alert__box ${this.boxClassName}`}>
            {this.alertOptions.withCloseIcon &&
            <div className="status-alert__icon-on-right-holder">
              <div className="status-alert__icon is-close-icon" onClick={this.removeAlert}/>
            </div>}
            {this.alertOptions.withIcon && <div className="status-alert__icon-holder">{this.alertIcon}</div>}
            <div className="status-alert__text">{this.props.alert.message}</div>
          </div>
        </div>
      </div>
    )
  }

  private showAlert = (): void => {
    setTimeout(() => (
      this.statusAlert.current && this.statusAlert.current.classList.remove('is-transparent')
    ))
  }

  private removeAlert = (): void => {
    if (this.statusAlert.current) {
      this.statusAlert.current.classList.add('is-transparent')
      this.statusAlert.current.addEventListener('transitionend', this.removeAlertTransitionSubmit)
      setTimeout(this.removeAlertCallbackSubmit, 1000)
    }
  }

  private removeAlertTransitionSubmit = (): void => {
    if (this.statusAlert.current) {
      this.statusAlert.current.removeEventListener('transitionend', this.removeAlertTransitionSubmit)
      this.removeAlertCallbackSubmit()
    }
  }

  private removeAlertCallbackSubmit = (): void => {
    StatusAlertService.removeAlert(this.props.alert.id)
  }

  get boxClassName(): string {
    switch (this.props.alert.type) {
      case 'success':
        return 'is-green-success'
      case 'error':
        return 'is-red-error'
      case 'warning':
        return 'is-orange-warning'
      case 'info':
        return ''
      default:
        return ''
    }
  }

  get alertOptions(): AlertOptions {
    return { ...defaultAlertOptions, ...this.props.alert.options }
  }

  get alertIcon(): JSX.Element {
    return <IconInfo/>
  }
}
