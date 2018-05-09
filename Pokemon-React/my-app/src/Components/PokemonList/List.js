import React, {Component} from 'react';
import Pokemon from '../Pokemon/pokemon';
import {Container, Loading} from './List.Styled.js'

const pokemonData = require('./pokemon.json');


class PokemonList extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                data:pokemonData
            })
        }, 1200)
    }

    render(){
        if(this.state.data.length===0){
            return <Loading>Loading...</Loading>
        }
        return(
            <Container>
                {this.state.data.map(i => {
                    return <Pokemon name={i.name} image={i.image} number={i.number} onSelect={this.props.selectPokemon} key={i.id}/>
                })}
            </Container>
        )
    }
}

export default PokemonList;