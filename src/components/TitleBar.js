import React from 'react'

export default function TitleBar(props) {
  console.log(props)
  return (
    <div>
      {props.selectedUniversity ? `Essay Requirements  - ${props.selectedUniversity.name}` : `Essay Requirements`}
    </div>
  )
}
