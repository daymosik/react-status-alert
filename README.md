# React Status Alert (under construction)

![alt text](https://img.shields.io/badge/status-under%20construction-red.svg)
[![npm version](https://img.shields.io/npm/v/react-status-alert.svg)](https://www.npmjs.com/package/react-status-alert)
[![Build Status](https://travis-ci.com/daymosik/react-status-alert.svg?branch=master)](https://travis-ci.com/daymosik/react-status-alert)
[![BCH compliance](https://bettercodehub.com/edge/badge/daymosik/react-status-alert?branch=master)](https://bettercodehub.com/)
[![codecov](https://codecov.io/gh/daymosik/react-status-alert/branch/master/graph/badge.svg)](https://codecov.io/gh/daymosik/react-status-alert)

A simple and Typescript supported Status Alert component for React ([Demo](https://daymosik.github.io/react-status-alert/))

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
import * as React from 'react'
import StatusAlert, { StatusAlertService } from 'react-status-alert'
import 'react-status-alert/dist/status-alert.css'

export class ExampleApp extends React.Component<{}, {}> {
  public render() {
    return <StatusAlert/>
  }

  public showAlert = (): void => StatusAlertService.showAlert('Default success alert!!')
}
```
