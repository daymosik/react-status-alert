import statusAlertStore from '../lib/status-alert-store'

describe('status-alert-store', () => {

  it('should initialize', () => {
    const state = statusAlertStore.getState()
    expect(state).toEqual([])
  })

})
