interface Pokemon {
    name: "string",
    url: "string",
    id: number
  
  }
  
  export async function getStaticProps() {
  
    const maxNumberOfPokemons = 500;
    const api = 'https://pokeapi.co/api/v2/pokemon';
  
    const res = await fetch(`${api}/?limit=${maxNumberOfPokemons}`)
    const data = await res.json();

    data.results.forEach((item: Pokemon, index: number) => {
      item.id = index + 1;
    })
  
    return {
      props: {
        pokemons: data.results,
      }
    }
  
  }

export default function Home( {pokemons} ) {
    return (
        <>
            <h1>Pokedex</h1>
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))}
            </ul>
        </>
    );
}