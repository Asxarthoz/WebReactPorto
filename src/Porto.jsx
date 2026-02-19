import { useState, useEffect } from 'react'
import './App.css'
import './Porto.css'
import me from "./assets/me.jpg";
import Ask from "./Ask.jsx";
import Skill from "./Skill.jsx";
import earth from "./assets/earth.png"

function Porto() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          const identityText = entry.target.querySelector('.identityText');
          const identity = entry.target.querySelector('.identity');
          
          if (identityText) identityText.classList.add('animate');
          if (identity) identity.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.halaman1, .halaman2');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className='halaman1'>
        <img className='earth' src={earth} alt="earth" />
        <div className='identity'>
          <img id='myPict' src={me}/>
          <div className='identityText'>
            <h1>Kenalin namaku Zidan.</h1>
            <p id='parIdText'>Aku merupakan mahasiswa prodi Informatika <br/>Fakultas Teknologi Informasi dan Sains Data<br/>dari Universitas 
              Sebelas Maret. Aku memiliki minat di bidang Front-End<br/>Development, Game Development, dan Software Development.</p>
          </div>
        </div>
      </div>
      <Ask/>
      <Skill/>
    </>
  )
}

export default Porto