import { useNavigate } from "react-router";
const List = ({
    pokemonList,
    nextUrl,
    previousUrl,
    changePageHandler = ()=>{}
})=>{
    return (
        <>
            <section className="plList">
                {pokemonList?.map((pk)=>{
                    return (<ListItem name={pk.name} url={pk.url} key={pk.name} />)
                })}
            </section>
            <section className="pActions">
                {previousUrl && (<button onClick={()=>{changePageHandler(previousUrl)}}>
                        Atrás
                    </button>
                )}
                {nextUrl && (<button onClick={()=>{changePageHandler(nextUrl)}}>
                        Siguiente
                    </button>
                )}
            </section>
        </>
    );

}

const ListItem = ({name, url})=>{
    const navigateTo = useNavigate()
    return (
        <div onClick={()=>{
            const id = url.split('/').at(-2);
            navigateTo(`/pokemon/${id}`);
        }} className="PokemonCard">
            <span className="PokemonCardName">{name}</span>
        </div>
    );
}

export default List;
