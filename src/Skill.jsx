import { useState, useEffect } from 'react'
import './Porto.css'
import reactPng from "./assets/react.svg";
import gamePng from "./assets/gamdev.jpg";
import koding from "./assets/koding.jpg";
import wa from "./assets/whatsapp.jpg";
import insta from "./assets/insta.png";
import github from "./assets/github.png";

const skills = [
  {
    title: "Front-End Development",
    img: reactPng,
    desc: "Aku menguasai html, css, javascript, dan React.",
    link: "https://treptium.vercel.app",
  },
  {
    title: "Game Development",
    img: gamePng,
    desc: "Aku menguasai C#, Java, C++, Unity, Godot.",
    link: "https://github.com/Asxarthoz/",
  },
  {
    title: "Software Development",
    img: koding,
    desc: "Aku menguasai C++, Java, Python, MySQL.",
    link: "https://github.com/Asxarthoz/",
  },
];

function Skill() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const observerOptions = { threshold: 0.2, rootMargin: '0px' };
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          const container4 = entry.target.querySelector('.container4');
          const items = entry.target.querySelectorAll('.item');
          if (container4) container4.classList.add('animate');
          items.forEach(item => item.classList.add('animate'));
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    document.querySelectorAll('.halaman3').forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const nextSkill = () => setCurrentSkill((prev) => (prev + 1) % skills.length);
  const prevSkill = () => setCurrentSkill((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  const goToSkill = (index) => setCurrentSkill(index);

  return (
    <>

      <div className="halaman3 hal3-skill">
        <button className="carousel-btn prev" onClick={prevSkill}>❮</button>

        <div className="rank-carousel-track">
          {skills.map((skill, i) => {
            let position = 'next';
            if (i === currentSkill) position = 'center';
            else if (i === currentSkill - 1 || (currentSkill === 0 && i === skills.length - 1)) position = 'prev';

            return (
              <div
                key={i}
                className={`rank-card skill-card ${position}`}
                onClick={() => goToSkill(i)}
              >
                <h1>{skill.title}</h1>
                <img className="gbrRank" src={skill.img} alt={skill.title} />
                <p className="skillF">{skill.desc}</p>
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <button onClick={(e) => e.stopPropagation()}>Lihat karyaku</button>
                </a>
              </div>
            );
          })}
        </div>

        <button className="carousel-btn next" onClick={nextSkill}>❯</button>

        <div className="rank-dots">
          {skills.map((_, i) => (
            <span
              key={i}
              className={`rank-dot ${i === currentSkill ? 'active' : ''}`}
              onClick={() => goToSkill(i)}
            />
          ))}
        </div>
      </div>

      <div className="halaman3">
        <div className="container4">
          <h1 id="h4">Social Media</h1>
          <div className="box">
            <div className="item">
              <a href="https://wa.me/6282138516707" target="_blank" rel="noopener noreferrer">
                <img src={wa} className="gambar" alt="Whatsapp"/>
              </a>
              <h1 id="h4">Whatsapp</h1>
            </div>
            <div className="item">
              <a href="https://www.instagram.com/zid.dn" target="_blank" rel="noopener noreferrer">
                <img src={insta} className="gambar" alt="Instagram"/>
              </a>
              <h1 id="h4">Instagram</h1>
            </div>
            <div className="item">
              <a href="https://github.com/Asxarthoz/" target="_blank" rel="noopener noreferrer">
                <img src={github} className="gambar" alt="Github"/>
              </a>
              <h1 id="h4">Github</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill