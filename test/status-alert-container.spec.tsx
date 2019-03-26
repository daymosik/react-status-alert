/** @jsx h */
import { h } from 'preact'
import { shallow } from 'preact-render-spy'
import { StatusAlertContainer } from '../lib/status-alert-container'
import { Alert } from '../lib/status-alert-item'

const alerts: Alert[] = [{
  id: '1',
  message: 'message',
  type: 'success',
  options: {},
}, {
  id: '2',
  message: <div>message</div>,
  type: 'info',
  options: {},
}]

describe('CalculatorView', () => {
  let vm: any

  beforeEach(() => {
    vm = shallow(<StatusAlertContainer alerts={alerts}/>)
  })

  it('should render correctly', () => {
    expect(vm.find('.status-alerts-wrapper')).not.toHaveLength(0)
  })
})
