import * as React from 'react'
import { Alert, StatusAlertItem } from './status-alert-item'

export interface StatusAlertContainerProps {
  alerts: Alert[]
}

export const StatusAlertContainer: React.FC<StatusAlertContainerProps> = ({ alerts }) => (
  <div className="status-alerts-wrapper">
    {alerts.map((alert) => (
      <StatusAlertItem alert={alert} key={alert.id} />
    ))}
  </div>
)
