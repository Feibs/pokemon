import React from 'react';
import CatchPokemon from './catch-pokemon';

const Pokemon = ({pokemon}) => {
    return (
        <div className="bg-secondary-blue rounded-xl drop-shadow-xl p-8 w-fit mx-4 lg:w-3/4 lg:mx-auto
        flex flex-col justify-center items-center md:flex-row md:justify-evenly md:items-start">
            <div className="flex flex-col justify-center md:bg-white md:rounded-xl md:p-8">
                <h3 className="text-center">#{pokemon.id}</h3>
                <h5 className="text-3xl text-center">{pokemon.name}</h5>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="w-52 mx-auto m-6"/>
                <CatchPokemon pokemon={pokemon} />
                <article className="flex items-center w-fit mx-auto m-4">
                    <article className="px-3">
                        <h5>Weight</h5>
                        <h3>{pokemon.weight}</h3> 
                    </article>
                    <article className="px-3">
                        <h5>Height</h5>
                        <h3>{pokemon.height}</h3> 
                    </article>
                </article>
                <article className="text-center py-2">
                    <h5>Type</h5>
                    <article className="mb-3 w-fit mx-auto">{pokemon.types.map((type) => (
                        <span key={type.type.name} className="bg-primary-blue text-white rounded-full px-2 pb-1 m-1 font-semibold">{type.type.name}</span>
                    ))}</article>
                </article>
                <article className="text-center py-2">
                    <h5>Ability</h5>
                    <article className="mb-3 w-fit mx-auto">{pokemon.abilities.map((ability) => (
                        <span key={ability.ability.name} className="bg-black text-white rounded-full px-2 pb-1 m-1 font-semibold">{ability.ability.name}</span>
                    ))}</article>
                </article>
            </div>
            <div className="md:w-2/4">
                <article className="text-center py-2">
                    <h5>Stat</h5>
                    <article className="mb-3 w-3/4 mx-auto">{pokemon.stats.map((stat) => (
                        <article key={stat.stat.name}>
                            <p className="text-left font-semibold">{stat.stat.name}</p>
                            <div className="bg-white rounded-full">
                                <div className="bg-black text-white rounded-full" style={{width:`${(stat.base_stat/255)*100}%`, minWidth:'25px'}}>{stat.base_stat}</div>
                            </div> 
                        </article>
                    ))}</article>
                </article>
                <article className="text-center py-2">
                    <h5>Move</h5>
                    <article className="flex flex-wrap justify-center mb-3 mx-auto">{pokemon.moves.map((move) => (
                        <span key={move.move.name} className="bg-white rounded-full px-2 pb-1 m-1 font-semibold">{move.move.name}</span>
                    ))}</article>
                </article>
            </div>
        </div>
    )
}

export default Pokemon;