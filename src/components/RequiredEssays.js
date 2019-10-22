import React from 'react'
import EssayCard from './EssayCard'

export default function RequiredEssays(props) {
  const essays = []

  props.selectedUniversity.supplements.forEach( essay => {
    if (!essay.optional) {
      essays.push(essay)
    }
  })

  props.selectedUniversity.application_essays.forEach( essay => {
    if (!essay.optional) {
      essays.push(essay)
    }
  })

  const essayCards = essays.map( essay => {
    return (
      <li key={essay.slug}>
        <EssayCard
          essay={essay}
          handleDescriptionSubmit={props.handleDescriptionSubmit} 
        />
      </li>
    )
  })

  return (
    <div>
      <ul>
        {essayCards}
      </ul>
    </div>
  )
}
