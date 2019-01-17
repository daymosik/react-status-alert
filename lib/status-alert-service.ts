import { AlertOptions, AlertType } from './status-alert-item'
import statusAlertStore, { StoreActionTypes } from './status-alert-store'

export class StatusAlertServiceClass {
  public showAlert(message: JSX.Element | string, type: AlertType, options?: AlertOptions): string {
    const id = generateUUID()
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

function generateUUID(): string { // Public Domain/MIT
  let d = new Date().getTime()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // tslint:disable-next-line no-bitwise
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    // tslint:disable-next-line no-bitwise
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}
