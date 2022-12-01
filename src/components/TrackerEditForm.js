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
  selectedTracker = newTracker({id: ''}),
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

  // React.useEffect(() => {
  //   return () => {
  //     setTracker(selectedTracker)
  //   }
  // }, [selectedTracker])

  // 🐶 met à jour le state tracker quand 'selectedTracker' change de valeur.
  // ceci ce produit lors d'un clique sur le tableau par exemple, une nouvelle
  // valeur de 'selectedTracker' arrive et il faut mettre à jour le state.
  // 🤖 utilise 'useEffect'
  // conditionne la mise à jour du tracker si les ids sont differents et non vide
  // 🤖 selectedTracker?.id !== '' && selectedTracker?.id !== tracker.id

  // 🐶 On veut maintenant activer / desactiver les boutons / Champs input en fonction
  // de l'état du tracker (pas de tracker à editer / tracker à editer )
  // on se base sur l'id
  // 🤖 créée const disabled
  // si id vide 'disabled' est à true, false sinon
  // met `disabled={disabled}` sur tous les champs <input< et <button> (sauf le boutton 'Nouveau Tracker')
  // console.log(tracker)
  return (
    <>
      {/* 🐶 defini 'handleOnSubmit' sur l'event 'onSubmit' du formulaire */}
      <form className="Form" onSubmit={handleOnSubmit}>
        <fieldset>
          <legend>Gestion des Trackers</legend>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="trackers.name"
            placeholder="name"
            onChange={handleTrackerName}
          />
          <label htmlFor="start">Start date</label>
          <input
            type="datetime-local"
            name="trackers.name"
            placeholder="start date"
            onChange={handleTrackerStartTime}
          />
          <label htmlFor="end">End date</label>
          <input
            type="datetime-local"
            name="trackers.name"
            placeholder="end date"
            onChange={handleTrackerEndTime}
          />
          <label htmlFor="category">Category</label>
          <select
            type="datetime-local"
            name="trackers.name"
            placeholder="end date"
            onChange={handleTrackerCategory}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <label>Actions</label>
          <div className="Action">
            <button onClick={handleNewTracker}>Nouveau Tracker</button>

            <input type="submit" name="Ajouter" />

            <button onClick={handleDeleteTracker}>Supprimer</button>

            <button onClick={handleUpdateTracker}>Mettre à jour</button>
          </div>
        </fieldset>
      </form>
    </>
  )
}

export {TrackerEditForm}
