/* eslint-disable no-unused-vars */
import * as React from 'react'
import {v4 as uuidv4} from 'uuid'
import {getDateTimeForPicker} from '../helper'
import db from './../data'

const newTracker = () => ({
  id: uuidv4(),
  category: 'Défault',
  starttime: getDateTimeForPicker(),
  endtime: '',
  name: '',
})

const categories = db.map(({category}) => category)

const TrackerEditForm = ({
  selectedTracker = {...newTracker, id: ''},
  onAddTracker,
  onDeleteTracker,
  onUpdatetracker,
}) => {
  const [tracker, setTracker] = React.useState(selectedTracker)

  const handleTrackerName = e => {
    setTracker({...tracker, name: e.target.value})
  }
  const handleTrackerStartTime = e => {
    setTracker({...tracker, starttime: e.target.value})
  }
  const handleTrackerEndTime = e => {
    setTracker({...tracker, endtime: e.target.value})
  }
  const handleTrackerCategory = e => {
    setTracker({...tracker, category: e.target.value})
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    tracker.id = uuidv4()
    onAddTracker(tracker)
  }

  const handleUpdateTracker = e => {
    e.preventDefault()
    onUpdatetracker(tracker)
  }

  const handleDeleteTracker = e => {
    e.preventDefault()
    onDeleteTracker(tracker.id)
  }

  const handleNewTracker = e => {
    e.preventDefault()
    setTracker(newTracker())
  }

  React.useEffect(() => {
    setTracker(selectedTracker)
  }, [selectedTracker])

  // conditionne la mise à jour du tracker si les ids sont differents et non vide
  // 🤖 selectedTracker?.id !== '' && selectedTracker?.id !== tracker.id

  // 🐶 On veut maintenant activer / desactiver les boutons / Champs input en fonction
  // de l'état du tracker (pas de tracker à editer / tracker à editer )
  // on se base sur l'id
  // 🤖 créée const disabled
  // si id vide 'disabled' est à true, false sinon
  // met `disabled={disabled}` sur tous les champs <input< et <button> (sauf le boutton 'Nouveau Tracker')
  // console.log(tracker)

  const disabled = tracker.id === undefined

  return (
    <div className="container">
      <form className="Form" onSubmit={handleOnSubmit}>
        <fieldset>
          <legend>Gestion des Trackers</legend>

          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="trackers.name"
            placeholder="name"
            defaultValue={tracker.name}
            onChange={handleTrackerName}
            className="form-control"
          />
          <label className="form-label" htmlFor="start">
            Start date
          </label>
          <input
            type="datetime-local"
            name="trackers.name"
            placeholder="start date"
            defaultValue={tracker.starttime}
            onChange={handleTrackerStartTime}
            className="form-control"
          />
          <label className="form-label" htmlFor="end">
            End date
          </label>
          <input
            type="datetime-local"
            name="trackers.name"
            placeholder="end date"
            defaultValue={tracker.endtime}
            onChange={handleTrackerEndTime}
            className="form-control"
          />
          <div className="input-group m-3 d-flex justify-content-center">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="category">
                Category
              </label>
            </div>

            <select
              type="datetime-local"
              name="trackers.name"
              placeholder="end date"
              onChange={handleTrackerCategory}
              className="custom-select "
            >
              <option>Choose a category</option>
              {categories.map((category, index) => (
                <option
                  key={index}
                  defaultValue=""
                  selected={category === tracker.category ? category : null}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>

          <label className="form-label mt-5">Actions</label>
          <div className="Action d-flex justify-content-around mb-5 ">
            <button onClick={handleNewTracker} className="btn btn-primary">
              Nouveau Tracker
            </button>

            <input
              disabled={disabled}
              type="submit"
              name="Ajouter"
              className="btn btn-success"
            />

            <button
              disabled={disabled}
              onClick={handleDeleteTracker}
              className="btn btn-danger"
            >
              Supprimer
            </button>

            <button
              disabled={disabled}
              onClick={handleUpdateTracker}
              className="btn btn-info"
            >
              Mettre à jour
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

export {TrackerEditForm}
