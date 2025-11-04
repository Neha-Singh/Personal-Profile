import { Linkedin } from "lucide-react"; // ← import icons
import Image from "next/image";
import styles from "../styles/hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* LEFT: Image */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/avatar-real.jpg"
            alt="Neha portrait"
            fill
            sizes="(max-width:1024px) 90vw, 32vw"
            className={styles.heroImage}
            priority
          />
        </div>

        {/* RIGHT: Text */}
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

          <div className={styles.buttonsRow}>
            <div className={styles.buttons}>
              <a href="#contact" className={styles.primaryBtn}>
                Let’s Connect
              </a>
            </div>

            {/* Social icons aligned to Let's Connect */}
            <div className={styles.socialIcons}>
              <a
                href="www.linkedin.com/in/neha-singh-73552956"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
