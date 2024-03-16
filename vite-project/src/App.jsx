import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import Buscador from "./components/Buscador"; 
import { BaseColaboradores } from "./BaseColaboradores";

function App() {
  const [appAlertMessage, setAppAlertMessage] = useState("");
  const [appAlertType, setAppAlertType] = useState("");
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [idContador, setIdContador] = useState(BaseColaboradores.length + 1);
  const [searchTerm, setSearchTerm] = useState("");

  const agregarColaborador = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre === "" ||
      nuevoColaborador.correo === "" ||
      nuevoColaborador.edad === "" ||
      nuevoColaborador.cargo === "" ||
      nuevoColaborador.telefono === ""
    ) {
      setAppAlertMessage("Completa todos los campos");
      setAppAlertType("danger");
    } else {
      nuevoColaborador.id = idContador;
      setIdContador(idContador + 1);

      setColaboradores([...colaboradores, nuevoColaborador]);

      setAppAlertMessage("Agregado exitosamente");
      setAppAlertType("success");
    }
  };

  const filtrarColaboradores = (term) => {
    setSearchTerm(term);
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) =>
    colaborador.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-list">
      <div className="search-list-container">
        {" "}
        <Buscador onBuscar={filtrarColaboradores} />
        <Listado colaboradores={colaboradoresFiltrados} />{" "}
      </div>

      <div className="co-work-container">
        <Formulario
          agregarColaborador={agregarColaborador}
          alertMessage={appAlertMessage}
          alertType={appAlertType}
        />
        <Alert message={appAlertMessage} type={appAlertType} />
      </div>
    </div>
  );
}

export default App;