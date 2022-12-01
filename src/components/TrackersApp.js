import React, {Fragment} from 'react'
import {FilterTrackers} from './FilterTrackers'
import db from '../data'
import {TrackersTable} from './TrackersTable'
import {TrackerEditForm} from './TrackerEditForm'

function TrackersApp() {
  const [allTrackers, setAllTrackers] = React.useState(db)
  const [filterText, setFilterText] = React.useState('')
  const [selectedTracker, setSelectedTracker] = React.useState({})

  const handleTextChange = text => {
    setFilterText(text)
    const filteredArray = db.filter(
      track => track.name.toLowerCase().indexOf(text) !== -1,
    )

    setAllTrackers(filteredArray)
  }

  const handleAddTracker = tracker => {
    console.log(tracker)
    setAllTrackers([...allTrackers, tracker])
  }

  const handleDeleteTracker = id => {
    const filteredArray = allTrackers.filter(tracker => tracker.id !== id)
    setAllTrackers(filteredArray)
  }

  const handleUpdateTracker = tracker => {
    const updatedArray = allTrackers.map(item =>
      item.id === tracker.id ? tracker : item,
    )
    return updatedArray
  }

  console.log(allTrackers.length)

  return (
    <Fragment>
      <FilterTrackers onTextChange={handleTextChange} />
      <div>il y a {allTrackers.length} trackers</div>
      <TrackersTable
        trackers={allTrackers}
        selectedTracker={selectedTracker}
        onSelectedTracker={setSelectedTracker}
      />
      <TrackerEditForm
        selectedTracker={selectedTracker}
        onAddTracker={handleAddTracker}
        onDeleteTracker={handleDeleteTracker}
        onUpdatetracker={handleUpdateTracker}
      />
    </Fragment>
  )
}
export {TrackersApp}
