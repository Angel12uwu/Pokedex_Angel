import { useEffect, useState } from "react"
const baseAPIUrl = 'https://pokeapi.co/api/v2/'
const usePokemonApi = ()=>{
    const [pokemonsLoaded, setPokemonsLoaded] = useState({});
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(0);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState({});

    const setOffsetAndLimit = (offset = 0, limit = 20) => {
        setOffset(offset);
        setLimit(limit);
    }

    useEffect( ()=>{
        if( status === "idle") {
            setStatus("loading");
            fetch(`${baseAPIUrl}pokemon?offset=${offset}&limit=${limit}`)
                .then(rstl=>rstl.json())
                .then(data=>{
                    setPokemonsLoaded(data);
                    setStatus("idle");
                })
                .catch(err=>{
                    setPokemonsLoaded([]);
                    setError(err);
                    setStatus("idle")
                })
        }
    } , [offset, limit]);
    return {
        pokemonsLoaded,
        offset,
        limit,
        status,
        setOffsetAndLimit
    }
}

export default usePokemonApi;

export const usePokemonDetail = (id) => {
    const [pokemon, setPokemon] = useState(null);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        let cancelled = false;
        const fetchPokemon = async () => {
            setStatus("loading");
            try {
                const res = await fetch(`${baseAPIUrl}pokemon/${id}`);
                if (!res.ok) throw new Error("Pokemon no encontrado");
                const data = await res.json();
                if (!cancelled) { setPokemon(data); setStatus("idle"); }
            } catch (err) {
                if (!cancelled) { setPokemon(null); setError(err.message); setStatus("error"); }
            }
        };
        fetchPokemon();
        return () => { cancelled = true; };
    }, [id]);

    return { pokemon, status, error };
};
