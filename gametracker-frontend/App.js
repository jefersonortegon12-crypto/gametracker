import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("Conectando...");

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje))
      .catch(() => setMensaje("❌ Error al conectar con el backend"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>GameTracker 🎮</h1>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;