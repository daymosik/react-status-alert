import { Alert } from '../lib/status-alert-item'
import statusAlertStore, { StoreActionTypes } from '../lib/status-alert-store'

const alert: Alert = {
  id: '1',
  message: 'message',
  type: 'success',
  options: {},
}

describe('status-alert-store', () => {
  it('should initialize', () => {
    const state = statusAlertStore.getState()
    expect(state).toEqual([])
  })

  it('should add alert to store', () => {
    statusAlertStore.dispatch({
      type: StoreActionTypes.AddAlert,
      payload: alert,
    })
    const state = statusAlertStore.getState()
    const alertFromStore = state.find((a) => a.id === alert.id)
    expect(alertFromStore).not.toBeUndefined()
    expect(alertFromStore).toEqual(alert)
  })

  it('should remove alert from store', () => {
    statusAlertStore.dispatch({
      type: StoreActionTypes.RemoveAlert,
      payload: '1',
    })
    const state = statusAlertStore.getState()
    const alertFromStore = state.find((a) => a.id === alert.id)
    expect(alertFromStore).toBeUndefined()
  })

  it('should remove all alerts from store', () => {
    statusAlertStore.dispatch({
      type: StoreActionTypes.RemoveAllAlerts,
    })
    const state = statusAlertStore.getState()
    expect(state.length).toEqual(0)
  })

  it('should subscribe to store changes', () => {
    const mockFn = jest.fn()
    statusAlertStore.subscribe(mockFn)
    statusAlertStore.dispatch({
      type: StoreActionTypes.RemoveAllAlerts,
    })
    expect(mockFn).toHaveBeenCalled()
  })

  it('should unsubscribe', () => {
    const mockFn = jest.fn()
    const unsubscriber = statusAlertStore.subscribe(mockFn)
    unsubscriber()
    statusAlertStore.dispatch({
      type: StoreActionTypes.RemoveAllAlerts,
    })
    expect(mockFn).not.toHaveBeenCalled()
  })
})
