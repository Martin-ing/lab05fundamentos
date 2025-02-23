import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Radiobuttons = () => {
  const [selected, setSelected] = useState(false);

  const handleChange = () => {
    setSelected(true);
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Check
          type="radio"
          label="Option 1"
          name="options"
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="Option 2"
          name="options"
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="Option 3"
          name="options"
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="Option 4"
          name="options"
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};
