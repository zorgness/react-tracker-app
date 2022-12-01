import React from 'react'
import {diffTime} from '../helper'

const TrackerRow = ({tracker, selectedTracker, onSelectedTracker}) => {
  const handleClick = tracker => {
    onSelectedTracker(tracker)
  }

  const {name, starttime, endtime} = tracker

  const selected = tracker === selectedTracker ? 'selectedline' : ''

  const startFormated = starttime?.toLocaleString().split('T').join('  ')

  const endFormated = endtime
    ? endtime?.toLocaleString().split('T').join('  ')
    : '...en cours'

  const [duration, setDuration] = React.useState(diffTime(starttime, endtime))

  React.useEffect(() => {
    const refresh = () => {
      setDuration(diffTime(starttime, endtime))
    }

    const timerID = setTimeout(() => refresh(), 1000)
    return () => clearTimeout(timerID)
  }, [starttime, endtime, duration])

  return (
    <tr
      onClick={() => handleClick(tracker)}
      className={`${selected} text-white`}
    >
      <td>{name}</td>
      <td>{startFormated}</td>
      <td>{endFormated}</td>
      <td>{duration}</td>
    </tr>
  )
}

export {TrackerRow}
