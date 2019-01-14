import uuidv4 from 'uuid/v4'
import { AlertType } from './status-alert-item'
import statusAlertStore, { StoreActionTypes } from './status-alert-store'

export class StatusAlertServiceClass {
  public showAlert(message: string, type: AlertType): void {
    const id = uuidv4()
    statusAlertStore.dispatch({
      type: StoreActionTypes.AddAlert,
      payload: { id, message, type },
    })
  }

  public showSuccess(message: string): void {
    this.showAlert(message, 'success')
  }

  public showError(message: string): void {
    this.showAlert(message, 'error')
  }

  public showInfo(message: string): void {
    this.showAlert(message, 'info')
  }

  public removeAlert(alertId: string): void {
    statusAlertStore.dispatch({
      type: StoreActionTypes.RemoveAlert,
      payload: alertId,
    })
  }
}

export const StatusAlertService = new StatusAlertServiceClass()
