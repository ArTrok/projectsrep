import './App.css';
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();
  
    this.aknChange = this.aknChange.bind(this);

    this.state = {
      favoriteGame: '',
      games: '',
      age: '',
      presence: false,
    };
  }  

  aknChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { favoriteGame, games, age, presence } = this.state
    return (
      <div className="App">
        <h1>Games and React - Fantastic technology or reacting to hyped games</h1>
        <form className="Form">
          <fieldset>
            <label>
              Tell us which is your favorite game! ={'}'}
                <textarea name="favoriteGame" className="areaText" value={favoriteGame} onChange={this.aknChange} />
            </label>
            
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" className="AgeInp" value={age} onChange={this.aknChange}/>
          </fieldset>

          <fieldset>
            <label htmlFor="presence">Presence:</label>
            <input type="checkbox" name="presence" value={presence} onChange={this.aknChange}/>

            <label htmlFor="games">Choose a game:</label>
            <select className="select" name="games" value={games} onChange={this.aknChange}>
              <option value="GodOfWar">God Of War</option>
              <option value="CallOfDuty">Call Of Duty</option>
              <option value="FallGuys">Fall Guys</option>
            </select>
          </fieldset>
          <input type="file" />

        </form>
      </div>
    );
  }

}

export default App;
