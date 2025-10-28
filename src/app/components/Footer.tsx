import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <p>© {new Date().getFullYear()} Neha. Built with Next.js.</p>
        <div className={styles.links}>
          <a href="https://github.com/" target="_blank">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </a>
          <a href="#top">Top ↑</a>
        </div>
      </div>
    </footer>
  );
}
