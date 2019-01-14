import uuidv4 from 'uuid/v4'
import { AlertOptions, AlertType } from './status-alert-item'
import statusAlertStore, { StoreActionTypes } from './status-alert-store'

export class StatusAlertServiceClass {
  public showAlert(message: string, type: AlertType, options?: AlertOptions): void {
    const id = uuidv4()
    statusAlertStore.dispatch({
      type: StoreActionTypes.AddAlert,
      payload: {
        id,
        message,
        type,
        options: options || {},
      },
    })
  }

  public showSuccess(message: string, options?: AlertOptions): void {
    this.showAlert(message, 'success', options)
  }

  public showError(message: string, options?: AlertOptions): void {
    this.showAlert(message, 'error', options)
  }

  public showInfo(message: string, options?: AlertOptions): void {
    this.showAlert(message, 'info', options)
  }

  public showWarning(message: string, options?: AlertOptions): void {
    this.showAlert(message, 'warning', options)
  }

  public removeAlert(alertId: string): void {
    statusAlertStore.dispatch({
      type: StoreActionTypes.RemoveAlert,
      payload: alertId,
    })
  }
}

export const StatusAlertService = new StatusAlertServiceClass()
