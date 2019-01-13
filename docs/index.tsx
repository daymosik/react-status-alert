import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { StatusAlertService } from '../dist'
import { StatusAlert } from '../dist/status-alert'
import '../dist/status-alert.css'

export class DemoApp extends React.Component<{}, {}> {
  public componentDidMount() {
    StatusAlertService.showAlert('Success alert!')
  }

  public render() {
    return (
      <StatusAlert/>
    )
  }
}

ReactDOM.render(<DemoApp/>, document.getElementById('app'))
