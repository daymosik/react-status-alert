import { AlertType } from './status-alert-item'

export const alertIcon = (type: AlertType): string => {
  switch (type) {
    case 'success':
      return 'is-check'
    case 'error':
      return 'is-error'
    case 'warning':
      return 'is-error'
    case 'info':
      return 'is-info-icon'
    default:
      return ''
  }
}

export const boxClassName = (type: AlertType): string => {
  switch (type) {
    case 'success':
      return 'is-green-success'
    case 'error':
      return 'is-red-error'
    case 'warning':
      return 'is-orange-warning'
    case 'info':
      return ''
    default:
      return ''
  }
}
