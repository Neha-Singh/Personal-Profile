import Image from "next/image";
import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT: Avatar & text */}
        <div className={styles.left}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/avatar.jpg" // use your actual image path
              alt="Neha portrait"
              width={360}
              height={360}
              className={styles.heroImage}
              priority
            />
          </div>

          <div className={styles.textBlock}>
            <h1 className={styles.title}>
              Crafting high-performance
              <br />
              web experiences with <span className={styles.react}>
                React
              </span> & <span className={styles.next}>Next.js</span>
            </h1>

            <p className={styles.subtitle}>
              Transforming ideas into immersive, scalable digital solutions.
            </p>

            <div className={styles.buttons}>
              <a href="#projects" className={styles.primaryBtn}>
                View My Work
              </a>
              <a href="#contact" className={styles.secondaryBtn}>
                Let’s Connect
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Feature badges */}
        <div className={styles.right}>
          <Feature label="Problem Solver" />
          <Feature label="Clean Coder" />
          <Feature label="Team Player" />
          <Feature label="System Thinker" />
          <Feature label="Mentor" />
          <Feature label="Lifelong Learner" />
        </div>
      </div>
    </section>
  );
}

function Feature({ label }: { label: string }) {
  return (
    <div className={styles.feature}>
      <span className={styles.dot}></span>
      <span>{label}</span>
    </div>
  );
}
