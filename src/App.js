import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/pokedex";
import PokemonDetail from "./pages/pokemon-detail";
import MyPokemon from "./pages/my-pokemon";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Pokedex />} />
        <Route exact path="/:id" element={<PokemonDetail />} />
        <Route exact path="/my-pokemon" element={<MyPokemon />} />
        <Route exact path="*" element={<Pokedex />} />
      </Routes>
    </Router>
  );
}

export default App;
