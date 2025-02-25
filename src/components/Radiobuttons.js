import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const Radiobuttons = ({ onChange }) => {
  const [selected, setSelected] = useState(false);

  const handleChange = () => {
    setSelected(true);
    onChange(true);
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Check
          type="radio"
          label="Mucho"
          name="options"
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="bastante"
          name="options"
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="normal"
          name="options"
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="poco"
          name="options"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};
