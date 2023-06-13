/** @jsx h */
import { h } from 'preact'
import { shallow } from 'preact-render-spy'
import { Alert, StatusAlertItem } from '../lib/status-alert-item'

const alert: Alert = {
  id: '1',
  message: 'message',
  type: 'success',
  options: {},
}

describe('CalculatorView', () => {
  let vm: any

  beforeEach(() => {
    jest.useFakeTimers()

    vm = shallow(<StatusAlertItem alert={alert} />)
  })

  it('should render correctly', () => {
    expect(vm.find('.status-alert')).not.toHaveLength(0)
  })
})
