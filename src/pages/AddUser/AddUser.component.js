import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Select from "react-select"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.component";
import InputForm from "../../components/InputForm/InputForm.component";
import { addUser } from "../../actions/userActions";
import config from "./AddUser.config"

const { rules, relationOptions } = config

const AddUser = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors }, control } = useForm({
    mode: "onBlur",
    defaultValues: {
      family: [
        {
          relationshipStatus: {}
        }
      ],
      phoneNumber: [{
        number: ''
      }]
    }
  });
  const { fields, append } = useFieldArray({
    control,
    name: "family"
  });

  const { fields:phoneNumberFields, append:addPhoneNumber } = useFieldArray({
    control,
    name: "phoneNumber"
  });

  const onSubmit = (data) => {
    dispatch(addUser(data))
    navigate('/')
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <InputForm 
            type='text'
            rules={register('name', rules.name)} 
            labelName='Nama' 
            fieldName='name'
            isInputForm
          />
          {errors?.name && <ErrorMessage message={errors.name.message}/>}
        </Form.Group>
        <Form.Group>
          <InputForm 
            type='text'
            rules={register('eKTP', rules.eKTP)} 
            labelName='E-KTP' 
            fieldName='eKTP'
            isInputForm
          />
          {errors?.eKTP && <ErrorMessage message={errors.eKTP.message}/>}
        </Form.Group>
        <Form.Group>
          <InputForm 
            type='text'
            rules={register('address', rules.address)} 
            labelName='Address' 
            fieldName='address'
            isAddress
          />
          {errors?.address && <ErrorMessage message={errors.address.message}/>}
        </Form.Group>
        <Form.Group>
          <InputForm 
            type='text'
            rules={register('job', rules.job)} 
            labelName='Job' 
            fieldName='job'
            isInputForm
          />
          {errors?.job && <ErrorMessage message={errors.job.message}/>}
        </Form.Group>
        {
          phoneNumberFields.map((item, index) => (
            <Form.Group>
              <InputForm 
                type='text'
                rules={register(`phoneNumber.${index}.number`, rules.phoneNumber)} 
                labelName='Phone Number' 
                fieldName='phoneNumber'
                isInputForm={true}
                />
              {errors?.phoneNumber?.[index]?.number && <ErrorMessage message={errors.phoneNumber[index].number.message}/>}
          </Form.Group>
          ))
        }
        <Form.Group>
          <InputForm 
            type='date'
            rules={register('dateBirth', rules.dateBirth)} 
            labelName='Date of Birth' 
            fieldName='dateBirth'
            isInputForm
          />
          {errors?.dateBirth && <ErrorMessage message={errors.dateBirth.message}/>}
        </Form.Group>
        {
          fields.map((item, index) => (
            <div>
              <Form.Group>
                <InputForm 
                  type='text'
                  rules={register(`family.${index}.familyName`, rules.familyName)} 
                  labelName='Family Name' 
                  fieldName='familyName'
                  isInputForm={true}
                />
                {errors?.family?.[index]?.familyName && <ErrorMessage message={errors.family[index].familyName.message}/>}
              </Form.Group>
            <Form.Group>
              <InputForm 
                type='date'
                rules={register(`family.${index}.dateBirthFamily`, rules.dateBirthFamily)} 
                labelName='Date of Birth Family' 
                fieldName='dateBirthFamily'
                isInputForm={true}
                />
              {errors?.family?.[index]?.dateBirthFamily && <ErrorMessage message={errors.family[index].dateBirthFamily.message}/>}
            </Form.Group>
            <Form.Group>
            <Controller
              name={`family.${index}.relationshipStatus`}
              control={control}
              defaultValue=""
              rules={register(`family.${index}.relationshipStatus`, rules.relationshipStatus)}
              render={({ field }) => (
                <>
                <Form.Label>Relationship Status</Form.Label>
                <Select {...field} options={relationOptions}></Select>
                </>
              )}
            />
              {errors?.family?.[index]?.relationshipStatus && <ErrorMessage message={errors.family[index].relationshipStatus.message}/>}
            </Form.Group>
            </div>
          ))
        }
        <Button onClick={() => append({ familyName: "", dateBirthFamily: "", relationshipStatus: {} })}>Add Family</Button>
        <Button onClick={() => addPhoneNumber({number: ""})}>Add Phone Number</Button>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default AddUser;
