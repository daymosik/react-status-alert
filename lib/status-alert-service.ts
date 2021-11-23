import { AlertOptions, AlertType, defaultAlertOptions } from './status-alert-item'
import statusAlertStore, { StoreActionTypes } from './status-alert-store'

export class StatusAlertServiceClass {
  public showAlert(message: JSX.Element | string, type: AlertType, customOptions?: AlertOptions): string {
    const options = {
      ...defaultAlertOptions,
      ...customOptions,
    }

    if (options && options.removeAllBeforeShow) {
      this.removeAllAlerts()
    }

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

  public showSuccess(message: JSX.Element | string, customOptions?: AlertOptions): string {
    return this.showAlert(message, 'success', customOptions)
  }

  public showError(message: JSX.Element | string, customOptions?: AlertOptions): string {
    return this.showAlert(message, 'error', customOptions)
  }

  public showInfo(message: JSX.Element | string, customOptions?: AlertOptions): string {
    return this.showAlert(message, 'info', customOptions)
  }

  public showWarning(message: JSX.Element | string, customOptions?: AlertOptions): string {
    return this.showAlert(message, 'warning', customOptions)
  }

  public removeAlert(alertId: string): void {
    statusAlertStore.dispatch({
      type: StoreActionTypes.RemoveAlert,
      payload: alertId,
    })
  }

  public removeAllAlerts(): void {
    statusAlertStore.dispatch({
      type: StoreActionTypes.RemoveAllAlerts,
    })
  }
}

export const StatusAlertService = new StatusAlertServiceClass()

function generateUUID(): string {
  // Public Domain/MIT
  let d = new Date().getTime()
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    d += performance.now()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // tslint:disable-next-line no-bitwise
    const r = (d + Math.random() * 16) % 16 | 0
    d = Math.floor(d / 16)
    // tslint:disable-next-line no-bitwise
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })
}
