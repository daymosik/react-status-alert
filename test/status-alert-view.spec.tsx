import * as React from 'react'
import { StatusAlertView } from '../lib/status-alert-view'
import statusAlertStore from '../lib/status-alert-store'
import '@testing-library/jest-dom'
import { screen, render, RenderResult, act } from '@testing-library/react'
import { StatusAlertService } from '../lib'

describe('StatusAlertView', () => {
  let vm: RenderResult
  let requestAnimationFrameMock: jest.MockInstance<number, FrameRequestCallback[]>

  beforeEach(() => {
    vm = render(<StatusAlertView />)
    requestAnimationFrameMock = jest.spyOn(window, 'requestAnimationFrame').mockImplementation((cb) => {
      cb(0)
      return 0
    })
  })

  afterEach(() => {
    requestAnimationFrameMock.mockRestore()
  })

  it('should render correctly', () => {
    expect(vm.container.getElementsByClassName('status-alerts-wrapper')).toHaveLength(1)
  })

  it('should updateState', () => {
    const getStateSpy = jest.spyOn(statusAlertStore, 'getState')

    const message = 'test message'
    act(() => StatusAlertService.showSuccess(message))
    expect(getStateSpy).toHaveBeenCalled()
    expect(screen.getByText(message)).toBeInTheDocument()

    getStateSpy.mockRestore()
  })
})
