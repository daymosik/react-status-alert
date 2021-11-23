import * as React from 'react'
import { StatusAlertContainer } from './status-alert-container'
import { Alert } from './status-alert-item'
import statusAlertStore, { Unsubscriber } from './status-alert-store'

export interface StatusAlertState {
  alerts: Alert[]
}

export class StatusAlertView extends React.Component<unknown, StatusAlertState> {
  private unsubscribeStore: Unsubscriber
  private frameId = 0
  private frameId2 = 0

  public constructor(props: unknown) {
    super(props)

    this.state = {
      alerts: [],
    }

    this.unsubscribeStore = statusAlertStore.subscribe(this.updateState)
  }

  public componentWillUnmount(): void {
    if (this.unsubscribeStore) {
      this.unsubscribeStore()
    }
    window.cancelAnimationFrame(this.frameId)
    window.cancelAnimationFrame(this.frameId2)
  }

  public render() {
    return <StatusAlertContainer alerts={this.state.alerts} />
  }

  public updateState = () => {
    this.frameId = requestAnimationFrame(() => {
      this.frameId2 = requestAnimationFrame(() => {
        const state = statusAlertStore.getState()
        this.setState({ alerts: state })
      })
    })
  }
}
