import React from 'react'

export default function TitleBar(props) {
  return (
    <div>
      {props.currentUniversity ? `Essay Requirements` : `Essay Requirements - ${props.name}}
    </div>
  )
}
