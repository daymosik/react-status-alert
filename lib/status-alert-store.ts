export interface Alert {
  id: string
  message: string
}

export type StoreState = any[]

export enum StoreActionTypes {
  AddAlert = 'ADD_ALERT',
  RemoveAlert = 'REMOVE_ALERT',
  RemoveAllAlerts = 'REMOVE_ALL_ALERTS',
}

export interface StoreAddAlertAction {
  type: StoreActionTypes.AddAlert
  payload: Alert
}

export interface StoreRemoveAlertAction {
  type: StoreActionTypes.RemoveAlert
  payload: string
}

export interface StoreRemoveAllAlertsAction {
  type: StoreActionTypes.RemoveAllAlerts
}

export type StoreAction = StoreAddAlertAction | StoreRemoveAlertAction | StoreRemoveAllAlertsAction

export type Reducer = (state: StoreState, action: StoreAction) => StoreState

export type Listener = () => void

export type Unsubscriber = () => void

const createStatusAlertStore = (reducer: Reducer, initialState: StoreState) => {
  let state: StoreState = initialState
  let listeners: Listener[] = []
  const getState = (): StoreState => state
  const dispatch = (action: StoreAction) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  const subscribe = (listener: Listener): Unsubscriber => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter((l) => l !== listener)
    }
  }
  return { getState, dispatch, subscribe }
}

const statusAlertReducer = (state: StoreState = [], action: StoreAction): StoreState => {
  switch (action.type) {
    case StoreActionTypes.AddAlert:
      return [...state, action.payload]
    case StoreActionTypes.RemoveAlert:
      const elemToRemoveArray = state.filter((item) => item.id === action.payload)
      if (Array.isArray(elemToRemoveArray)) {
        const elemToRemoveIndex = state.indexOf(elemToRemoveArray[0])
        return [...state.slice(0, elemToRemoveIndex), ...state.slice(elemToRemoveIndex + 1)]
      }
      return state
    case StoreActionTypes.RemoveAllAlerts:
      return []
    default:
      return state
  }
}

const statusAlertStore = createStatusAlertStore(statusAlertReducer, [])

export default statusAlertStore
