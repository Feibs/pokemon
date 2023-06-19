import React from "react";
import PokemonThumbnail from "./pokemon-thumbnail";

const PokemonList = ({pokemons, isRemovable}) => {
  return (
    <div className="flex flex-wrap p-4">
      {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="mx-auto">
            <PokemonThumbnail key={pokemon.id} 
              id={pokemon.id} 
              image={pokemon.sprites.other.dream_world.front_default} 
              name={pokemon.name}
              isRemovable={isRemovable}
            />
          </div>
      ))}
    </div>
  );
};
  
export default PokemonList;