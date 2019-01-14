import 'flexboxgrid/dist/flexboxgrid.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import StatusAlert, { StatusAlertService } from '../dist'
import '../dist/status-alert.css'

export interface DemoAppState {
  inputText: string
}

export class DemoApp extends React.Component<{}, DemoAppState> {
  public constructor(props: any) {
    super(props)

    this.state = {
      inputText: '',
    }
  }

  public render() {
    return (
      <div className="container">
        <StatusAlert/>
        <div className="row">
          <div className="col-xs center-xs">
            <h1>React status alert</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs center-xs">
            <input type="text" value={this.state.inputText} onChange={this.handleInput}/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs center-xs">
            <button onClick={this.showSuccess}>Show success alert</button>
            <button onClick={this.showError}>Show error alert</button>
            <button onClick={this.showInfo}>Show info alert</button>
            <button onClick={this.showInfo}>Show warning alert</button>
          </div>
        </div>
      </div>
    )
  }

  public handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputText: event.target.value })
  }

  public showSuccess = (): void => StatusAlertService.showSuccess(this.state.inputText || 'Default success alert!')

  public showError = (): void => StatusAlertService.showError(this.state.inputText || 'Default error alert!')

  public showInfo = (): void => StatusAlertService.showInfo(this.state.inputText || 'Default info alert!')

  public showWarning = (): void => StatusAlertService.showWarning(this.state.inputText || 'Default warning alert!')
}

ReactDOM.render(<DemoApp/>, document.getElementById('app'))
