import { alertIcon, boxClassName } from '../lib/status-alert-item-helpers'

describe('status-alert-item-helpers', () => {
  it('should alertIcon retun correct class for item', () => {
    expect(alertIcon('success')).toEqual('is-check')
    expect(alertIcon('error')).toEqual('is-error')
    expect(alertIcon('info')).toEqual('is-info-icon')
    expect(alertIcon('warning')).toEqual('is-error')
  })

  it('should boxClassName retun correct class for item box', () => {
    expect(boxClassName('success')).toEqual('is-green-success')
    expect(boxClassName('error')).toEqual('is-red-error')
    expect(boxClassName('info')).toEqual('')
    expect(boxClassName('warning')).toEqual('is-orange-warning')
  })
})
