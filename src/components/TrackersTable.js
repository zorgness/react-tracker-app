import * as React from 'react'
import {groupBy, diffTime} from '../helper'

const TrackerCategory = ({category}) => {
  return (
    <tr>
      <th className="th-category" colSpan="4">
        {category}
      </th>
    </tr>
  )
}

const TrackerRow = ({tracker, selectedTracker, onSelectedTracker}) => {
  const handleClick = id => {
    onSelectedTracker(id)
  }

  const {id, name, starttime, endtime} = tracker
  const duration = diffTime(starttime, endtime)
  return (
    <tr
      onClick={() => handleClick(id)}
      className={id === selectedTracker && 'selectedline'}
    >
      <td>{name}</td>
      <td>{starttime}</td>
      <td>{endtime}</td>
      <td>{duration}</td>
    </tr>
  )
}

const TrackersTable = ({trackers, selectedTracker, onSelectedTracker}) => {
  const rows = []
  let lastCategory

  const trackersParCategory = groupBy(trackers, 'category')

  Object.keys(trackersParCategory).forEach(category => {
    trackersParCategory[category].forEach(tracker => {
      if (tracker.category !== lastCategory) {
        rows.push(
          <TrackerCategory
            key={tracker.category}
            category={tracker.category}
          />,
        )
      }

      rows.push(
        <TrackerRow
          key={tracker.id}
          selectedTracker={selectedTracker}
          onSelectedTracker={onSelectedTracker}
          tracker={tracker}
        />,
      )
      lastCategory = tracker.category
    })
  })
  return (
    <div className="TableContainer">
      <h2>Liste des trackers</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Nom du Tracker</th>
              <th>Début</th>
              <th>Fin</th>
              <th>Durée</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  )
}

export {TrackersTable}
