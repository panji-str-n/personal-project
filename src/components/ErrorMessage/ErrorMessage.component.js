import React from "react";

const ErrorMessage = (props) => {
    const {message} = props

  return (
    <small className="text-danger">
      {message}
    </small>
  );
};

export default ErrorMessage;