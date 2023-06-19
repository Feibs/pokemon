import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Pokemon from "../components/pokemon";
import SecondaryButton from "../components/secondary-button";

const PokemonDetail = () => {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancel;
        setLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false);
            setPokemon(res.data);
        })
        return () => cancel
    }, [id])

    if (loading) {
        return <h1 className="py-12 text-center">Loading the pokemon...</h1>
    }

    return (
        <section className="min-h-screen flex flex-col">
            <Navbar />
            <main className="py-8 grow">
                <article>
                    <Pokemon pokemon={pokemon} />
                </article>
                <div className="w-fit mx-auto mt-8">
                    <Link to="/"><SecondaryButton label={'< Back'} /></Link>
                </div>
            </main>
            <Footer />
        </section>
    );
};

export default PokemonDetail;