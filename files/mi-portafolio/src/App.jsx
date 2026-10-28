import { useState } from "react";
import "./App.css";

// solo edites este arreglo y no el HTML de abajo.
const PERFIL = {
  nombre: "Gonzalo Rocca",
  rol: "Desarrollador Web Full Stack",
  bio: "¡Hola!, ¡soy Gonzalo Rocca! Desarrollador Back End y estudiante de Informática en la UNGS. Para enriquecer mis conocimientos, realicé una carrera de desarrollo web en Soy Henry y diferentes cursos relacionados a la informática, entre otros. En cuanto a mi experiencia en el área comercial administrativa, ha potenciado en mí un buen manejo de las relaciones interpersonales y del trabajo bajo presión, entre otras. Actualmente, me encuentro en búsqueda de mi primera experiencia en el área de desarrollo web con muchas ganas de aprender y desarrollarme profesionalmente. Me considero una persona empática, dinámica y ¡con gran voluntad para adquirir nuevos desafíos! Quedo a disposición.",
  email: "gonzalo-rocca@hotmail.com",
  github: "https://github.com/GNicolasRocca",
  linkedin: "https://www.linkedin.com/in/gonzalorocca/",
};

const HABILIDADES = [
  "JavaScript", "TypeScript", "Python", "NodeJS","NestJS", "MongoDB", "PostgreSQL", "TypeORM", "React", "HTML5",
  "CSS3", "Express", "Axios", "Bootstrap", "Foundation",
];

// Centrar PERFIL, HABILIDADES, PROYECTOS

const PROYECTOS = [
  {
    id: 1,
    titulo: "PowerGym - Plataforma Web de Gestión de Centro de Entrenamiento",
    descripcion: "Como parte de un equipo de múltiples disciplinas, colaboré en el desarrollo de una aplicación web para gestión de un gimnasio, en autenticación de usuarios (usuario, coach o administrador) donde la funcionalidad cambia dependiendo del rol. ",
    tecnologias: [
      "API de Swagger", "Docker", "Stripe", "TypeScript", "PostgreSQL", "GitHub Actions", "Jest",
      "NestJS", "TypeORM", "JSON Web Token (JWT)", "Cloudinary"
    ],
    repo: "https://github.com/PowerGymok/powerGym_Back", // https://github.com/PowerGymok/PF-Fron
    demo: "https://pf-front-ijjg.vercel.app/home",    
  },
  {
    id: 2,
    titulo: "Fix It",
    descripcion: "Fix It es una página web para sacar turnos de manera online para reparar equipos informáticos. Cuenta también con un sistema de usuarios, con el cual podemos ver nuestros turnos disponibles y ademas podemos modificar nuestra información personal.",
    tecnologias: [
      "HTML", "CSS", "JavaScript", "Axios", "React", "React Router DOM", "Vite", "Styled Components"
    ],
    repo: "https://github.com/GNicolasRocca/Fix-It",
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
    repo: "https://github.com/GNicolasRocca/Pelis-free",
    demo: "",
  },
  {
    id: 4,
    titulo: "API Rest para e-commerce",
    descripcion: "API REST para e-commerce construida con un stack robusto y desplegada en producción.",
    tecnologias: [
      "NestJS", "TypeORM", "PostgreSQL", "JWT", "Cloudinary", "Swagger / OpenAPI", "Jest", "Docker", "GitHub Actions"
    ],
    repo: "https://github.com/PowerGymok/powerGym_Back",
    demo: "https://ecommerce-pt29-deploy.onrender.com/api",
  },
  {
    id: 5,
    titulo: "FTecommerce",
    descripcion: "Esta es una API construida con Nest para Fix It Ecommerce",
    tecnologias: [
      "TypeORM", "NodeJS",
    ],
    repo: "https://github.com/GNicolasRocca/FTecommerce",
    demo: "linkedin.com/safety/go/?url=https%3A%2F%2Fnest-demo-latest-8yd5.onrender.com%2Fapi&urlhash=pi2r&mt=Pqidn8uj5aHFKr7S3a5iFhf-bvryiB6UcaB9RepUe3nG9F5hsuvObG6BTDWDKSVeahug-Fp1b1GDc6vVvO6saYMUjCRZ&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B77svcWi%2BQsuN4GkNrEWyFQ%3D%3D",
  },
];

function Encabezado() {
  return (
    <header className="hero">
      <p className="hero__saludo">Hola, soy</p>
      <h1>{PERFIL.nombre}</h1>
      <h2>{PERFIL.rol}</h2>
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
        {/* key ayuda a React a identificar cada elemento de la lista */}
        {HABILIDADES.map((h) => (
          <li key={h} className="chip">{h}</li>
        ))}
      </ul>
    </section>
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
        {/* Renderizado condicional: solo mostramos el link si existe */}
        {proyecto.repo && (
          <a href={proyecto.repo} target="_blank" rel="noreferrer">Código</a>
        )}
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
  // Estado del formulario: React controla lo que el usuario escribe.
  const [form, setForm] = useState({ nombre: "", mensaje: "" });

  const manejarCambio = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Sin backend: abrimos el cliente de correo con el mensaje armado.
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
