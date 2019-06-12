/** @jsx h */
import { h } from 'preact'
import { shallow } from 'preact-render-spy'
import { StatusAlert } from '../lib/status-alert'
import { StatusAlertContainer } from '../lib/status-alert-container'

describe('CalculatorView', () => {
  let vm: any
  let requestAnimationFrameMock: jest.MockInstance<number>

  beforeEach(() => {
    vm = shallow(<StatusAlert />)
    // @ts-ignore
    requestAnimationFrameMock = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0)
      return 0
    })
  })

  afterEach(() => {
    requestAnimationFrameMock.mockRestore()
  })

  it('should render correctly', () => {
    expect(vm.find('StatusAlertContainer')).not.toHaveLength(0)
  })

  // it('should updateState', () => {
  //   const getStateSpy = jest.spyOn(statusAlertStore, 'getState')
  //
  //   vm.rerender()
  //
  //   expect(getStateSpy).toHaveBeenCalled()
  //
  //   getStateSpy.mockRestore()
  // })
})
