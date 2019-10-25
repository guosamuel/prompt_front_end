import React from 'react'

export default class PromptCard extends React.Component {

  state = {
    description: this.props.prompt.prompt
  }

  handleDescriptionChange = (e) => {
    this.setState({description: e.target.value})
  }

  componentDidUpdate(prevProps) {
    if (this.props.prompt.prompt !== prevProps.prompt.prompt) {
      this.setState({description: this.props.prompt.prompt})
    }
  }

  render() {
    return (
      <div id={this.props.prompt.slug}>
        <label>Prompt Title: </label>
        { this.props.prompt.topic }

        <br />
        <br />

        <label>Prompt: </label>
        <form onSubmit={(e, slug, editedDescription) => this.props.handleDescriptionSubmit(e, this.props.prompt.slug, this.state.description)}>
          <textarea
            rows='5'
            cols='100'
            name='description'
            value={this.state.description}
            onChange={this.handleDescriptionChange}>
          </textarea>
          <br />
          <button type="submit">Submit Edits</button>
        </form>

        <br />
        <br />

        <label>Minimum Length: </label>
        { this.props.prompt.min_length ? `${this.props.prompt.min_length.value} words` : "1 word"}

        <br />

        <label>Maximum Length: </label>
        { this.props.prompt.max_length ? `${this.props.prompt.max_length.value} words` : "800 words"}

        <br />
        <br />
      </div>
    )
  }
}
