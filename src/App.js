import React from 'react';
import './App.css';
import { FaEnvelope, FaLinkedin, FaInstagram, FaFacebook, FaDiscord } from 'react-icons/fa';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <header>
        <h1>Tabish Raza - Game Developer</h1>
        <nav className={menuOpen ? 'open' : ''}>
          <a href="#welcome" onClick={() => setMenuOpen(false)}>Welcome</a>
          <a href="#games" onClick={() => setMenuOpen(false)}>Games</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      <section id="home" className="about-section">
      <div className="about-text">
        <h2>Welcome</h2>
        <p>
          I'm Tabish Raza, a passionate and creative game developer with a focus on gameplay mechanics, immersive experiences, and technical design. I specialize in Unity (2D/3D/VR), C#, and love building everything from casual mobile games to deep PC titles.
        </p>
        <p>
          I've developed a variety of projects including action games, puzzle platformers, horror survival games, and simulation experiences. I also work with localization (Urdu, Punjabi, English), translation, and UI/UX design to enhance user engagement.
        </p>
        <p>
          Whether it's scripting enemy AI, designing level logic, or crafting immersive environments, I take pride in turning ideas into polished, playable realities. I'm always eager to learn, collaborate, and push boundaries in game development.
        </p>
      </div>

      <div className="about-img">
        <img src="/tabish.jpg" alt="Tabish Raza" />
      </div>
    </section>

      <section id="games">
        <h2>My Games</h2>
        <div className="game-list">
          <div className="game-card">
            <h3>Fireboy & Treegirl</h3>
            <img src="/FireBoyTreeGirlMobile.jpg" alt="Fireboy & Treegirl" className="full-img" />
            <p>A modern clone of the classic Fireboy & Watergirl game — reimagined with a forest twist. Solve elemental puzzles solo or with a partner. Relive your memories!</p>
            <a href="/FireboyTreegirl.apk" download className="apk-button">Download APK</a>
          </div>

          <div className="game-card">
            <h3>BookHead's Curse</h3>
            <img src="/BookHeadsCurse.jpg" alt="BookHead's Curse" className="full-img" />
            <p>You are trapped inside a cursed, pitch-black maze, hunted by BookHead—a blind, sound-sensitive creature. Collect keys, manage your flashlight, and survive the terror.</p>
            <a href="https://drive.google.com/drive/folders/1e1VJCH54hM72vJ_jdU0fu2tI9ZlLZtfb?usp=drive_link" target="_blank" rel="noopener noreferrer" className="apk-button">
              Download for Windows
            </a>
          </div>

          <div className="game-card">
            <h3>Maths Master</h3>
            <img src="/MathsMaster.jpg" alt="Maths Master" className="full-img" />
            <p>Test your math skills in this fast-paced puzzle game. Solve equations, beat the clock, and climb the leaderboards!</p>
            <a href="/MathsMaster.apk" download className="apk-button">Download APK</a>
          </div>

          <div className="game-card">
            <h3>Galaxy Shooter Pro</h3>
            <img src="/GalaxyShooterPro.png" alt="Galaxy Shooter Pro" className="full-img" />
            <p>Blast your way through waves of enemies in this fast-paced space shooter. Drift through the cosmos, collect power-ups, and save the galaxy!</p>
            <a href="https://drive.google.com/drive/folders/1xNl9JuIxtkV_A2lcpyUrdBPQz2EvBzOX?usp=drive_link" target="_blank" rel="noopener noreferrer" className="apk-button">
              Download for Windows
            </a>
          </div>

          <div className="game-card">
            <h3>Flappy Fish</h3>
            <img src="/FlappyFish.png" alt="Flappy Fish" className="full-img" />
            <p>Help Flappy Fish navigate through a colorful underwater world. Avoid obstacles, collect points, and see how far you can go!</p>
            <a href="https://funnykittenstudios.itch.io/flappy-fish" target="_blank" rel="noopener noreferrer" className="apk-button">
              Play Online
            </a>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
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
    </div>
  );
}

export default App;