import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = { numberOfEvents: 32 };

  handleInputChanged = (e) => {
    const value = parseInt(e.target.value) || 0;
    this.setState({ numberOfEvents: value });
    if (this.props.setNumberOfEvents) {
      this.props.setNumberOfEvents(value);
    }
  };

  render() {
    return (
      <div className="number-events">
        <label htmlFor="number-of-events">Number of Events:</label>
        <input
          type="number"
          id="number-of-events"
          role="textbox"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
