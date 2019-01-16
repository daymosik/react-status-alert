import uuidv4 from 'uuid/v4'
import { AlertOptions, AlertType } from './status-alert-item'
import statusAlertStore, { StoreActionTypes } from './status-alert-store'

export class StatusAlertServiceClass {
  public showAlert(message: JSX.Element | string, type: AlertType, options?: AlertOptions): string {
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
    return id
  }

  public showSuccess(message: JSX.Element | string, options?: AlertOptions): string {
    return this.showAlert(message, 'success', options)
  }

  public showError(message: JSX.Element | string, options?: AlertOptions): string {
    return this.showAlert(message, 'error', options)
  }

  public showInfo(message: JSX.Element | string, options?: AlertOptions): string {
    return this.showAlert(message, 'info', options)
  }

  public showWarning(message: JSX.Element | string, options?: AlertOptions): string {
    return this.showAlert(message, 'warning', options)
  }

  public removeAlert(alertId: string): void {
    statusAlertStore.dispatch({
      type: StoreActionTypes.RemoveAlert,
      payload: alertId,
    })
  }
}

export const StatusAlertService = new StatusAlertServiceClass()
