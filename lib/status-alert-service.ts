import statusAlertStore, { StoreActionTypes } from './status-alert-store'

const uuidv4 = require('uuid/v4')

export const StatusAlertService = {
  showAlert(message: string): void {
    const id = uuidv4()
    statusAlertStore.dispatch({
      type: StoreActionTypes.AddAlert,
      payload: { id, message },
    })
  },
}
