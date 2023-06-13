import { h } from 'preact'
import { Alert, StatusAlertItem } from './status-alert-item'

export interface StatusAlertContainerProps {
  alerts: Alert[]
}

export const StatusAlertContainer = (props: StatusAlertContainerProps) => (
  <div className="status-alerts-wrapper">
    {props.alerts.map((alert) => (
      <StatusAlertItem alert={alert} key={alert.id} />
    ))}
  </div>
)
