// import React from 'react'
// import {reducer} from './reducers/reducer'
// import {v4 as uuidv4} from 'uuid'
// import {getDateTimeForPicker} from '../helper'

// function useEditTracker(defaultTracker) {
//   const intialState = {
//     tracker: defaultTracker,
//     error: null,
//     status: 'idle',
//     disabledButtons: {btnSave: true, btnUp: true, btnDel: true},
//     disabledInput: true,
//   }

//   const newTracker = () => ({
//     id: uuidv4(),
//     category: 'Défault',
//     starttime: getDateTimeForPicker(),
//     endtime: '',
//     name: '',
//   })

//   const [state, dispatch] = React.useReducer(reducer, intialState)

//   const saveTracker = () => dispatch({type: 'save'})
//   const setTracker = tracker => {
//     dispatch({type: 'trackerChange', payload: tracker})
//   }
//   const editTracker = tracker => {
//     dispatch({type: 'edit', payload: tracker})
//   }
//   const updateTracker = () => dispatch({type: 'update'})
//   const deleteTracker = () => dispatch({type: 'delete', payload: newTracker()})

//   return {
//     tracker,
//     error,
//     status,
//     disabledButtons,
//     disabledInput,
//     setTracker,
//     editTracker,
//     saveTracker,
//     updateTracker,
//     deleteTracker,
//     newTracker,
//   }
// }
