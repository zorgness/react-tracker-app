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
  // 🐶 créé un variable 'starttime' qui contient un string au format 'toLocaleString'
  // 🐶 créé un variable 'endtime' qui contient un string au format 'toLocaleString'
  // 🐶 utilise une ternaire pour afficher la date de fin ou 'en cours ...'
  // 📑 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  // 🐶 nous allons maintenant vouloir refraichir automatiquement la durée toutes les secondes
  // pour cela il faut changer 'duration' en state.
  // ⛏️ Remplace duration en state
  // const duration = diffTime(tracker?.starttime, tracker?.endtime)

  // 🐶 L'idée et d'appeler une fonction 'refresh' toutes les secondes grace à 'setTimeOut'
  // 📑 https://www.w3schools.com/jsref/met_win_settimeout.asp
  // Utilise useEffect pour declarer la fonction 'refresh' et le 'timer'
  React.useEffect(() => {
    // 🐶 crée une fonction 'refresh' qui met à jour le state 'duration'
    // 🐶 utilise setTimeout pour appler 'refresh' toutes les secondes
    // 🤖 const timerID = setTimeout(() => refresh(), 1000)
    // n'oulie pas le cleanup de useEffect en retournant 'clearTimeout(timerID)'
    // 🐶 pense aux dependances
  }, [])
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
