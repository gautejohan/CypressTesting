import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      hideVinyl: true,
      buttonText: 'Show me the magic'
    }
  }

  render() {
    const { hideVinyl, buttonText } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            Somebody was trying to tell me that CDs are better than vinyl because they don’t have any surface noise.<br/>
            I said, "Listen, mate, life has surface noise."<br/>
            <p>-John Peel</p>
          
            <button className="button" onClick={this.handleButtonClick} value>{buttonText}</button>
          </div>
          <div className="vinyl">
            <img src="/vinyl.png" class="vinyl" id="vinyl" className="App-logo" alt="logo" hidden={hideVinyl} />
          </div>
        </header>
      </div>
    );
  }

  handleButtonClick() {
    const { hideVinyl } = this.state;
    this.setState({
      hideVinyl: !hideVinyl,
      buttonText: !hideVinyl ? 'Show me the magic' : 'Quick, hide it again!'
    })
  }
}

export default App;
