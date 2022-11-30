import * as React from 'react'
import {groupBy} from '../helper'

const TrackerCategory = ({category}) => {
  return (
    <tr>
      <th className="th-category" colSpan="4">
        {category}
      </th>
    </tr>
  )
}

const TrackerRow = ({tracker}) => {
  const findDuration = (starttime, endtime) => {
    if (!starttime || !endtime) return
    const duration = new Date(new Date(endtime) - new Date(starttime))
    return `${duration.getMinutes()}:${duration.getSeconds()}`
  }

  const {name, starttime, endtime} = tracker

  return (
    <tr className="selectedline">
      <td>{name}</td>
      <td>{starttime}</td>
      <td>{endtime}</td>
      <td>{findDuration(starttime, endtime)}</td>
    </tr>
  )
}

const TrackersTable = ({trackers}) => {
  const rows = []
  let lastCategory

  const trackersParCategory = groupBy(trackers, 'category')

  Object.keys(trackersParCategory).forEach(category => {
    trackersParCategory[category].forEach(tracker => {
      if (tracker.category !== lastCategory) {
        rows.push(<TrackerRow key={tracker.id} tracker={tracker} />)
        lastCategory = tracker.category
      }
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
          <tbody>
            {/* {trackers.map((tracker, {id}) => {
              return <TrackerRow key={id} tracker={tracker} />
            })} */}
            {rows.map(row => {
              return row
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export {TrackersTable}
