import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PokemonList from "../components/pokemon-list";
import PrimaryButton from "../components/primary-button";
import trees from "../assets/trees.png";

const MyPokemon = () => {
    const [caughtPokemons, setCaughtPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        const savedPokemons = JSON.parse(localStorage.getItem("caughtPokemons"));
        if (savedPokemons) {
            setCaughtPokemons(savedPokemons);
        }
    }, [])

    if (loading) {
        return <h1 className="py-12 text-center">Loading your pokemon...</h1>
    }

    return (
        <section className="min-h-screen flex flex-col">
            <Navbar />
            <main className="py-12 grow">
                <h1 className="text-3xl text-center">My Pokemon</h1>
                <h3 className="text-center py-4">Catch 'em all!</h3>
                <article>
                    {caughtPokemons.length > 0 && <PokemonList pokemons={caughtPokemons} isRemovable={true}/>}
                    {caughtPokemons.length === 0 && <h5 className="text-center my-6 animate-bounce">Ready to get your first pokemon?</h5>}
                    <Link to={`/`}>
                        <div className="w-fit mx-auto my-4">
                            <PrimaryButton label={'< See Pokedex'} />
                        </div>
                    </Link>
                </article>
            </main>
            <img src={trees} alt="" className="h-full w-3/4 md:w-2/4 lg:w-1/4 mx-auto"></img>
            <Footer />
        </section>
    );
};

export default MyPokemon;