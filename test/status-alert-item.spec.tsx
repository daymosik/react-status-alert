import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import { Alert, StatusAlertItem, StatusAlertItemProps } from '../lib/status-alert-item'

const alert: Alert = {
  id: '1',
  message: 'message',
  type: 'success',
  options: {
    autoHide: false,
    autoHideTime: 100,
    withIcon: true,
    withCloseIcon: true,
    removeAllBeforeShow: false,
  },
}

type Wrapper = ShallowWrapper<StatusAlertItemProps, unknown, StatusAlertItem>

describe('StatusAlertItem', () => {
  let vm: Wrapper

  beforeEach(() => {
    jest.useFakeTimers()

    vm = shallow(<StatusAlertItem alert={alert} />)
  })

  it('should render correctly', () => {
    expect(vm.hasClass('status-alert')).toBeTruthy()
  })

  it('should stringify object as alert text', () => {
    expect(vm.instance().alertText).toEqual('message')

    const alertWithObject: Alert = { ...alert, message: { test: 'test' } }

    vm = shallow(<StatusAlertItem alert={alertWithObject} />)

    expect(vm.instance().alertText).toEqual('{"test":"test"}')

    const alertWithElement: Alert = { ...alert, message: <div>Test</div> }

    vm = shallow(<StatusAlertItem alert={alertWithElement} />)

    expect(vm.instance().alertText).toEqual(<div>Test</div>)
  })
})
