import React, { Component } from 'react';
import './App.css';
import PokemonList from '../PokemonList/List'

class App extends Component {

  constructor(){
    super();
    this.state = {
      logodefault: 'https://vignette.wikia.nocookie.net/youtubepoop/images/4/4c/Pokeball.png/revision/latest?cb=20150418234807',
      welcome: 'Welcome to the Pokedex',
      imagen: '',
    }
  }

  selectPokemon = (name, image) =>{
    this.setState({
      welcome: 'Has elegido a ' + name,
      imagen: image
    })
    this.scrollToTop();
  }

  scrollStep() {
      if (window.pageYOffset === 0) {
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - 28);
  }

  scrollToTop() {
      let intervalId = setInterval(this.scrollStep.bind(this), 1.66);
      this.setState({ intervalId: intervalId });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.imagen || this.state.logodefault } className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.welcome}</h1>
        </header>
        <p className="App-intro">
          Aqui la lista de los primeros 151 pokemons.
        </p>
        <PokemonList selectPokemon={this.selectPokemon}/>
      </div>
    );
  }
}

export default App;
