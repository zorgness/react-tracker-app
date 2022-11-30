import * as React from 'react'

const TrackersTable = ({trackers}) => {
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
                  <td>{endtime - starttime}</td>
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
