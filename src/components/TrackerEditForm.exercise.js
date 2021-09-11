/* eslint-disable no-unused-vars */
import * as React from 'react'
import {v4 as uuidv4} from 'uuid'
import {getDateTimeForPicker} from '../helper'

// 🐶 complete ce reducer pour coller au specification de hugo 👨‍✈️
const reducer = (state, action) => {
  switch (action.type) {
    case 'new':
      // 🐶 l'état 'new' est déjà géré, ne pas modifier
      return {
        status: 'new',
        tracker: action.payload,
        activeButtons: {btnSave: true, btnUp: false, btnDel: false},
        activeInput: true,
        error: null,
      }
    case 'edit':
      // 🐶 change les valeurs suivantes
      return {
        // - status à 'edition'
        // - tracker à payload
        // - activeButtons : 👨‍✈️ voir specification hugo
        // - activeInput : 👨‍✈️ voir specification hugo
        // - error : null
      }
    case 'save':
      // 🐶 change les valeurs suivantes
      return {
        // - reprend toutes les valeurs précedente du state (spead opérator)
        // - status à 'saved'
        // - activeButtons : 👨‍✈️ voir specification hugo
        // - activeInput : 👨‍✈️ voir specification hugo
        // - error : null
      }
    // 🐶 continue pour 'update' 'delete' et 'fail'

    // 🐶 reprend tous les etats precedents et met à jour uniquement 'tracker' et error
    case 'trackerChange':
      return {}
    default:
      throw new Error('Action non supporté')
  }
}

const newTracker = () => ({
  id: uuidv4(),
  category: 'Défaut',
  starttime: getDateTimeForPicker(),
  endtime: '',
  name: '',
})

const TrackerEditForm = ({
  selectedTracker = {...newTracker(), id: ''},
  onAddTracker,
  onDeleteTracker,
  onUpdateTracker,
}) => {
  // ⛏️ supprimer le state 'tracker'
  const [tracker, setTracker] = React.useState(selectedTracker)

  // 🐶 utilise 'React.useReducer' à la place
  // 🤖 const [state, dispatch] = React.useReducer ...

  // 🐶 initilise le reducer avec les valeurs par defaut suivantes
  // {
  //   tracker: selectedTracker,
  //   error: null,
  //   status: "idle",
  //   activeButtons: { btnSave: false, btnUp: false, btnDel: false },
  // }

  const handleTrackerName = e => {
    // ⛏️ supprime 'setTracker'
    setTracker({...tracker, name: e.target.value})
    // 🐶 A la place utilise 'dispatch' de type 'trackerChange'
    // la valeur en payload est le nouveau tracker
    // 🤖 dispatch({type:...,payload:...})
  }
  const handleTrackerStartTime = e => {
    // ⛏️ supprime 'setTracker' et remplace par 'dispatch' de type 'trackerChange'
    setTracker({...tracker, starttime: e.target.value})
  }
  const handleTrackerEndTime = e => {
    // ⛏️ supprime 'setTracker' et remplace par 'dispatch' de type 'trackerChange'
    setTracker({...tracker, endtime: e.target.value})
  }
  const handleTrackerCategory = e => {
    // ⛏️ supprime 'setTracker' et remplace par 'dispatch' de type 'trackerChange'
    setTracker({...tracker, category: e.target.value})
  }

  React.useEffect(() => {
    if (selectedTracker?.id !== '') {
      // ⛏️ supprime 'setTracker' et remplace par 'dispatch' type : 'edit'
      setTracker(selectedTracker)
    }
  }, [selectedTracker])

  const handleOnSubmit = e => {
    e.preventDefault()
    // 🐶 utilise 'state.tracker' au lieu de 'tracker'
    onAddTracker(tracker)
    // 🐶 fais un 'disptach' de type 'save'
  }

  const handleUpdateTracker = () => {
    // 🐶 utilise 'state.tracker' au lieu de 'tracker'
    onUpdateTracker(tracker)
    // 🐶 fais un 'disptach' de type 'update'
  }

  const handleDeleteTracker = () => {
    // 🐶 utilise 'state.tracker' au lieu de 'tracker'
    onDeleteTracker(tracker)
    // 🐶 fais un 'disptach' de type 'delete' vec comme payload : newTracker()
  }

  const handleNewTracker = () => {
    // ⛏️ supprime 'setTracker' et remplace par 'dispatch' type : 'new'
    // avec comme payload : newTracker()
    setTracker(newTracker())
  }

  // ⛏️ supprime ce boolean
  const disabled = tracker.id === '' ? true : false
  return (
    <>
      {/* 🐶 pour tous les champs 'disabled' utilise 'state.activeInput' ou 'state.activeButtons.xxx' */}
      <form className="Form" onSubmit={handleOnSubmit}>
        <fieldset>
          <legend>Gestion des Trackers</legend>
          <label htmlFor="trackerName">Nom du tracker : </label>
          <input
            disabled={disabled}
            type="text"
            id="trackerName"
            placeholder="tracker name..."
            onChange={handleTrackerName}
            value={tracker.name}
          ></input>

          <label htmlFor="trackerDateStart">Date de début : </label>
          <input
            disabled={disabled}
            id="trackerDateStart"
            type="datetime-local"
            placeholder="durée..."
            onChange={handleTrackerStartTime}
            value={tracker.starttime}
            step="2"
          ></input>

          <label htmlFor="trackerDateEnd">Date de fin : </label>

          <input
            disabled={disabled}
            id="trackerDateEnd"
            type="datetime-local"
            placeholder="durée..."
            onChange={handleTrackerEndTime}
            value={tracker.endtime}
            step="2"
          ></input>

          <label>
            Categorie:
            <select
              disabled={disabled}
              value={tracker.category}
              onChange={handleTrackerCategory}
            >
              <option value="Sport">Sport</option>
              <option value="Code">Code</option>
              <option value="Perso">Perso</option>
              <option value="Défaut">Défaut</option>
            </select>
          </label>

          <label>Actions</label>
          <div className="Action">
            <input
              type="button"
              value="Nouveau Tracker"
              onClick={handleNewTracker}
            ></input>
            <input disabled={disabled} type="submit" value="Ajouter"></input>
            <input
              disabled={disabled}
              type="button"
              value="Supprimer"
              onClick={handleDeleteTracker}
            ></input>
            <input
              disabled={disabled}
              type="button"
              value="Mettre à jour"
              onClick={handleUpdateTracker}
            ></input>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export {TrackerEditForm}
