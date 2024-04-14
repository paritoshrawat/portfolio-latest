import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, i am paritosh</h1>
        <p className={styles.description}>
          {" "}
          I am MERN Stack Developer 
        </p>
        <a
          href="mailto: paritoshrawat21@gmail.com"
          className={styles.contactBtn}
        >
          {" "}
          contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
