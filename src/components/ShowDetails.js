import React from 'react'

function ShowDetails({selectedShow }) {
  return (
    <div>
              <h2>Selected Show: {selectedShow.show.name}</h2>
              {selectedShow.show.summary}
            </div>
  )
}

export default ShowDetails