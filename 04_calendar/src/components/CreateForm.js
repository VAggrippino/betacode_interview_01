import React from 'react';
import './scss/CreateForm.scss';

class CreateForm extends React.Component {
  state = { date: '', description: '' };

  onReset = () => {
    this.setState({date: '', description: ''});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onCreateEvent(e);
    this.setState({date: '', description: ''});
  }

  render() {
    return (
      <form className="create-form" onSubmit={this.onSubmit}>
        <div className="field">
          <label htmlFor="create-form--description">Description</label>
          <textarea
            className="create-form--description"
            id="create-form--description"
            rows="4"
            value={this.state.description}
            onChange={e => this.setState({description: e.target.value})}
            required
          ></textarea>
        </div>

        <div className="field">
          <label htmlFor="create-form--date">Date</label>
          <input
            className="create-form--date"
            id="create-form--date"
            type="date"
            value={this.state.date}
            onChange={e => this.setState({date: e.target.value})}
            required
          />
        </div>

        <div className="buttons">
          <button
            className="create-form--button--reset"
            onClick={this.onReset}
          >Reset</button>
          <button className="create-form--button--create" >Create</button>
        </div>
      </form>
    )
  }
}

export default CreateForm;