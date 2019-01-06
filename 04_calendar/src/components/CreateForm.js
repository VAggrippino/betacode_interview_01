import React from 'react';

class CreateForm extends React.Component {
  render() {
    return (
      <form className="create-form">
        <div className="field">
          <label htmlFor="create-form--description">Description</label>
          <input
            className="create-form--description"
            id="create-form--description"
            type="text"
          />
        </div>

        <div className="field">
          <label htmlFor="create-form--date">Date</label>
          <input
            className="create-form--date"
            id="create-form--date"
            type="date"
          />
        </div>

        <div className="buttons">
          <button className="create-form--button--reset">Reset</button>
          <button className="create-form--button--create">Create</button>
        </div>
      </form>
    )
  }
}

export default CreateForm;