import React from "react";
import { Link } from "react-router-dom";
import pokemon from "../assets/pokemon.svg";
import pokeball from "../assets/pokeball.svg";

const Navbar = () => {
  return (
    <nav className="bg-primary-red drop-shadow-xl">
        <div className="text-sm flex justify-between items-center px-4 md:px-6 py-2">
          <Link to={`/`}>
            <div>
              <img src={pokemon} alt="Pokemon" className="cursor-pointer w-32 h-12"></img>
            </div>
          </Link>
          <Link to={`/my-pokemon`}>
            <div className="flex items-center cursor-pointer bg-primary-yellow rounded-full px-2 py-1 hover:bg-secondary-blue">
              <img src={pokeball} alt="" className="w-10 h-10"></img>
              <p className="text-lg font-bold">My Pokemon</p>
            </div>
          </Link>
        </div>
    </nav>
  );
};

export default Navbar;