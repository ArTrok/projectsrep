import React from 'react';
import './App.css';

const click = () => console.log('Clicked!!!')
const click2 = () => console.log('Log a new text')
const click3 = () => console.log('Inserting into the console')

class App extends React.Component {
  render () {
    return (
      <>
      <button onClick={click}>Clique Aqui!</button>
      <button onClick={click2}>New Text!</button>
      <button onClick={click3}>Insert!</button>
      </>
    )
  }
}

export default App;
