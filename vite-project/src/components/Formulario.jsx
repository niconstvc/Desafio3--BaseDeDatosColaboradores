import React, { useState } from "react";

const Formulario = ({ agregarColaborador, alertMessage, alertType }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoColaborador = {
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };

    agregarColaborador(nuevoColaborador);

    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");
  };

  return (
    <div className="container">
      <h2>Agregar colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del colaborador"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            type="email"
            className="form-control"
            placeholder="Email del colaborador"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <input
            type="number"
            className="form-control"
            placeholder="Edad del colaborador"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />

          <input
            type="text"
            className="form-control"
            placeholder="Cargo del colaborador"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />

          <input
            type="tel"
            className="form-control"
            placeholder="Teléfono del colaborador"
            value={telefono}
            onChange={(e) => {
              const input = e.target.value;
              if (/^[0-9]*$/.test(input)) {
                setTelefono(input);
              }
            }}
          />

          <button type="submit" className="btn btn-color btn-no-hover">
            Agregar colaborador
          </button>
        </div>
      </form>
      {alertMessage && (
        <div className="d-flex justify-content-center mt-2">
          <span className={`badge badge-${alertType}`}>{alertMessage}</span>
        </div>
      )}
    </div>
  );
};

export default Formulario;