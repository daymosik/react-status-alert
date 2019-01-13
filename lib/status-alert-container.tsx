import * as React from 'react'
import { StatusAlertItem } from './status-alert-item'
import { StatusAlertService } from './status-alert-service'
import { Alert } from './status-alert-store'

export interface StatusAlertContainerProps {
  alerts: Alert[]
}

export class StatusAlertContainer extends React.PureComponent<StatusAlertContainerProps, {}> {
  public render() {
    return (
      <div className="status-alerts-wrapper">
        {this.props.alerts.map((alert) => (
          <StatusAlertItem alert={alert} key={alert.id} removeAlert={this.removeAlert}/>
        ))}
      </div>
    )
  }

  private removeAlert = (alertId: string): void => StatusAlertService.removeAlert(alertId)
}
