import React from 'react'

export default function OptionalEssays(props) {
  const essays = []

  props.selectedUniversity.supplements.forEach( essay => {
    if (essay.optional) {
      essays.push(essay)
    }
  })

  props.selectedUniversity.application_essays.forEach( essay => {
    if (essay.optional) {
      essays.push(essay)
    }
  })

  const essayNames = essays.map( (essay,index) => <li key={index}>{essay.name}</li> )

  return (
    <div>
      <ul>
        {essayNames}
      </ul>
    </div>
  )
}
