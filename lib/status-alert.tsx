import * as React from 'react'
import { StatusAlertContainer } from './status-alert-container'
import statusAlertStore, { Alert, Unsubscriber } from './status-alert-store'

export interface StatusAlertState {
  alerts: Alert[]
}

export class StatusAlert extends React.Component<{}, StatusAlertState> {
  // TODO: Unsubscriber
  private unsubscribeStore: any

  public constructor(props: any) {
    super(props)

    this.state = {
      alerts: [],
    }
  }

  public componentDidMount() {
    this.unsubscribeStore = statusAlertStore.subscribe(this.addToStore)
  }

  public render() {
    return <StatusAlertContainer alerts={this.state.alerts}/>
  }

  public addToStore = () => {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const state = statusAlertStore.getState()
      this.setState({ alerts: state })
    }))
  }
}
