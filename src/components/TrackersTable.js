import * as React from 'react'

const TrackersTable = ({trackers}) => {
  const findDuration = (starttime, endtime) => {
    if (!starttime || !endtime) return
    const duration = new Date(new Date(endtime) - new Date(starttime))
    return `${duration.getMinutes()}:${duration.getSeconds()}`
  }

  console.log(trackers)
  return (
    <>
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
            {trackers.map(({id, name, starttime, endtime}) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{starttime}</td>
                  <td>{endtime}</td>
                  <td>{findDuration(starttime, endtime)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export {TrackersTable}
