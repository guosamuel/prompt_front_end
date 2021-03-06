import React from 'react'
import PromptCard from './PromptCard'

export default function EssayCard(props) {
  const prompts = props.essay.prompts

  const promptCards = prompts.map( prompt => {
    return (
      <li key={prompt.slug}>
        <PromptCard
          prompt={prompt}
          handleDescriptionSubmit={props.handleDescriptionSubmit}
        />
      </li>
    )
  })

  return (
    <div>
      <label>{props.essay.name}</label>
      <ul>
        {promptCards}
      </ul>
    </div>
  )
}
