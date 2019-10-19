import React from 'react'

export default function TitleBar(props) {
  return (
    <div>
      <h1>
        {props.selectedUniversity ? `Essay Requirements  - ${props.selectedUniversity.name}` : `Essay Requirements`}
      </h1>
    </div>
  )
}
