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
            <button onClick={this.showSuccess} style={{ ...this.buttonStyle, backgroundColor: '#107c2e' }}>
              Show success alert
            </button>
            <button onClick={this.showError} style={{ ...this.buttonStyle, backgroundColor: '#ff3b20' }}>
              Show error alert
            </button>
            <button onClick={this.showInfo} style={{ ...this.buttonStyle, backgroundColor: '#464c55' }}>
              Show info alert
            </button>
            <button onClick={this.showWarning} style={{ ...this.buttonStyle, backgroundColor: '#f90' }}>
              Show warning alert
            </button>
          </div>
        </div>

        <hr style={this.separatorStyle}/>

        <div className="row">
          <div className="col-xs center-xs">
            <input type="text" value={this.state.inputText} onChange={this.handleInput}/>
            <button onClick={this.showTextAlert} style={{ ...this.buttonStyle }}>
              Show alert
            </button>
          </div>
        </div>

        <hr style={this.separatorStyle}/>

        <div className="row">
          <div className="col-xs center-xs">
            <button onClick={this.showHtmlAlert} style={{ ...this.buttonStyle }}>
              Show HTML alert
            </button>
          </div>
        </div>

      </div>
    )
  }

  public showHtmlAlert = (): void => {
    StatusAlertService.showInfo(<div>HTML alert with <a href="">link</a></div>)
  }

  public handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputText: event.target.value })
  }

  public showTextAlert = () => StatusAlertService.showInfo(this.state.inputText || 'Custom alert text')

  public showSuccess = (): void => StatusAlertService.showSuccess('Success!')

  public showError = (): void => StatusAlertService.showError('Oops... Something went wrong.')

  public showInfo = (): void => StatusAlertService.showInfo('Notification!')

  public showWarning = (): void => StatusAlertService.showWarning('Warning!')

  get buttonStyle() {
    return {
      color: '#fff',
      padding: '5px 10px',
      margin: '0px 5px',
      backgroundColor: '#3231FF',
    }
  }

  get separatorStyle() {
    return {
      margin: '10px 0px',
    }
  }
}

ReactDOM.render(<DemoApp/>, document.getElementById('app'))
