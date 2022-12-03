import React from 'react'
import {reducer} from 'components/reducers/reducer'

export const useEditTracker = defaultTracker => {
  const intialState = {
    tracker: defaultTracker,
    error: null,
    status: 'idle',
    disabledButtons: {btnSave: true, btnUp: true, btnDel: true},
    disabledInput: true,
  }

  const [state, dispatch] = React.useReducer(reducer, intialState)

  const {tracker, error, status, disabledButtons, disabledInput} = state

  const saveTracker = () => dispatch({type: 'save'})
  const setTracker = tracker => {
    dispatch({type: 'trackerChange', payload: tracker})
  }
  const editTracker = tracker => {
    dispatch({type: 'edit', payload: tracker})
  }
  const updateTracker = () => dispatch({type: 'update'})
  const deleteTracker = () => dispatch({type: 'update'})
  const newTracker = tracker => dispatch({type: 'new', payload: tracker})

  return {
    tracker,
    error,
    status,
    disabledButtons,
    disabledInput,
    setTracker,
    editTracker,
    saveTracker,
    updateTracker,
    deleteTracker,
    newTracker,
  }
}
