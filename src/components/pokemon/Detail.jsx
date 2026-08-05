const Detail = ({ pokemon }) => {
    if (!pokemon) return null;

    return (
        <div className="pokemonDetail">
            <div className="pdHeader">
                <div className="pdImageWrap">
                    <img 
                        src={pokemon.sprites?.front_default} 
                        alt={pokemon.name}
                        className="pdImage"
                    />
                </div>
                <div className="pdBasicInfo">
                    <span className="pdId">#{String(pokemon.id).padStart(3, '0')}</span>
                    <h2 className="pdName">{pokemon.name}</h2>
                    <div className="pdTypes">
                        {pokemon.types?.map((t, i) => (
                            <span key={i} className={`pdType pdType-${t.type.name}`}>
                                {t.type.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pdBody">
                <div className="pdSection">
                    <h3>Información</h3>
                    <div className="pdInfoGrid">
                        <div className="pdInfoItem">
                            <span className="pdInfoLabel">Altura</span>
                            <span className="pdInfoValue">{pokemon.height / 10} m</span>
                        </div>
                        <div className="pdInfoItem">
                            <span className="pdInfoLabel">Peso</span>
                            <span className="pdInfoValue">{pokemon.weight / 10} kg</span>
                        </div>
                    </div>
                </div>

                <div className="pdSection">
                    <h3>Estadísticas</h3>
                    <div className="pdStats">
                        {pokemon.stats?.map((s, i) => (
                            <div key={i} className="pdStatItem">
                                <span className="pdStatName">{s.stat.name}</span>
                                <div className="pdStatBarContainer">
                                    <div 
                                        className="pdStatBar" 
                                        style={{ width: `${Math.min(s.base_stat, 100)}%` }}
                                    />
                                </div>
                                <span className="pdStatValue">{s.base_stat}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pdSection">
                    <h3>Habilidades</h3>
                    <div className="pdAbilities">
                        {pokemon.abilities?.map((a, i) => (
                            <span key={i} className="pdAbility">
                                {a.ability.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
