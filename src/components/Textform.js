import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Textform = ({ onChange }) => {
  const [full, setFull] = useState([false, false, false]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    let newbools = [full[0], full[1], full[2]];
    let newbool = false;
    if (value != "") {
      newbool = true;
    }
    newbools[index] = newbool;

    setFull(newbools);

    onChange(newbools);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          onChange={(e) => handleChange(e, 0)}
        />
        <Form.Control
          type="text"
          placeholder="Enter text 1"
          name="text1"
          onChange={(e) => handleChange(e, 1)}
        />
        <Form.Control
          type="text"
          placeholder="Enter text 2"
          name="text2"
          onChange={(e) => handleChange(e, 2)}
        />
      </Form.Group>
    </Form>
  );
};
