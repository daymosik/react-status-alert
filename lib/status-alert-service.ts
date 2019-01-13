import uuidv4 from 'uuid/v4'
import statusAlertStore, { StoreActionTypes } from './status-alert-store'

export class StatusAlertServiceClass {
  public showAlert(message: string): void {
    const id = uuidv4()
    statusAlertStore.dispatch({
      type: StoreActionTypes.AddAlert,
      payload: { id, message },
    })
  }

  public removeAlert(alertId: string): void {
    statusAlertStore.dispatch({
      type: StoreActionTypes.RemoveAlert,
      payload: alertId,
    })
  }
}

export const StatusAlertService = new StatusAlertServiceClass()
