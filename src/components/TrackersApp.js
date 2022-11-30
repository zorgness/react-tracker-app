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
  )
}
export {TrackersApp}
