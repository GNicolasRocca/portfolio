import { useState, useRef, useEffect } from "react";
import "./App.css";
import foto_retrato from "./assets/retrato.png";

const PERFIL = {
  nombre: "Gonzalo Rocca",
  rol: "Desarrollador Web Full Stack",
  foto: foto_retrato,
  bio: "¡Hola!, ¡soy Gonzalo Rocca! Desarrollador Full Stack y estudiante de Informática en la UNGS. Para enriquecer mis conocimientos, realicé una carrera de desarrollo web en Soy Henry y diferentes cursos relacionados a la informática, entre otros. En cuanto a mi experiencia en el área comercial administrativa, ha potenciado en mí un buen manejo de las relaciones interpersonales y del trabajo bajo presión, entre otras. Actualmente, me encuentro en búsqueda de mi primera experiencia en el área de desarrollo web con muchas ganas de aprender y desarrollarme profesionalmente. Me considero una persona empática, dinámica y ¡con gran voluntad para adquirir nuevos desafíos! Quedo a disposición.",
  email: "gonzalo-rocca@hotmail.com",
  github: "https://github.com/GNicolasRocca",
  linkedin: "https://www.linkedin.com/in/gonzalorocca/",
};

const HABILIDADES = [
  "JavaScript", "TypeScript", "Python", "NodeJS","NestJS", "MongoDB", "PostgreSQL", "TypeORM", "React", "HTML5",
  "CSS3", "Express", "Axios", "Bootstrap", "Foundation",
];

const PROYECTOS = [
  {
    id: 1,
    titulo: "PowerGym - Plataforma Web de Gestión de Centro de Entrenamiento",
    descripcion: "Como parte de un equipo de múltiples disciplinas, colaboré en el desarrollo de una aplicación web para gestión de un gimnasio, en autenticación de usuarios (usuario, coach o administrador) donde la funcionalidad cambia dependiendo del rol. ",
    tecnologias: [
      "API de Swagger", "Docker", "Stripe", "TypeScript", "PostgreSQL", "GitHub Actions", "Jest", "Vercel",
      "NestJS", "TypeORM", "JSON Web Token (JWT)", "Cloudinary"
    ],
    repos: [
      { etiqueta: "Frontend", url: "https://github.com/PowerGymok/PF-Front" },
      { etiqueta: "Backend", url: "https://github.com/PowerGymok/powerGym_Back" },
    ],
    demo: "https://pf-front-ijjg.vercel.app/home",    
  },
  {
    id: 2,
    titulo: "Fix It",
    descripcion: "Fix It es una página web para sacar turnos de manera online para reparar equipos informáticos. Cuenta también con un sistema de usuarios, con el cual podemos ver nuestros turnos disponibles y ademas podemos modificar nuestra información personal.",
    tecnologias: [
      "HTML", "CSS", "JavaScript", "Axios", "React", "React Router DOM", "Vite", "Styled Components", "Vercel",
    ],
    repos: [
      { etiqueta: "Backend", url: "https://github.com/GNicolasRocca/Fix-It" },
    ],
    demo: "https://fix-it-virid-eight.vercel.app/home",
  },
  {
    id: 3,
    titulo: "Pelis-free",
    descripcion:
      "Aplicación web orientada a la gestión y consulta de información cinematográfica. Permite registrar películas junto con sus datos principales, facilitando el almacenamiento y la visualización organizada de contenido relacionado con el cine. El proyecto fue desarrollado aplicando conceptos de desarrollo full stack, manejo de bases de datos y diseño de interfaces responsivas.",
    tecnologias: [
      "HTML", "CSS", "MongoDB", "JavaScript", "Express", "Axios", "NodeJS"
    ],
    repos: [ 
      { etiqueta: "Backend", url: "https://github.com/GNicolasRocca/Pelis-free" },
    ],
    demo: "",
  },
  {
    id: 4,
    titulo: "API Rest para e-commerce",
    descripcion: "API REST para e-commerce construida con un stack robusto y desplegada en producción (PowerGym API Rest).",
    tecnologias: [
      "NestJS", "TypeORM", "PostgreSQL", "JWT", "Cloudinary", "Swagger / OpenAPI", "Jest", "Docker", "GitHub Actions"
    ],
    repos: [
      { etiqueta: "Backend", url: "https://github.com/PowerGymok/powerGym_Back" },
    ],
    demo: "https://ecommerce-pt29-deploy.onrender.com/api",
  },
  {
    id: 5,
    titulo: "FTecommerce",
    descripcion: "Esta es una API construida con Nest para Fix It Ecommerce",
    tecnologias: [
      "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "NodeJS", "JWT", "Swagger", "pgAdmin", "Jest", "Docker", "GitHub Actions"
    ],
    repos: [
      { etiqueta: "Backend", url: "https://github.com/GNicolasRocca/FTecommerce" },
    ],
    demo: "linkedin.com/safety/go/?url=https%3A%2F%2Fnest-demo-latest-8yd5.onrender.com%2Fapi&urlhash=pi2r&mt=Pqidn8uj5aHFKr7S3a5iFhf-bvryiB6UcaB9RepUe3nG9F5hsuvObG6BTDWDKSVeahug-Fp1b1GDc6vVvO6saYMUjCRZ&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B77svcWi%2BQsuN4GkNrEWyFQ%3D%3D",
  },
  {
    id: 6,
    titulo: "Portafolio Personal",
    descripcion: "Portafolio web personal donde presento mi perfil, mis habilidades y los proyectos que desarrollé. Está construido con React usando componentes reutilizables, y los datos se cargan desde arreglos, así que agregar un proyecto nuevo es tan simple como sumar un objeto a la lista. Incluye un menú desplegable para proyectos con repositorios separados de frontend y backend, formulario de contacto, diseño responsivo y modo claro/oscuro automático según la preferencia del sistema.",
    tecnologias: [
      "JavaScript", "React", "React Router DOM", "Vite", "NodeJS", "HTML", "CSS", "Vercel", "GitHub Actions"
    ],
    repos: [
      { etiqueta: "Frontend", url: "https://github.com/GNicolasRocca/portfolio" },
    ],
  },
];

