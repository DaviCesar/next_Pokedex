import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        dignissimos nesciunt maxime dolorem, veritatis quo id ad aperiam.
        Voluptate placeat exercitationem beatae quos nam perferendis ipsum.
        Dolor dolores iste atque!
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="Charizard"
      />
    </div>
  );
}
