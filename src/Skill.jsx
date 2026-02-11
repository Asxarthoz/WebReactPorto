import { useState, useEffect } from 'react'
import './Porto.css'
import reactPng from "./assets/react.svg";
import gamePng from "./assets/gamdev.jpg";
import koding from "./assets/koding.jpg";
import wa from "./assets/whatsapp.jpg";
import insta from "./assets/insta.png";
import github from "./assets/github.png";

function Skill() {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          const container = entry.target.querySelector('.container');
          const container4 = entry.target.querySelector('.container4');
          const sliderWrapper = entry.target.querySelector('.sliderWrapper');
          const items = entry.target.querySelectorAll('.item');
          
          if (container) container.classList.add('animate');
          if (container4) container4.classList.add('animate');
          if (sliderWrapper) sliderWrapper.classList.add('animate');
          items.forEach(item => item.classList.add('animate'));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.halaman3');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
      desc: "Aku menguasai C#, C++, Unity, Godot.",
      link: "https://github.com/Asxarthoz/",
    },
    {
      title: "Software Development",
      img: koding,
      desc: "Aku menguasai C++, Java, Python, MySQL.",
      link: "https://github.com/Asxarthoz/",
    },
  ];

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? skills.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="halaman3">
        <div className="container">
          <h1>Skillku di Bidang Pemrograman</h1>
          <div className="sliderWrapper">
            <button className="navBtn" onClick={prevSlide}>&lt;</button>
            <div className="sliderViewport">
              <div
                className="sliderTrack"
                style={{
                  transform: `translateX(-${index * 100}%)`,
                }}
              >
                {skills.map((skill, i) => (
                  <div className="itemBox" key={i}>
                    <h1>{skill.title}</h1>
                    <img className="reactPng" src={skill.img} alt={skill.title} />
                    <p className="skillF">{skill.desc}</p>
                    <a
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Lihat karyaku</button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <button className="navBtn" onClick={nextSlide}>&gt;</button>
          </div>
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