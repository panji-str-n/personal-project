import React from "react";
import moment from "moment"
import Form from "react-bootstrap/Form";

const InputForm = (props) => {
  const {labelName, rules, type, fieldName, isAddress=false, isInputForm} = props

  const nowDate = moment().format("YYYY-MM-DD")
  return (
    <div>
      <Form.Label>{labelName}</Form.Label>
      {isAddress && <Form.Control as="textarea" name={fieldName} {...rules} rows="3" cols="40"/>}
      {isInputForm && <Form.Control name={fieldName} type={type} {...rules} max={nowDate}/>}
    </div>
  );
};

export default InputForm;