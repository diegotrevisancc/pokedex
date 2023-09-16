import Link from "next/link";
import Image from "next/image";
import PokeballImage from '../../public/images/pokeball.png'

import styles from "./Header.module.css"

export default function Header() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src={PokeballImage} alt="Pokeball" width={30} height={30}></Image>
                    <h1>Pokedex</h1>
                </div>
                <ul className={styles.link_items}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}