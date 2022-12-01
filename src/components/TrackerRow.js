import React from 'react'
import {diffTime} from '../helper'

const TrackerRow = ({tracker, selectedTracker, onSelectedTracker}) => {
  const handleClick = tracker => {
    onSelectedTracker(tracker)
  }

  const {name, starttime, endtime} = tracker

  const selected = tracker === selectedTracker ? 'selectedline' : ''
  const start = starttime.toLocaleString().split('T').join('  ')
  const end = endtime
    ? endtime.toLocaleString().split('T').join('  ')
    : '...en cours'
  const [duration, setDuration] = React.useState(diffTime(starttime, endtime))

  React.useEffect(() => {
    const refresh = () => {
      setDuration(diffTime(starttime, endtime))
    }

    // 🐶 crée une fonction 'refresh' qui met à jour le state 'duration'
    // 🐶 utilise setTimeout pour appler 'refresh' toutes les secondes
    // 🤖
    // n'oulie pas le cleanup de useEffect en retournant 'clearTimeout(timerID)'
    // 🐶 pense aux dependances
    const timerID = setTimeout(() => refresh(), 1000)

    return () => clearTimeout(timerID)
  }, [starttime, endtime])

  return (
    <tr onClick={() => handleClick(tracker)} className={selected}>
      <td>{name}</td>
      <td>{start}</td>
      <td>{end}</td>
      <td>{duration}</td>
    </tr>
  )
}

export {TrackerRow}
