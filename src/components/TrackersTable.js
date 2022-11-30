import * as React from 'react'

// 🐶 passe en prop 'trackers'
const TrackersTable = () => {
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
            {/* 🐶 parcours les trackers pour afficher une ligne de chaque tracker */}
            {/* 🤖 utilise la méthode 'map' de 'array' `{trackers.map(tracker =>`  */}
            {/* ⛏️ supprime les données d'exemples */}
            <tr>
              <td>exemple</td>
              <td>starttime</td>
              <td>endtime</td>
              <td>duree</td>
            </tr>
            <tr>
              <td>exemple 2</td>
              <td>starttime</td>
              <td>endtime</td>
              <td>duree</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export {TrackersTable}
