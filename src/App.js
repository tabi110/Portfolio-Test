import React from 'react';
import './App.css';
import { FaEnvelope, FaLinkedin, FaInstagram, FaFacebook, FaDiscord } from 'react-icons/fa';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const games = [
  {
    title: "BookHead's Curse",
    image: "/BookHeadsCurse.jpg",
    description: "You are trapped inside a cursed, pitch-black maze, hunted by BookHead — a blind, sound-sensitive creature. Collect keys, manage your flashlight, and survive the terror.",
    tags: ["Unity", "Horror", "Android"],
    link: "https://drive.google.com/drive/folders/1e1VJCH54hM72vJ_jdU0fu2tI9ZlLZtfb?usp=drive_link",
    linkLabel: "Download APK",
  },
  {
    title: "Between The Worlds",
    image: "/BetweenTheWorlds.png",
    description: "A haunting liminal experience set inside the mind of a coma patient. Explore the surreal, dreamlike spaces of a fractured consciousness following a tragic accident.",
    tags: ["Unity", "Atmospheric", "PC"],
    link: "https://drive.google.com/drive/folders/1fFJnoTy3w4KSyndVmUN9w_-H7TeRSQ75?usp=sharing",
    linkLabel: "Download for Windows",
  },
  {
    title: "Hunter Assassin",
    image: "/hunterassasin.png",
    description: "A top-down stealth action game inspired by Hunter Assassin. Sneak through the shadows, eliminate targets without being spotted, and master the art of silent takedowns.",
    tags: ["Unity", "Stealth", "Android"],
    link: "https://drive.google.com/drive/folders/1IUg22Q3ZQmCc88AoEDEScQ44B_IcbtGd?usp=drive_link",
    linkLabel: "Download APK",
  },
  {
    title: "Car Soccer",
    image: "/CarSoccer.png",
    description: "A Rocket League-inspired car soccer game where you compete against AI opponents. Drive, boost, and score goals in fast-paced vehicular football action.",
    tags: ["Unity", "Sports", "PC"],
    link: "https://drive.google.com/drive/folders/1n_SRi1BusyRzzLioBAERqTCseBk8PTfp?usp=sharing",
    linkLabel: "Download for Windows",
  },
  {
    title: "Fireboy & Treegirl",
    image: "/FireBoyTreeGirlMobile.jpg",
    description: "A modern clone of the classic Fireboy & Watergirl — reimagined with a forest twist. Solve elemental puzzles solo or with a partner. Relive your memories!",
    tags: ["Unity", "Puzzle", "Android"],
    link: "/FireboyTreegirl.apk",
    linkLabel: "Download APK",
    download: true,
  },
  {
    title: "Galaxy Shooter Pro",
    image: "/GalaxyShooterPro.png",
    description: "Blast your way through waves of enemies in this fast-paced space shooter. Drift through the cosmos, collect power-ups, and save the galaxy!",
    tags: ["Unity", "Arcade", "PC"],
    link: "https://drive.google.com/drive/folders/1xNl9JuIxtkV_A2lcpyUrdBPQz2EvBzOX?usp=drive_link",
    linkLabel: "Download for Windows",
  },
  {
    title: "Maths Master",
    image: "/MathsMaster.jpg",
    description: "Test your math skills in this fast-paced puzzle game. Solve equations, beat the clock, and climb the leaderboards!",
    tags: ["Unity", "Educational", "Android"],
    link: "/MathsMaster.apk",
    linkLabel: "Download APK",
    download: true,
  },
  {
    title: "Flappy Fish",
    image: "/FlappyFish.png",
    description: "Help Flappy Fish navigate through a colorful underwater world. Avoid obstacles, collect points, and see how far you can go!",
    tags: ["Unity", "Casual", "WebGL"],
    link: "https://funnykittenstudios.itch.io/flappy-fish",
    linkLabel: "Play Online",
  },
];

