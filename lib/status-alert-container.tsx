import * as React from 'react'
import { Alert, StatusAlertItem } from './status-alert-item'

export interface StatusAlertContainerProps {
  alerts: Alert[]
}

export class StatusAlertContainer extends React.PureComponent<StatusAlertContainerProps, {}> {
  public render() {
    return (
      <div className="status-alerts-wrapper">
        {this.props.alerts.map((alert) => <StatusAlertItem alert={alert} key={alert.id}/>)}
      </div>
    )
  }
}
