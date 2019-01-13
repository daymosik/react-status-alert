import * as React from 'react'
import { Alert } from './status-alert-store'

export interface StatusAlertItemProps {
  alert: Alert
  removeAlert: (alertId: string) => void
}

export class StatusAlertItem extends React.PureComponent<StatusAlertItemProps, {}> {
  public render() {
    return (
      <div className="flashing-notification">
        <div className="flashing-notification__padding-wrapper">
          <div className="flashing-notification__box is-green-success">
            <div className="flashing-notification__icon-on-right-holder">
              <div className="flashing-notification__icon is-close-icon" onClick={this.removeAlert}/>
            </div>
            <div className="flashing-notification__icon-holder">
              <div className="flashing-notification__icon is-check"/>
            </div>
            <div className="flashing-notification__text">{this.props.alert.message}</div>
          </div>
        </div>
      </div>
    )
  }

  private removeAlert = (): void => this.props.removeAlert(this.props.alert.id)
}
