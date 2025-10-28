import Image from "next/image";
import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.heading}>Featured Projects</h2>

        <div className={styles.grid}>
          <ProjectCard
            image="/images/p1.png"
            title="Admin Analytics"
            body="Role-based dashboard with live analytics and caching."
            tags={["Next.js", "React", "Chart.js"]}
            link="#"
          />
          <ProjectCard
            image="/images/p2.png"
            title="E-Commerce"
            body="Headless storefront with payments & server actions."
            tags={["Next.js", "Stripe", "Postgres"]}
            link="#"
          />
          <ProjectCard
            image="/images/p3.png"
            title="Knowledge Base"
            body="SSG docs platform with search and versioning."
            tags={["Next.js", "MDX", "Algolia"]}
            link="#"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  image,
  title,
  body,
  tags,
  link,
}: {
  image: string;
  title: string;
  body: string;
  tags: string[];
  link: string;
}) {
  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className={styles.meta}>
        <h3>{title}</h3>
        <p>{body}</p>
        <div className={styles.tags}>
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <a className={styles.link} href={link}>
          View Project →
        </a>
      </div>
    </article>
  );
}
