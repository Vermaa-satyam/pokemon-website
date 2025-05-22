import "./index.css";
import { Pokemoncard } from "./pokemoncard";
import { useState } from "react";

function Pokemon() {
  const [pokemon, setpokemon] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  const [search, setsearch] = useState("");
  const API = "https://pokeapi.co/api/v2/pokemon?limit=500";
  const fetchpokemon = async () => {
    try {
      // after fetching the api we will get full data about the pokemons
      const res = await fetch(API);
      const data = await res.json();

      //with the help of detail pokemon we will get url and data about pokemon only no extra data

      const detailpokemon = data.results.map(async (currpokrmon) => {
        const res = await fetch(currpokrmon.url);
        const data = await res.json();
        return data;
      });

      //to detailpokemon will give promise now we will convert it to proper form

      const detailresponse = await Promise.all(detailpokemon);
      setpokemon(detailresponse);
      setloading(false);
    } catch (error) {
      seterror(error);
      setloading(false);
    }
  };

  useState(() => {
    fetchpokemon();
  }, []);

  // const searchdata = pokemon.filter((currpokemon) =>
  //   currpokemon.name.toLowerCase().includes(search).toLowerCase()
  // );

  const searchdata = pokemon.filter((currpokemon) =>
  currpokemon.name.toLowerCase().includes(search.toLowerCase())
);

  if (loading) {
    return (
      <div>
        <h1>loading....</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1> {error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="container">
          <header>
            <h1>let'catch pokemon</h1>
          </header>
          <div className="pokemon-search">
            <input
              type="text"
              placeholder="search pokemon"
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
          </div>
        </div>
        <div>
          <ul className="cards">
            {searchdata.map((currpokrmon) => {
              return (
                <Pokemoncard key={currpokrmon.id} pokmondata={currpokrmon} />
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Pokemon;
