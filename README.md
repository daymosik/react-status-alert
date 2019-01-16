# React Status Alert

[![npm version](https://img.shields.io/npm/v/react-status-alert.svg)](https://www.npmjs.com/package/react-status-alert)
[![Build Status](https://travis-ci.com/daymosik/react-status-alert.svg?branch=master)](https://travis-ci.com/daymosik/react-status-alert)
[![BCH compliance](https://bettercodehub.com/edge/badge/daymosik/react-status-alert?branch=master)](https://bettercodehub.com/)
[![codecov](https://codecov.io/gh/daymosik/react-status-alert/branch/master/graph/badge.svg)](https://codecov.io/gh/daymosik/react-status-alert)

A simple and Typescript supported Status Alert component for React ([Demo](https://daymosik.github.io/react-status-alert/))

Project inspired by [jQuery-FlashingNotifications](https://github.com/maciejsaw/jQuery-FlashingNotifications)

## Installation

To install run:
```
npm i react-status-alert
```
or

```
yarn add react-status-alert
```

Basic usage with build systems (webpack, parcel etc.):

```js
import React from 'react'
import StatusAlert, { StatusAlertService } from 'react-status-alert'
import 'react-status-alert/dist/status-alert.css'

export class ExampleApp extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      alertId: ''
    };
    
    this.showAlert = this.showAlert.bind(this);
    this.removeAlert = this.removeAlert.bind(this);
  }
  
  showSuccessAlert() {
    const alertId = StatusAlertService.showSuccess('Default success alert!');
    this.setState({ alertId });
  }
  
  removeAlert() {
    StatusAlertService.removeAlert(this.state.alertId);
  }
  
  render() {
    return (
      <div>
        <StatusAlert/>
        
        <button onClick={this.showSuccessAlert}>Show success alert</button> 
        <button onClick={this.removeAlert}>Remove alert</button>
      </div>
    )
  }
}
```

## StatusAlertService API

```StatusAlertService.showAlert(message: JSX.Element | string, type: AlertType, options?: AlertOptions)```

```StatusAlertService.showSuccess(message: JSX.Element | string, options?: AlertOptions): string```

```StatusAlertService.showError(message: JSX.Element | string, options?: AlertOptions): string```

```StatusAlertService.showInfo(message: JSX.Element | string, options?: AlertOptions): string```

```StatusAlertService.showWarning(message: JSX.Element | string, options?: AlertOptions): string```

```StatusAlertService.removeAlert(alertId: string): void```

### AlertType

```'success' | 'error' | 'info' | 'warning'```

### AlertOptions

All options are optional

| Name | Type | Default | Description |
|------|------|---------|-------------|
| autoHide | boolean | true | Auto hide alert after timeout |
| autoHideTime | number | 3000 | Auto hide timeout in ms |
| withIcon | boolean | true | Show status icon |
| withCloseIcon | boolean | true | Show close icon |
| color | string | undefined | Text color |
| backgroundColor | string | undefined | Background color |

## Example
View [demo](https://daymosik.github.io/react-status-alert/) or docs folder.
