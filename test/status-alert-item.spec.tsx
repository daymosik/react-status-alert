import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import { Alert, StatusAlertItem, StatusAlertItemProps } from '../lib/status-alert-item'

const alert: Alert = {
  id: '1',
  message: 'message',
  type: 'success',
  options: {},
}

type Wrapper = ShallowWrapper<StatusAlertItemProps, {}, StatusAlertItem>

describe('CalculatorView', () => {
  let vm: Wrapper

  beforeEach(() => {
    jest.useFakeTimers()

    vm = shallow(<StatusAlertItem alert={alert}/>)
  })

  it('should render correctly', () => {
    expect(vm.hasClass('status-alert')).toBeTruthy()
  })
})
