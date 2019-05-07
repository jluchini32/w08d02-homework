


import React, { Component } from 'react';
import PokemonSearchForm from './PokemonSearchForm/PokemonSearchForm';

class PokemonContainer extends Component{
    constructor(){
        super();
        this.state = {
            pokemon: []
        }
    }
    componentDidMount(){
        console.log('did mounted')
        this.searchPokemon({search: ""});
    }
    searchPokemon = async (formData) => {
        const searchURL = `https://pokeapi.co/api/v2/pokemon/${formData.search}`
        const result = await fetch(searchURL);
        const parsedResult = await result.json();
        console.log(parsedResult)
        this.setState({
            pokemon: [...this.state.pokemon, parsedResult]
        
        })
    }
    render(){
        const pokemonList = this.state.pokemon.map((poke)=>{
            return(<div key={poke.name}>
                <h5>NAME: {poke.name} HEIGHT: {poke.height} WEIGHT: {poke.weight}</h5>
            
            </div>)
        })
        return <div>
            <h2>Pokemon container</h2>
            <PokemonSearchForm searchPokemon={this.searchPokemon}></PokemonSearchForm>
            {pokemonList}
        </div>
    }
}


export default PokemonContainer;