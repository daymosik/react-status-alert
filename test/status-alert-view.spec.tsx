/** @jsx h */
import { h } from 'preact'
import { shallow } from 'preact-render-spy'
import { StatusAlertView } from '../lib/status-alert-view'

describe('StatusAlertView', () => {
  let vm: any
  let requestAnimationFrameMock: jest.MockInstance<number, []>

  beforeEach(() => {
    vm = shallow(<StatusAlertView />)
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
})
