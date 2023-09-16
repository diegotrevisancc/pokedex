import styles from '../styles/About.module.css';
import Image from 'next/image';
import Charizard from "../public/images/charizard.png"

export default function About() {
    return (
      <>
        <div className={styles.about}>
          <h1>About the project</h1>
          <p>This project was made by using Typescript, NextJS and React</p>
          <Image src={Charizard} alt="Charizard" width={300} height={300}></Image>
        </div>
      </>
    );
  }