import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Pagination from "../components/pagination";
import PokemonList from "../components/pokemon-list";
import trees from "../assets/trees.png";

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()

    useEffect(() => {
        let cancel
        setLoading(true)
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            const pokemonPromises = res.data.results.map(async pokemon => {
                const res = await axios.get(pokemon.url, {
                    cancelToken: new axios.CancelToken(c => cancel = c)
                });
                return res.data
            })
            Promise.all(pokemonPromises).then(pokemonData => {
                setPokemons(pokemonData)
            })
        })
        /* clean up to handle race condition */
        return () => cancel
    }, [currentPageUrl])

    if (loading) {
        return <h1 className="py-12 text-center">Loading Pokedex...</h1>
    }

    function nextPage() {
        setCurrentPageUrl(nextPageUrl)
    }

    function prevPage() {
        setCurrentPageUrl(prevPageUrl)
    }

    return (
        <section className="min-h-screen flex flex-col">
            <Navbar />
            <main className="py-12 grow">
                <h1 className="text-3xl text-center">Pokedex</h1>
                <h3 className="text-center py-4">Good luck to catch 'em all!</h3>
                <article>
                    {pokemons.length > 0 && <PokemonList pokemons={pokemons} isRemovable={false}/>}
                    {pokemons.length === 0 && <h5 className="text-center my-6">Stay tune!</h5>}
                </article>
                <Pagination nextPage={nextPageUrl ? nextPage : null} prevPage={prevPageUrl ? prevPage : null} />
            </main>
            <img src={trees} alt="" className="h-full w-3/4 md:w-2/4 lg:w-1/4 mx-auto"></img>
            <Footer />
        </section>
    );
};

export default Pokedex;

/* 
Pokemon list with pagination implementation is adapted from:
https://github.com/WebDevSimplified/React-Pokemon-Pagination
*/