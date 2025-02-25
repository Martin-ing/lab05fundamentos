import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

export const Progressbar = ({ values }) => {
  const completed = values.filter((value) => value === true).length;

  const progressPercentage = (completed / values.length) * 100;

  return (
    <div>
      <ProgressBar now={progressPercentage} />
    </div>
  );
};
