import * as React from 'react'
import { StatusAlertContainer } from '../lib/status-alert-container'
import { Alert } from '../lib/status-alert-item'
import { render, RenderResult } from '@testing-library/react'

const alerts: Alert[] = [
  {
    id: '1',
    message: 'message',
    type: 'success',

    options: {},
  },
  {
    id: '2',
    message: <div>message</div>,
    type: 'info',
    options: {},
  },
]

describe('StatusAlertContainer', () => {
  let vm: RenderResult

  beforeEach(() => {
    vm = render(<StatusAlertContainer alerts={alerts} />)
  })

  it('should render correctly', () => {
    expect(vm.container.getElementsByClassName('status-alerts-wrapper')).toHaveLength(1)
  })
})
