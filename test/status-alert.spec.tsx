import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import { StatusAlert, StatusAlertState } from '../lib/status-alert'
import { StatusAlertContainer } from '../lib/status-alert-container'
import statusAlertStore from '../lib/status-alert-store'

type Wrapper = ShallowWrapper<{}, StatusAlertState, StatusAlert>

describe('CalculatorView', () => {
  let vm: Wrapper
  let requestAnimationFrameMock: jest.Mock

  beforeEach(() => {
    vm = shallow(<StatusAlert/>)
    requestAnimationFrameMock = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => cb())
  })

  afterEach(() => {
    requestAnimationFrameMock.mockRestore()
  })

  it('should render correctly', () => {
    expect(vm.contains(<StatusAlertContainer alerts={[]}/>)).toBeTruthy()
  })

  it('should updateState', () => {
    const getStateSpy = jest.spyOn(statusAlertStore, 'getState')

    vm.instance().updateState()

    expect(getStateSpy).toHaveBeenCalled()

    getStateSpy.mockRestore()
  })
})
