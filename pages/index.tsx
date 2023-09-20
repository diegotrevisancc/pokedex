import styles from "../styles/Home.module.css";
import Image from "next/image";

import PokeballImage from "../public/images/pokeball.png";
import Card from '../components/Card/Card';


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
          <div className={styles.title_container}>
            <h1 className={styles.title}>Poke<span>dex</span></h1>
              <Image src={PokeballImage} width={50} height={50} alt="Pokeball" />
          </div>
          <div className={styles.pokemon_container}>
            {pokemons.map(pokemon => (
              <Card key={pokemon.id} pokemon={pokemon}/>
            ))}
          </div>
        </>
    );
}