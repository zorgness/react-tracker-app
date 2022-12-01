/* eslint-disable no-unused-vars */
import * as React from 'react'
import {v4 as uuidv4} from 'uuid'
import {getDateTimeForPicker, groupBy} from '../helper'
import db from './../data'

const newTracker = () => ({
  id: uuidv4(),
  category: 'Défault',
  starttime: getDateTimeForPicker(),
  endtime: '',
  name: '',
})

const categories = [...new Set(db.map(({category}) => category))]

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

  const disabled = tracker.id === undefined

  return (
    <div className="container">
      <form className="Form" onSubmit={handleOnSubmit}>
        <fieldset>
          <legend className="m-3">Gestion des Trackers</legend>

          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="trackers.name"
            placeholder="name"
            disabled={disabled}
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
            disabled={disabled}
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
            disabled={disabled}
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
              disabled={disabled}
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

          <legend className="m-3">Actions</legend>
          <div className="Action d-flex justify-content-around mb-5 flex-wrap gap-3 ">
            <button
              onClick={handleNewTracker}
              className="btn btn-outline-primary"
            >
              Nouveau Tracker
            </button>

            <input
              disabled={disabled}
              type="submit"
              name="Ajouter"
              className="btn btn-outline-success"
            />

            <button
              disabled={disabled}
              onClick={handleDeleteTracker}
              className="btn btn-outline-danger"
            >
              Supprimer
            </button>

            <button
              disabled={disabled}
              onClick={handleUpdateTracker}
              className="btn btn-outline-info"
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
