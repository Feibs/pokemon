import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import ReleasePokemon from "../components/release-pokemon";

const PokemonThumbnail = ({id, image, name, isRemovable}) => {
    return (
        <>
            {isRemovable && <div className="w-fit mx-auto"><ReleasePokemon id={id}/></div>}
            <Link to={`/${id}`}>  
              <article className="flex flex-col justify-center bg-secondary-blue mx-auto my-4 p-4 w-40 h-52 rounded-xl drop-shadow-xl md:p-6 md:w-72 md:h-72 md:my-7 cursor-pointer hover:scale-105 transition duration-600 ease-in-out">
                <h1 className="number">#{id}</h1>
                <LazyLoadImage src={image} alt={name} className="w-48 h-36 md:w-52 md:h-48 mx-auto p-3"/>
                <h5 className="text-center text-sm">{name}</h5>
              </article>
            </Link>  
        </>
    )
}

export default PokemonThumbnail;