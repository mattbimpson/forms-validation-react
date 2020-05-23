import React, { useState } from 'react';
import { FormContainer, InputText, FormItem, InputButton } from './Styles';
import { useFormValidation } from '../../hooks/UseFormValidation';
import { ValidatorType } from '../../services/ValidationService';

const CreateAccountForm: React.FC<any> = () => {
  
  const [form, updateForm] = useFormValidation([
    { fieldName: 'firstName', validators: [ValidatorType.REQUIRED] },
    { fieldName: 'lastName', validators: [ValidatorType.REQUIRED] },
    { fieldName: 'phone', validators: [ValidatorType.REQUIRED, ValidatorType.PHONE] }
  ]);
  const [formInvalid, setFormInvalid] = useState(true);

  function getField(name: string) {
    return form.find((x: any) => x.fieldName === name);
  }

  function submitForm() {

  }

  function onChange(fieldName: string, value: string) {
    updateForm(fieldName, value);
    isFormInvalid();
  }

  function isFormInvalid() {
    setFormInvalid(form.some((x: any) => !x.valid));
  }

  return (
    <>
      <FormContainer>
        <h2>Create Account</h2>
        <FormItem>
          <p>First name: </p>
          <InputText type="text" onChange={(e: any) => onChange('firstName', e.target.value)} value={getField('firstName').value}></InputText>
        </FormItem>
        <FormItem>
          <p>Last name:</p>
          <InputText type="text" onChange={(e: any) => onChange('lastName', e.target.value)} value={getField('lastName').value}></InputText>
        </FormItem>
        <FormItem>
          <p>Phone:</p>
          { /* todo: move the type into styled component props */ }
          <InputText type="tel" onChange={(e: any) => onChange('phone', e.target.value)} value={getField('phone').value} maxLength={14}></InputText>
        </FormItem>
        <FormItem>
          <InputButton onClick={submitForm} disabled={formInvalid}>Submit</InputButton>
        </FormItem>
      </FormContainer>
    </>
  )
};

export default CreateAccountForm;
