import { useState, useEffect } from 'react'
import './Porto.css'
import ex1 from "./assets/one.png";
import ex2 from "./assets/salah.png";
import ex3 from "./assets/benar.png";

function Ask() {
  const [ekspresi, setEks] = useState(ex1);
  const textS = "Emmm...Kurang tepat";
  const textB = "Benaarr!!"
  const [textEks, setTeksEks] = useState("");

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          const eksWadah = entry.target.querySelector('.eksWadah');
          if (eksWadah) eksWadah.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.halaman2');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="halaman2">
        <h1 id='judul2'>Coba tebak, apa skill yang kumiliki?</h1>
        <div className="eksWadah">
          <img src={ekspresi}></img>
          <div className="wdhBtn">
            <button className="tombolSk" onClick={() => {setEks(ex2); setTeksEks(textS);}}>Bobok</button>
            <button className="tombolSk" onClick={() => {setEks(ex3); setTeksEks(textB);}}>Pemrograman</button>
            <button className="tombolSk" onClick={() => {setEks(ex2); setTeksEks(textS);}}>Makan</button>
          </div>
        </div>
        <h1>{textEks}</h1>
      </div>
    </>
  )
}

export default Ask