import { useState, useEffect } from "react";
import Porto from "./Porto";

function App() {
  const [nama, setNama] = useState("");
  const [stage, setStage] = useState("login");
  const [typedText, setTypedText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nama.trim() === "") {
      alert("Nama tidak boleh kosong!");
      return;
    }

    setStage("typing");
  };


  useEffect(() => {
    if (stage === "typing") {
      let index = 0;
      const fullText = `Hai ${nama}...`;

      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;

        if (index === fullText.length) {
          clearInterval(interval);


          setTimeout(() => {
            setStage("porto");
          }, 1000);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [stage, nama]);

  return (
    <>
      {stage === "login" && (
        <>
          <h1>Portofolio Zidan</h1>

          <form onSubmit={handleSubmit}>
            <input
              id="inputNama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Siapa namamu?"
            />
            <button type="submit">Masukkan</button>
          </form>
        </>
      )}

      {stage === "typing" && (
        <h1 style={{ fontSize: "3rem" }}>{typedText}</h1>
      )}

      {stage === "porto" && <Porto nama={nama} />}
    </>
  );
}

export default App;
