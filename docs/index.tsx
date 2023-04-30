import * as React from 'react'
import * as ReactDOM from 'react-dom'
import StatusAlert, { StatusAlertService } from '../dist'
import { AlertOptions } from '../dist/status-alert-item'
import '../dist/status-alert.css'
import { useState } from 'react'

const buttonStyle = {
  color: '#fff',
  padding: '5px 10px',
  margin: '0px 5px',
  backgroundColor: '#3231FF',
}

const separatorStyle = {
  margin: '10px 0px',
}

const flashingAlertOptions: AlertOptions = {
  withCloseIcon: false,
  autoHide: true,
}

function DemoApp() {
  const [inputText, handleInputText] = useState<string>('')

  const showHtmlAlert = (): void => {
    StatusAlertService.showInfo(
      <div>
        HTML alert with <a href="">link</a>
      </div>,
    )
  }

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    handleInputText(event.target.value)
  }

  const showTextAlert = () => StatusAlertService.showInfo(inputText || 'Custom alert text')

  const showSuccess = (): void => {
    StatusAlertService.showSuccess('Success!', flashingAlertOptions)
  }

  const showError = (): void => {
    StatusAlertService.showError('Oops... Something went wrong.', flashingAlertOptions)
  }

  const showInfo = (): void => {
    StatusAlertService.showInfo('Notification!', flashingAlertOptions)
  }

  const showWarning = (): void => {
    StatusAlertService.showWarning('Warning!', flashingAlertOptions)
  }

  const showSuccessWithNoRemove = (): void => {
    StatusAlertService.showSuccess('Success with remove all!', {
      ...flashingAlertOptions,
      removeAllBeforeShow: false,
    })
  }

  return (
    <div>
      <StatusAlert />
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
            <img src="https://img.shields.io/npm/v/react-status-alert.svg" className="badge" />
          </a>
          <a href="https://github.com/daymosik/react-status-alert/actions?query=workflow%3Abuild">
            <img src="https://github.com/daymosik/react-status-alert/workflows/build/badge.svg" className="badge" />
          </a>
          <a href="https://codebeat.co/projects/github-com-daymosik-react-status-alert-master">
            <img src="https://codebeat.co/badges/2ca97e65-d7fa-4f72-aeea-e0f8bd17765c" className="badge" />
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
        <p>Simple React Status Alert component with Typescript support.</p>
        <h2>Installation</h2>
        <p>The package can be installed via NPM:</p>
        <p>
          <code>npm install react-status-alert --save</code>
        </p>
      </div>

      <div className="wrapper">
        <h1>Examples</h1>
        <button onClick={showSuccess} style={{ ...buttonStyle, backgroundColor: '#107c2e' }}>
          Show success alert
        </button>
        <button onClick={showError} style={{ ...buttonStyle, backgroundColor: '#ff3b20' }}>
          Show error alert
        </button>
        <button onClick={showInfo} style={{ ...buttonStyle, backgroundColor: '#464c55' }}>
          Show info alert
        </button>
        <button onClick={showWarning} style={{ ...buttonStyle, backgroundColor: '#f90' }}>
          Show warning alert
        </button>

        <hr style={separatorStyle} />

        <input type="text" value={inputText} onChange={handleInput} />
        <button onClick={showTextAlert} style={{ ...buttonStyle }}>
          Show alert
        </button>

        <hr style={separatorStyle} />

        <button onClick={showHtmlAlert} style={{ ...buttonStyle }}>
          Show HTML alert
        </button>

        <hr style={separatorStyle} />

        <button onClick={showSuccessWithNoRemove} style={{ ...buttonStyle }}>
          Show success alert without removing others
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(<DemoApp />, document.getElementById('app'))