function Encabezado() {
  return (
    <header className="hero">
      <p className="hero__saludo">Hola, soy</p>
      <h1>{PERFIL.nombre}</h1>
      <h2>{PERFIL.rol}</h2>
      <img className="hero__foto" src={PERFIL.foto} alt={`Foto de ${PERFIL.nombre}`}/>
      <p className="hero__bio">{PERFIL.bio}</p>
      <a className="btn" href="#proyectos">Ver proyectos</a>
    </header>
  );
}

function Habilidades() {
  return (
    <section id="habilidades">
      <h3>Habilidades</h3>
      <ul className="chips">
        {HABILIDADES.map((h) => (
          <li key={h} className="chip">{h}</li>
        ))}
      </ul>
    </section>
  );
}

function EnlaceRepos({ repos: todos = [] }) {
  const repos = todos.filter((r) => r.url);
  const [abierto, setAbierto] = useState(false);
  const contenedor = useRef(null);

  useEffect(() => {
    if (!abierto) return;
    const cerrarSiFuera = (e) => {
      if (!contenedor.current.contains(e.target)) setAbierto(false);
    };
    const cerrarConEscape = (e) => e.key === "Escape" && setAbierto(false);
    document.addEventListener("mousedown", cerrarSiFuera);
    document.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.removeEventListener("mousedown", cerrarSiFuera);
      document.removeEventListener("keydown", cerrarConEscape);
    };
  }, [abierto]);

  if (repos.length === 0) return null;

  if (repos.length === 1) {
    return (
      <a href={repos[0].url} target="_blank" rel="noreferrer">Código</a>
    );
  }

  return (
    <div className="dropdown" ref={contenedor}>
      <button
        type="button"
        className="dropdown__boton"
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
      >
        Código ▾
      </button>
      {abierto && (
        <ul className="dropdown__menu">
          {repos.map((r) => (
            <li key={r.etiqueta}>
              <a
                href={r.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => setAbierto(false)}
              >
                {r.etiqueta}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function TarjetaProyecto({ proyecto }) {
  return (
    <article className="card">
      <h4>{proyecto.titulo}</h4>
      <p>{proyecto.descripcion}</p>
      <ul className="chips">
        {proyecto.tecnologias.map((t) => (
          <li key={t} className="chip chip--chico">{t}</li>
        ))}
      </ul>
      <div className="card__links">
         <EnlaceRepos repos={proyecto.repos} />
         {proyecto.demo && (
          <a href={proyecto.demo} target="_blank" rel="noreferrer">Demo</a>
        )}
      </div>
    </article>
  );
}

function Proyectos() {
  return (
    <section id="proyectos">
      <h3>Proyectos</h3>
      <div className="grid">
        {PROYECTOS.map((p) => (
          <TarjetaProyecto key={p.id} proyecto={p} />
        ))}
      </div>
    </section>
  );
}

function Contacto() {
  const [form, setForm] = useState({ nombre: "", mensaje: "" });

  const manejarCambio = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    const asunto = encodeURIComponent(`Contacto desde tu portafolio: ${form.nombre}`);
    const cuerpo = encodeURIComponent(form.mensaje);
    window.location.href = `mailto:${PERFIL.email}?subject=${asunto}&body=${cuerpo}`;
  };

  return (
    <section id="contacto">
      <h3>Contacto</h3>
      <form onSubmit={enviar} className="form">
        <input
          name="nombre"
          placeholder="Tu nombre"
          value={form.nombre}
          onChange={manejarCambio}
          required
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          rows="4"
          value={form.mensaje}
          onChange={manejarCambio}
          required
        />
        <button className="btn" type="submit">Enviar</button>
      </form>
      <p className="redes">
        <a href={PERFIL.github} target="_blank" rel="noreferrer">GitHub</a>
        {" · "}
        <a href={PERFIL.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Encabezado />
      <main>
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
      <footer>© {new Date().getFullYear()} {PERFIL.nombre}</footer>
    </>
  );
}