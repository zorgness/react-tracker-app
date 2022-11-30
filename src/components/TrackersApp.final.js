/* eslint-disable no-unused-vars */
import * as React from 'react'

import db from '../data'

function TrackersApp() {
  const [allTrackers, setAllTrackers] = React.useState(db)
  const [filterText, setFilterText] = React.useState('')
  const [selectedTracker, setSelectedTracker] = React.useState({})

  return <div>il y a {allTrackers.length} trackers</div>
}
export {TrackersApp}
