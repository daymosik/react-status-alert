import { shallow, ShallowWrapper } from 'enzyme'
import * as React from 'react'
import { StatusAlertView, StatusAlertState } from '../lib/status-alert-view'
import { StatusAlertContainer } from '../lib/status-alert-container'
import statusAlertStore from '../lib/status-alert-store'

type Wrapper = ShallowWrapper<unknown, StatusAlertState, StatusAlertView>

describe('StatusAlertView', () => {
  let vm: Wrapper
  let requestAnimationFrameMock: jest.MockInstance<number, FrameRequestCallback[]>

  beforeEach(() => {
    vm = shallow(<StatusAlertView />)
    requestAnimationFrameMock = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0)
      return 0
    })
  })

  afterEach(() => {
    requestAnimationFrameMock.mockRestore()
  })

  it('should render correctly', () => {
    expect(vm.contains(<StatusAlertContainer alerts={[]} />)).toBeTruthy()
  })

  it('should updateState', () => {
    const getStateSpy = jest.spyOn(statusAlertStore, 'getState')

    vm.instance().updateState()

    expect(getStateSpy).toHaveBeenCalled()

    getStateSpy.mockRestore()
  })
})
