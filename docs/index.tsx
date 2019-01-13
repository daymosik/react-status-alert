import 'flexboxgrid/dist/flexboxgrid.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { StatusAlertService } from '../dist'
import { StatusAlert } from '../dist/status-alert'
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

        <input type="text" value={this.state.inputText} onChange={this.handleInput}/>
        <button onClick={this.showAlert}>Show alert</button>
      </div>
    )
  }

  public handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ inputText: event.target.value })
  }

  public showAlert = (): void => StatusAlertService.showAlert(this.state.inputText || 'Default success alert!!')
}

ReactDOM.render(<DemoApp/>, document.getElementById('app'))
