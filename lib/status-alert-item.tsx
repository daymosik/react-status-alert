import { default as React, RefObject } from 'react'
import { StatusAlertService } from './status-alert-service'

export type AlertType = 'success' | 'error' | 'info' | 'warning'

export interface Alert {
  id: string
  message: string
  type: AlertType
  flashing?: boolean
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
  }

  public render() {
    return (
      <div className="status-alert is-transparent" ref={this.statusAlert}>
        <div className="status-alert__padding-wrapper">
          <div className={`status-alert__box ${this.boxClassName}`}>
            <div className="status-alert__icon-on-right-holder">
              <div className="status-alert__icon is-close-icon" onClick={this.removeAlert}/>
            </div>
            <div className="status-alert__icon-holder">
              <div className="status-alert__icon is-check"/>
            </div>
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
      case 'info':
        return 'is-blue-info'
      case 'warning':
        return 'is-orange-warning'
      default:
        return 'is-blue-info'
    }
  }
}
