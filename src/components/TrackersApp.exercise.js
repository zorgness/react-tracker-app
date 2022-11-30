import React, {useState} from 'react'
import db from '../data'

// 🐶 créé les 3 states necessaires au composant 'TrackersApp'
function TrackersApp() {
  // 🐶 créé le state 'allTrackers' initialisé par defaut avec 'db'
  const [allTrackers, setAllTrackers] = useState(db)
  // 🐶 créé le state 'filterText' initialisé par defaut avec ''
  const [filterText, setFilterText] = useState('')
  // 🐶 créé le state 'selectedTracker' initialisé par defaut avec un objet vide {}
  const [selectedTracker, setSelectedTracker] = useState({})

  console.log(allTrackers)

  return (
    <div>
      <h3>
        il y a {allTrackers.length} tracker{allTrackers.length > 1 ? 's' : ''}
      </h3>
      {allTrackers.map((tracker, index) => {
        return <p key={index}>{tracker.name}</p>
      })}
    </div>
  )
}
export {TrackersApp}
