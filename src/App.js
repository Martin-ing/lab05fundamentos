import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Textform } from "./components/Textform";
import { Radiobuttons } from "./components/Radiobuttons";
import "bootstrap/dist/css/bootstrap.min.css";

function MyForm() {
  const [selected, setSelected] = useState(false);

  // Actualiza el estado selected con los valores concatenados
  const cambiarestado = (bool) => {
    if (bool[0] & bool[1] & bool[2]) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  return (
    <>
      <Textform onChange={(full) => cambiarestado(full)} />
      <Radiobuttons />
      <Button variant="primary" type="submit" disabled={!selected}>
        hola
      </Button>
    </>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyForm />
    </div>
  );
}
