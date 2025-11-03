import Image from "next/image";
import Link from "next/link";
import styles from "../styles/projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrap}>
        <h2 className={styles.heading}>Featured Projects</h2>

        <div className={styles.grid}>
          <ProjectCard
            image="/images/p1.png"
            title="Fibonacci X - A Venture Capital Company"
            body="A responsive agency website built with Next.js and React to showcase services, case studies, and team culture. Integrated server-side rendering for lightning-fast performance and SEO. Includes a custom CMS, dynamic routes."
            tags={["Next.js", "React", "Node.js"]}
            link="https://xfibonacci.com/"
          />
          <ProjectCard
            image="/images/p2.png"
            title="VentureEdu – India’s Most Ambitious Startup School"
            body="Developed a multi-page educational platform for entrepreneurs using React and Node.js. Implemented a modular component system, secure API integration, and fast load times through code splitting and image optimization. Fully SEO-optimized with responsive design and server deployment via Hostinger and PM2."
            tags={["React.js"]}
            link="https://venturedu.com/"
          />
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  image: string;
  title: string;
  body: string;
  tags: string[];
  link: string;
};

function ProjectCard({ image, title, body, tags, link }: CardProps) {
  const external = link.startsWith("http");

  const CardContent = (
    <>
      <div className={styles.thumb}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width:1024px) 33vw, 100vw"
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
        <span className={styles.linkText}>View Project →</span>
      </div>
    </>
  );

  return external ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${title}`}
      className={styles.card} // ⬅️ the link IS the card
    >
      {CardContent}
    </a>
  ) : (
    <Link href={link} aria-label={`Open ${title}`} className={styles.card}>
      {CardContent}
    </Link>
  );
}
