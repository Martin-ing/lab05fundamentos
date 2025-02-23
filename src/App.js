import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { Textform } from "./components/Textform";
import { Radiobuttons } from "./components/Radiobuttons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Checkboxes } from "./components/Checkboxes";

function MyForm() {
  const [Bools, setBools] = useState([false, false, false]);
  const [Texts, setTexts] = useState([false, false, false]);

  const cambiarestadot = (bool, index) => {
    let newbools = Bools;
    newbools[index] = bool[index];
    setTexts(newbools);
    if (bool[0] & bool[1] & bool[2]) {
      setBools([true, Bools[1], Bools[2]]);
    } else {
      setBools([false, Bools[1], Bools[2]]);
    }
  };

  const cambiarestador = (bool) => {
    if (bool) {
      setBools([Bools[0], true, Bools[2]]);
    }
  };

  const cambiarestadoc = (bool) => {
    if (bool) {
      setBools([Bools[0], Bools[1], true]);
    } else {
      setBools([Bools[0], Bools[1], false]);
    }
  };

  return (
    <>
      <Textform onChange={(full, index) => cambiarestadot(full, index)} />
      <Radiobuttons onChange={(selected) => cambiarestador(selected)} />
      <Checkboxes onChange={(checked) => cambiarestadoc(checked)} />
      <Button
        variant="primary"
        type="submit"
        disabled={!Bools.every((value) => value === true)}
      >
        submit
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
