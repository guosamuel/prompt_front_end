import React from 'react'

export default function PromptCard(props) {
  // console.log("IM IN THE PROMPT CARD", props)
  return (
    <div id={props.prompt.slug}>
      <label>Prompt Title: </label>
      { props.prompt.topic }
      <br />
      <br />
      <label>Description: </label>
      { props.prompt.prompt }
      <br />
      <br />
      <label>Minimum Length: </label>
      { props.prompt.min_length ? `${props.prompt.min_length.value} words` : "1 word"}
      <br />
      <label>Maximum Length: </label>
      { props.prompt.max_length ? `${props.prompt.max_length.value} words` : "800 words"}
      <br />
      <br />
    </div>
  )
}
