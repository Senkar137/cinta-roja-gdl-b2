import React from 'react';
import { Image, Data, PokemonCard } from './pokemon.styled';

const Pokemon = ({number, name, image, onSelect}) => (
    <PokemonCard onClick={() => onSelect(name, image)}>
        <Image src={image}/>
        <Data>
            <p>Pokemon numero: #{number}</p>
            <p>Nombre: {name}</p>
        </Data>
    </PokemonCard>
);


export default Pokemon;