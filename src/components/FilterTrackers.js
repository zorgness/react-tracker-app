import * as React from 'react'

// 🐶 créé 1 props et 'onTextChange'
const FilterTrackers = ({onTextChange}) => {
  // 🐶 créé une fonction 'handleChange' qui sera appellée par l'événement onChange de l'input
  // Cette fonction appeler ensuite la fonction passée en props 'onTextChange' avec un paramètre, la valeur
  // saisie dans le champs input
  const handleChange = e => {
    console.log(e.target.value)
    onTextChange(e.target.value)
  }

  return (
    <div>
      <h2>Recherche de Trackers</h2>
      <div>
        <input
          type="text"
          className="component-search-input"
          placeholder=""
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export {FilterTrackers}
