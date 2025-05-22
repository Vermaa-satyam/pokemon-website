export const Pokemoncard = ({ pokmondata }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          className="pokemon-image"
          src={pokmondata.sprites.other.dream_world.front_default}
          alt={pokmondata.nane}
        />
      </figure>
      <h1 className="pokemon-name">{pokmondata.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {pokmondata.types.map((currtype) => currtype.type.name).join(", ")}
        </p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>height:</span> {pokmondata.height}
        </p>
        <p className="pokemon-info">
          <span>weight:</span> {pokmondata.weight}
        </p>
        <p className="pokemon-info">
          <span>speed:</span> {pokmondata.stats[5].base_stat}
        </p>
      </div>
      <div className="grid-three-cols">
        <div className="pokemon-info">
          <span>Experience:</span> <p>{pokmondata.base_experience}</p>
        </div>
        <div className="pokemon-info">
          <span>Attack:</span> <p>{pokmondata.stats[1].base_stat}</p>
        </div>
        <div className="pokemon-info">
          <span>Abilities:</span>
          <p>
            {pokmondata.abilities
              .map((currability) => currability.ability.name)
              .slice(0, 1)}
          </p>
        </div>
      </div>
    </li>
  );
};
