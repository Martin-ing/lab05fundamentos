import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Textform } from "./components/Textform";
import { Radiobuttons } from "./components/Radiobuttons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Checkboxes } from "./components/Checkboxes";
import { Progressbar } from "./components/Progressbar";

function MyForm() {
  const [Bools, setBools] = useState([false, false, false, false, false]);
  const [mensaje, setMensaje] = useState(false);

  const cambiarestadot = (bool) => {
    setBools([bool[0], bool[1], bool[2], Bools[3], Bools[4]]);
  };

  const cambiarestador = (bool) => {
    if (bool) {
      setBools([Bools[0], Bools[1], Bools[2], true, Bools[4]]);
    }
  };

  const cambiarestadoc = (bool) => {
    if (bool) {
      setBools([Bools[0], Bools[1], Bools[2], Bools[3], true]);
    } else {
      setBools([Bools[0], Bools[1], Bools[2], Bools[3], false]);
    }
  };

  const handleClick = (e) => {
    setMensaje(true);
    e.preventDefault();
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  return (
    <>
      <Form onSubmit={handleClick}>
        <p>Barra de progreso</p>
        <Progressbar values={Bools} />
        <p>Ingrese sus datos</p>
        <Textform onChange={(full, index) => cambiarestadot(full, index)} />
        <p>Que tan satisfecho esta</p>
        <Radiobuttons onChange={(selected) => cambiarestador(selected)} />
        <p>Que le gustaria cambiar</p>
        <Checkboxes onChange={(checked) => cambiarestadoc(checked)} />
        <Button
          type="submit"
          disabled={!Bools.every((value) => value === true)}
          style={{
            backgroundColor: "purple",
            borderColor: "purple",
            color: "white",
          }}
        >
          Enviar
        </Button>
      </Form>
      {mensaje && (
        <div className="alert alert-success mt-3">
          Formulario enviado, cargando
        </div>
      )}
    </>
  );
}

export default function MyApp() {
  return (
    <div className="container">
      <h1>Encuesta interactiva</h1>
      <MyForm />
    </div>
  );
}
