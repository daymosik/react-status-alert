import * as React from 'react'
import { Alert, StatusAlertItem } from '../lib/status-alert-item'
import '@testing-library/jest-dom'
import { screen, render, RenderResult } from '@testing-library/react'

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

describe('StatusAlertItem', () => {
  let vm: RenderResult

  beforeEach(() => {
    jest.useFakeTimers()

    vm = render(<StatusAlertItem alert={alert} />)
  })

  it('should render correctly', () => {
    expect(vm.container.getElementsByClassName('status-alert')).toHaveLength(1)
  })

  it('should stringify object as alert text', () => {
    expect(screen.getByText('message')).toBeInTheDocument()

    const alertWithObject: Alert = { ...alert, message: { test: 'test' } }
    vm.rerender(<StatusAlertItem alert={alertWithObject} />)
    expect(screen.getByText('{"test":"test"}')).toBeInTheDocument()

    const alertWithElement: Alert = { ...alert, message: <div>Test</div> }
    vm.rerender(<StatusAlertItem alert={alertWithElement} />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
