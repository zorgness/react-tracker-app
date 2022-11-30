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
  )
}
export {TrackersApp}
