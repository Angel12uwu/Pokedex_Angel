import { useParams, useNavigate } from "react-router"
import { usePokemonDetail } from "../services/PokeApiService"
import PokemonDetailComponent from "../components/pokemon/Detail"

const PokemonDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { pokemon, status, error } = usePokemonDetail(id);

    return (
        <section className="pokemonDetailPage">
            <button className="pdBackButton" onClick={() => navigate("/pokemon")}>
                ← Volver a la lista
            </button>

            {status === "loading" && (
                <div className="pdLoading">Cargando datos del Pokemon...</div>
            )}

            {status === "error" && (
                <div className="pdError">Error: {error}</div>
            )}

            {status === "idle" && pokemon && (
                <PokemonDetailComponent pokemon={pokemon} />
            )}
        </section>
    );
};

export default PokemonDetail;
