import styles from "./Card.module.css";

import Image from "next/image";

export default function Card( {pokemon} ) {
    return (
        <>
            <div>
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width={120}
                height={120}
                alt={pokemon.name}
                />
                <h3>{pokemon.name}</h3>
            </div>
        </>
    )
}