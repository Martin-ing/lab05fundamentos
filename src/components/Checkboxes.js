import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Checkboxes = ({ onChange }) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;

    setSelectedCheckboxes((prevState) => {
      const updatedState = { ...prevState, [name]: checked };

      onChange(Object.values(updatedState).includes(true));
      return updatedState;
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Check
          type="checkbox"
          label="Option 1"
          name="option1"
          checked={selectedCheckboxes.option1}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          label="Option 2"
          name="option2"
          checked={selectedCheckboxes.option2}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          label="Option 3"
          name="option3"
          checked={selectedCheckboxes.option3}
          onChange={handleChange}
        />
        <Form.Check
          type="checkbox"
          label="Option 4"
          name="option4"
          checked={selectedCheckboxes.option4}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};
