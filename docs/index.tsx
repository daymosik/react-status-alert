/** @jsx h */
import { Component, h, render } from 'preact'
import StatusAlert, { StatusAlertService } from '../lib'
import { AlertOptions } from '../lib/status-alert-item'
import '../lib/status-alert.css'

export interface DemoAppState {
  inputText: string
}

export class DemoApp extends Component<{}, DemoAppState> {
  public constructor(props: any) {
    super(props)

    this.state = {
      inputText: '',
    }
  }

  public render() {
    const authorLink = 'https://github.com/daymosik/react-status-alert'
    return (
      <div>
        <StatusAlert/>
        <div className="hero">
          <div className="hero__content">
            <div className="row">
              <div className="col-xs center-xs">
                <h1 className="hero__title">Preact Status Alert</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <h1>Preact Status Alert</h1>
          <p>
            Preact Status Alert component based on <a href={authorLink}>React Status Alert</a>
          </p>
          <h2>Installation</h2>
          <p>The package can be installed via NPM:</p>
          <p><code>npm install preact-status-alert --save</code></p>
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

  public handleInput = (event: Event): void => {
    this.setState({ inputText: (event.target as HTMLInputElement).value })
  }

  public showTextAlert = () => StatusAlertService.showInfo(this.state.inputText || 'Custom alert text')

  public showSuccess = (): void => {
    StatusAlertService.showSuccess('Success!', this.flashingAlertOptions)
  }

  public showError = (): void => {
    StatusAlertService.showError('Oops... Something went wrong.', this.flashingAlertOptions)
  }

  public showInfo = (): void => {
    StatusAlertService.showInfo('Notification!', this.flashingAlertOptions)
  }

  public showWarning = (): void => {
    StatusAlertService.showWarning('Warning!', this.flashingAlertOptions)
  }

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

render(<DemoApp />, (document.querySelector('#app') as Element))
