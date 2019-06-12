import { Component, h } from 'preact'
import { StatusAlertContainer } from './status-alert-container'
import { Alert } from './status-alert-item'
import statusAlertStore, { Unsubscriber } from './status-alert-store'

export interface StatusAlertState {
  alerts: Alert[]
}

export class StatusAlert extends Component<{}, StatusAlertState> {
  // TODO: Unsubscriber
  private unsubscribeStore: any
  private frameId: any

  public constructor(props: {}) {
    super(props)

    this.state = {
      alerts: [],
    }
  }

  public componentWillUnmount(): void {
    if (this.frameId) {
      window.cancelAnimationFrame(this.frameId)
    }
  }

  public componentDidMount() {
    this.unsubscribeStore = statusAlertStore.subscribe(this.updateState)
  }

  public render() {
    return <StatusAlertContainer alerts={this.state.alerts}/>
  }

  public updateState = () => {
    this.frameId = requestAnimationFrame(() => requestAnimationFrame(() => {
      const state = statusAlertStore.getState()
      this.setState({ alerts: state })
    }))
  }
}
