import * as React from 'react'
import { Alert } from './status-alert-store'

export interface StatusAlertItemProps {
  alert: Alert
  removeAlert: (alertId: string) => void
}

export class StatusAlertItem extends React.PureComponent<StatusAlertItemProps, {}> {
  public render() {
    return (
      <div className="status-alert">
        <div className="status-alert__padding-wrapper">
          <div className="status-alert__box is-green-success">
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

  private removeAlert = (): void => this.props.removeAlert(this.props.alert.id)
}
