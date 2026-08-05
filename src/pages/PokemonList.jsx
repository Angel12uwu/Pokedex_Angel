import {useMemo} from 'react';
import usePokemonAPI from '../services/PokeApiService';
import ListOfPokemons from '../components/pokemon/List';
const PokemonList = ()=>{
    const {pokemonsLoaded, status, setOffsetAndLimit} = usePokemonAPI();
    const moveToPage = useMemo(()=>(url)=>{
        const [ ,queryParams] = url.split('?');
        const [offsetStr, limitStr] = queryParams.split('&');
        const [ ,offset] = offsetStr.split('=');
        const [ ,limit] = limitStr.split('=');
        setOffsetAndLimit(Number(offset), Number(limit));
    }, [setOffsetAndLimit]);
    return (
        <section className="pokemonPage">
            <h2 className="plTitle">Pokemon List from API</h2>
            {(status == "loading") && (
                <div className="plLoading"> Cargando Pokemon List</div>
            )}
            {(status == "error") && (
                <div className="plError"> Error al Cargar Pokemon List</div>
            )}
            {(status == "idle") && pokemonsLoaded && (
                <>
                    <ListOfPokemons
                        pokemonList={pokemonsLoaded?.results}
                        total={pokemonsLoaded?.count}
                        nextUrl={pokemonsLoaded?.next}
                        previousUrl={pokemonsLoaded?.previous}
                        changePageHandler={moveToPage}
                    />
                </>
            )}
        </section>
    )
}

export default PokemonList;
