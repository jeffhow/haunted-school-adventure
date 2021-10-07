import react, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Start from './Start';
import StatAllocator from './StatAllocator';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      game: {
        view: 'start'
      },
      player: {
        name: '',
        hp: 100,
        level: 1,
        xp: 0,
        stats: {
          attack: 0,
          magic: 0,
          stealth: 0,
          defense: 0
        }
      },
      enemy: null
    }
    this.setName = this.setName.bind(this);
  }

  componentDidMount(){
     // load view component 
  }

  setName( newName ){
    const newState = { player: { name: newName }, game: { view: "stats" } }
    this.setState( newState )
  }

  render(){
    const viewMode = this.state.game.view;
    const setView = () => {
      switch(viewMode){
        case 'start': return <Start setName={this.setName} />;
        case 'stats': return <StatAllocator />;
        default: return 'error';
      }
    }
    return (
      <main className="App">
        { setView() }
      </main>
    );
  }
}

export default App;