const skills = [
  { name: "Unity", icon: "🎮" },
  { name: "C#", icon: "💻" },
  { name: "2D Games", icon: "🕹️" },
  { name: "3D Games", icon: "🧊" },
  { name: "VR Development", icon: "🥽" },
  { name: "Mobile (Android)", icon: "📱" },
  { name: "PC Games", icon: "🖥️" },
  { name: "AI / Enemy Logic", icon: "🤖" },
  { name: "Level Design", icon: "🗺️" },
  { name: "UI / UX Design", icon: "🎨" },
  { name: "Physics Systems", icon: "⚙️" },
  { name: "Localization", icon: "🌐" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const platforms = ["All", "Android", "PC", "WebGL"];

  const filtered = filter === "All"
    ? games
    : games.filter(g => g.tags.includes(filter));

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <h1 className="logo-text">Tabish Raza <span className="logo-sub">Game Developer</span></h1>
          <nav className={menuOpen ? 'open' : ''}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#games" onClick={() => setMenuOpen(false)}>Portfolio</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-text">
          <p className="hero-eyebrow">Unity · C# · 2D / 3D / VR</p>
          <h2 className="hero-title">Crafting Worlds,<br />One Game at a Time</h2>
          <p className="hero-sub">
            I build immersive game experiences — from horror survival and stealth action to puzzle platformers and arcade shooters.
          </p>
          <div className="hero-buttons">
            <a href="#games" className="btn-primary">View Portfolio</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="hero-img">
          <img src="/tabish.png" alt="Tabish Raza" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <h2>About Me</h2>
        <div className="about-body">
          <p>
            I'm Tabish Raza, a passionate game developer specialising in Unity (2D, 3D, and VR) and C#. I love building everything from casual mobile experiences to deep atmospheric PC titles — always with a focus on tight gameplay mechanics and immersive design.
          </p>
          <p>
            My projects span horror survival, stealth action, sports simulations, puzzle platformers, and liminal exploration games. I also bring experience in UI/UX design, enemy AI scripting, level design, and localization across Urdu, Punjabi, and English.
          </p>
          <p>
            I take pride in turning ideas into polished, playable realities — and I'm always looking to collaborate, learn, and push boundaries in game development.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <h2>Skills & Tools</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-chip" key={s.name}>
              <span className="skill-icon">{s.icon}</span>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="games">
        <h2>Portfolio</h2>

        <div className="filter-bar">
          {platforms.map(p => (
            <button
              key={p}
              className={`filter-btn ${filter === p ? 'active' : ''}`}
              onClick={() => setFilter(p)}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="game-list">
          {filtered.map((game) => (
            <div className="game-card" key={game.title}>
              <div className="card-img-wrap">
                <img src={game.image} alt={game.title} className="full-img" />
              </div>
              <div className="card-body">
                <div className="card-tags">
                  {game.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{game.title}</h3>
                <p>{game.description}</p>
                {game.download
                  ? <a href={game.link} download className="apk-button">{game.linkLabel}</a>
                  : <a href={game.link} target="_blank" rel="noopener noreferrer" className="apk-button">{game.linkLabel}</a>
                }
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <h2>Contact</h2>
        <p className="contact-intro">Have a project in mind or want to collaborate? I'd love to hear from you.</p>
        <div className="contact-container">
          <div className="contact-icons-left">
            <a href="mailto:tabi.7212514@gmail.com" className="contact-icon" target="_blank" rel="noopener noreferrer">
              <FaEnvelope /> Email
            </a>
            <a href="https://www.linkedin.com/in/tabish-raza110" className="contact-icon" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://www.instagram.com/tabish._.raza" className="contact-icon" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> Instagram
            </a>
            <a href="https://www.facebook.com/tabish.raza.78600" className="contact-icon" target="_blank" rel="noopener noreferrer">
              <FaFacebook /> Facebook
            </a>
            <a href="https://discord.gg/Vgh9hC4E" className="contact-icon" target="_blank" rel="noopener noreferrer">
              <FaDiscord /> Discord
            </a>
          </div>
          <div className="contact-gif-wrapper">
            <img src="/Animation.gif" alt="Animated Character" className="contact-gif-image" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Tabish Raza · Game Developer · Built with React</p>
      </footer>
    </div>
  );
}

export default App;