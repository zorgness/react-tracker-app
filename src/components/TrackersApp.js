<<<<<<< HEAD
import React, {useState} from 'react'
import db from '../data'

function TrackersApp() {
  const [allTrackers, setAllTrackers] = useState(db)

  const [filterText, setFilterText] = useState('')

  const [selectedTracker, setSelectedTracker] = useState({})

  console.log(allTrackers)

  return (
    <div>
      <h3>
        il y a {allTrackers.length} tracker{allTrackers.length > 1 ? 's' : ''}
      </h3>
      {allTrackers.map(({id, name}) => {
        return <p key={id}>{name}</p>
      })}
    </div>
=======
/* eslint-disable no-unused-vars */
import React, {Fragment} from 'react'
import {FilterTrackers} from './FilterTrackers'
import db from '../data'

function TrackersApp() {
  const [allTrackers, setAllTrackers] = React.useState(db)
  const [filterText, setFilterText] = React.useState('')
  const [selectedTracker, setSelectedTracker] = React.useState({})

  // 🐶 fonction qui va recuperer le texte saisie et filtrer notre base de données
  const handleTextChange = text => {
    setFilterText(text)
    const filteredArray = db.filter(
      track => track.name.toLowerCase().indexOf(text) !== -1,
    )

    setAllTrackers(filteredArray)
  }

  return (
    <Fragment>
      <FilterTrackers onTextChange={handleTextChange} />
      <div>il y a {allTrackers.length} trackers</div>
    </Fragment>
>>>>>>> exercises/02-filtrer-tracker
  )
}
export {TrackersApp}
