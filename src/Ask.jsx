import { useState } from 'react'
import './Ask.css'

const skills = [
  {
    id: 0,
    title: "Programming",
    tag: "01 — Core Skill",
    image: "/ssCoding.png",
    desc: "Saya memiliki minat tentang koding sejak saya SMP. Pada saat saya SMA, saya sudah mulai mempelajari HTML, CSS, dan Javascript. Sedangkan untuk saat ini, bahasa pemrograman yang saya kuasai adalah C++, C, C#, Java, Python, HTML, CSS, dan Javascript."
  },
  {
    id: 1,
    title: "Design",
    tag: "02 — Creativity",
    image: "/design.png",
    desc: "Saya sangat suka mendesain sesuatu. Aplikasi yang sering saya gunakan adalah canva dan juga capcut. Ketika tim saya membutuhkan seseorang untuk membuat design atau PPT, saya sering dengan sukarela mengajukan diri untuk membuatkannya."
  },
  {
    id: 2,
    title: "Teaching",
    tag: "03 — Social",
    image: "/ssCoding.png",
    desc: "Saya memiliki keahlian dalam mengajar anak-anak khususnya tingkat sekolah dasar. Saya juga memiliki pengalaman mengajar dibawah sebuah bimbel untuk mengajar anak kelas 4 SD secara privat."
  },
]

function Ask() {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  function navigate(dir) {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setIndex((prev) => (prev + dir + skills.length) % skills.length)
      setAnimating(false)
    }, 300)
  }

  const skill = skills[index]

  return (
    <div className="hal2">

      <div className="header-strip">
        <h1 className="judul">Apa Saja Skill yang Kumiliki?</h1>
        <span className="counter">{String(index + 1).padStart(2, '0')} / {String(skills.length).padStart(2, '0')}</span>
      </div>

      <div className="kiri">
        <p className="skill-tag">{skill.tag}</p>
        <h2 className={`skill-title${animating ? ' fade' : ''}`}>{skill.title}</h2>
        <div className="divider" />
        <p className={`skill-desc${animating ? ' fade' : ''}`}>{skill.desc}</p>
      </div>

      <div className="kanan">
        <img
          className={animating ? 'fade' : ''}
          src={skill.image}
          alt={skill.title}
          onError={(e) => { e.target.style.display = 'none' }}
        />
        <div className="img-placeholder" style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
          <svg viewBox="0 0 24 24" fill="white">
            <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
          </svg>
        </div>
      </div>

      <div className="nav-buttons">
        <button className="btn-nav" onClick={() => navigate(-1)}>←</button>
        <button className="btn-nav" onClick={() => navigate(1)}>→</button>
      </div>

      <div className="dots">
        {skills.map((_, i) => (
          <div
            key={i}
            className={`dot${i === index ? ' active' : ''}`}
            onClick={() => {
              if (animating) return
              setAnimating(true)
              setTimeout(() => { setIndex(i); setAnimating(false) }, 300)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Ask  