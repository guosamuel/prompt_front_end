import React from 'react'

export default function TitleBar(props) {
  console.log(props)
  return (
    <div>
      {props.currentUniversity ? `Essay Requirements` : `Essay Requirements - DERP`}
    </div>
  )
}
