import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import { StatusAlertContainer, StatusAlertContainerProps } from '../lib/status-alert-container'
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

type Wrapper = ShallowWrapper<StatusAlertContainerProps, {}, StatusAlertContainer>

describe('CalculatorView', () => {
  let vm: Wrapper

  beforeEach(() => {
    vm = shallow(<StatusAlertContainer alerts={alerts}/>)
  })

  it('should render correctly', () => {
    expect(vm.hasClass('status-alerts-wrapper')).toBeTruthy()
  })
})
