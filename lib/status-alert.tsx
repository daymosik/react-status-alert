import * as React from 'react'
import { StatusAlertContainer } from './status-alert-container'
import statusAlertStore, { Alert, Unsubscriber } from './status-alert-store'

export interface StatusAlertState {
  alerts: Alert[]
}

export class StatusAlert extends React.Component<{}, StatusAlertState> {
  private unsubscribeStore: Unsubscriber = () => {
  }

  public constructor(props: any) {
    super(props)

    this.state = {
      alerts: [],
    }
  }

  public componentDidMount() {
    const addToStore = () => {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const state = statusAlertStore.getState()
        console.log(state)
        this.setState({ alerts: state })
      }))
    }
    this.unsubscribeStore = statusAlertStore.subscribe(addToStore)
  }

  public render() {
    return (
      <StatusAlertContainer alerts={this.state.alerts}/>
    )
  }
}
