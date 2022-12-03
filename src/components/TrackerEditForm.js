/* eslint-disable no-unused-vars */
import * as React from 'react'
import {v4 as uuidv4} from 'uuid'
import {getDateTimeForPicker} from '../helper'
import db from './../data'
import {useEditTracker} from './customHooks/useEditTracker'

const newDefaultTracker = () => ({
  id: uuidv4(),
  category: 'Défault',
  starttime: getDateTimeForPicker(),
  endtime: '',
  name: '',
})

const categories = [...new Set(db.map(({category}) => category))]

const TrackerEditForm = ({
  selectedTracker = {...newDefaultTracker, id: ''},
  onAddTracker,
  onDeleteTracker,
  onUpdatetracker,
}) => {
  const {
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
  } = useEditTracker(selectedTracker)

  const {btnSave, btnUp, btnDel} = disabledButtons

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

    onAddTracker(tracker)
    saveTracker()
  }

  const handleUpdateTracker = () => {
    onUpdatetracker(tracker)
    updateTracker()
  }

  const handleDeleteTracker = () => {
    onDeleteTracker(tracker.id)
    deleteTracker(newDefaultTracker())
  }

  const handleNewTracker = e => {
    e.preventDefault()
    newTracker(newDefaultTracker())
  }

  React.useEffect(() => {
    if (selectedTracker?.id !== '') {
      editTracker(selectedTracker)
    }
  }, [selectedTracker])

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
            name="name"
            placeholder="name"
            disabled={disabledInput}
            defaultValue={tracker?.name}
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
            disabled={disabledInput}
            defaultValue={tracker?.starttime}
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
            disabled={disabledInput}
            defaultValue={tracker?.endtime}
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
              disabled={disabledInput}
              onChange={handleTrackerCategory}
              className="custom-select "
            >
              <option>Choose a category</option>
              {categories.map((category, index) => (
                <option
                  key={index}
                  defaultValue=""
                  selected={category === tracker?.category ? category : null}
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
              disabled={btnSave}
              type="submit"
              name="Ajouter"
              className="btn btn-outline-success"
            />

            <button
              disabled={btnDel}
              onClick={handleDeleteTracker}
              className="btn btn-outline-danger"
            >
              Supprimer
            </button>

            <button
              disabled={btnUp}
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
