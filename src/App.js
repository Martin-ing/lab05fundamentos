import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Textform } from "./components/Textform";

function MyForm() {
  return <Textform />;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyForm />
    </div>
  );
}
