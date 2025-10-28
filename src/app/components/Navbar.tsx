"use client";
import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.wrap}>
        <div className={styles.brand}>
          <div className={styles.logo}>N</div>
          <span>Neha — Senior FE Engineer</span>
        </div>

        <nav className={styles.nav}>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Portfolio</Link>
          <Link href="#contact">Contact</Link>
          <a className={styles.cta} href="#contact">
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}
