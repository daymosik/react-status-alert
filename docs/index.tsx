import * as React from 'react'
import * as ReactDOM from 'react-dom'
import StatusAlert, { StatusAlertService } from '../dist'
import { AlertOptions } from '../dist/status-alert-item'
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
      <div>
        <StatusAlert/>
        <div className="hero">
          <div className="hero__content">
            <div className="row">
              <div className="col-xs center-xs">
                <h1 className="hero__title">ReactJS Status Alert</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h1>ReactJS Status Alert</h1>
          <p className="badges">
            <a href="https://npmjs.org/package/react-status-alert">
              <img src="https://img.shields.io/npm/v/react-status-alert.svg" className="badge"/>
            </a>
            <a href="https://travis-ci.com/daymosik/react-status-alert">
              <img src="https://travis-ci.com/daymosik/react-status-alert.svg?branch=master" className="badge"/>
            </a>
            <a href="https://codebeat.co/projects/github-com-daymosik-react-status-alert-master">
              <img src="https://codebeat.co/badges/2ca97e65-d7fa-4f72-aeea-e0f8bd17765c" className="badge"/>
            </a>
            <a href="https://bettercodehub.com/">
              <img
                src="https://bettercodehub.com/edge/badge/daymosik/react-status-alert?branch=master"
                className="badge"
              />
            </a>
            <a href="https://codecov.io/gh/daymosik/react-status-alert">
              <img
                src="https://codecov.io/gh/daymosik/react-status-alert/branch/master/graph/badge.svg"
                className="badge"
              />
            </a>
          </p>
          <p>A simple and Typescript supported Status Alert component for React.</p>
          <h2>Installation</h2>
          <p>The package can be installed via NPM:</p>
          <p><code>npm install react-status-alert --save</code></p>
        </div>

        <div className="wrapper">
          <h1>Examples</h1>
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

          <hr style={this.separatorStyle}/>

          <input type="text" value={this.state.inputText} onChange={this.handleInput}/>
          <button onClick={this.showTextAlert} style={{ ...this.buttonStyle }}>
            Show alert
          </button>

          <hr style={this.separatorStyle}/>

          <button onClick={this.showHtmlAlert} style={{ ...this.buttonStyle }}>
            Show HTML alert
          </button>

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

  public showSuccess = (): void => StatusAlertService.showSuccess('Success!', this.flashingAlertOptions)

  public showError = (): void => (
    StatusAlertService.showError('Oops... Something went wrong.', this.flashingAlertOptions)
  )

  public showInfo = (): void => StatusAlertService.showInfo('Notification!', this.flashingAlertOptions)

  public showWarning = (): void => StatusAlertService.showWarning('Warning!', this.flashingAlertOptions)

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

  get flashingAlertOptions(): AlertOptions {
    return {
      withCloseIcon: false,
      autoHide: true,
    }
  }
}

ReactDOM.render(<DemoApp/>, document.getElementById('app'))
