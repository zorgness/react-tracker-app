import * as React from 'react'

const FilterTrackers = ({onTextChange}) => {
  const handleChange = e => {
    console.log(e.target.value)
    onTextChange(e.target.value)
  }

  return (
    <div className="mb-5">
      <h2 className="m-5">Recherche de Trackers</h2>
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
