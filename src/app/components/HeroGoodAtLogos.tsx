// src/app/components/HeroGoodAtLogos.tsx
import { Code2, Palette, Server, Rocket } from "lucide-react";
import "../styles/HeroGoodAtLogos.css";

export default function HeroGoodAtLogos() {
  return (
    <section className="hero">
      <div className="hero__left">
        <div className="hero__inner">
          <img
            src="/logos/neha.png"
            alt="Neha anime portrait"
            className="hero__image"
          />
          <h1 className="hero__title">
            Hi , I am Neha ,<br />
            I specialize in
            <br />
            software frontend
            <br />
            development
          </h1>
        </div>
      </div>

      <div className="panels">
        <div className="card--goodat">
          <h2 className="card__heading">What I am good at</h2>
          <p className="card__para">
            I bring together design, development, and vision — crafting
            full-stack web experiences that feel intuitive, high-performance,
            and beautifully structured.
          </p>

          <div className="goodat__grid">
            <GoodAtItem
              icon={<Code2 className="size-3" />}
              title="Full-Stack Development"
              body="I build end-to-end MERN applications — auth, data models, and deployment workflows."
            />
            <GoodAtItem
              icon={<Palette className="size-3" />}
              title="UI/UX Implementation"
              body="I turn Figma into pixel-perfect, responsive React components with clean architecture."
            />
            <GoodAtItem
              icon={<Server className="size-3" />}
              title="Backend Architecture"
              body="Secure APIs, optimized queries, and seamless third-party integrations for reliability."
            />
            <GoodAtItem
              icon={<Rocket className="size-3" />}
              title="Product Vision & Deployment"
              body="I bridge creativity and engineering, shipping with PM2, Nginx, and Git-based CI."
            />
          </div>

          <div className="card--logos">
            <h3 className="card__heading">Where Have I worked</h3>
            <div className="logos__row">
              <LogoItem
                src="/logos/indiamart.jpg"
                alt="IndiaMART"
                role="Software Engineer"
              />
              <LogoItem
                src="/logos/birlasoft.png"
                alt="Birlasoft"
                role="Senior Software Engineer"
              />
              <LogoItem
                src="/logos/venturedu.png"
                alt="VentureEdu"
                role="Technical Lead"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GoodAtItem({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="goodat__item">
      <div className="goodat__icon">{icon}</div>
      <div>
        <h4 className="goodat__title">{title}</h4>
        <p className="goodat__body">{body}</p>
      </div>
    </div>
  );
}

function LogoItem({
  src,
  alt,
  role,
}: {
  src: string;
  alt: string;
  role: string;
}) {
  return (
    <div className="logo__block">
      <div className="logo__tile">
        <img src={src} alt={alt} className="logo__img" />
      </div>
      <p className="logo__role">{role}</p>
    </div>
  );
}
