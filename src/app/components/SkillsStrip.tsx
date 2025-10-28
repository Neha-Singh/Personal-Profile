import Image from "next/image";
import styles from "../styles/skills.module.css";

export default function SkillsStrip() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.heading}>My Stack</h2>
        <div className={styles.cards}>
          <SkillCard
            icon="/images/skill-react.svg"
            title="React & Next.js"
            body="SPA, SSR, SSG, app router, performance, accessibility."
          />
          <SkillCard
            icon="/images/skill-node.svg"
            title="Node & APIs"
            body="Express, REST, auth, rate-limits, queues, integrations."
          />
          <SkillCard
            icon="/images/skill-next.svg"
            title="Frontend Engineering"
            body="Clean architecture, DX, testing, CI/CD, observability."
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.iconBox}>
        <Image src={icon} alt="" width={28} height={28} />
      </div>
      <div className={styles.meta}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}
