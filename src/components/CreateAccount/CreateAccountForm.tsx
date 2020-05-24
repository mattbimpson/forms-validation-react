import React, { useState } from 'react';
import { FormContainer, InputText, FormItem, InputButton } from './Styles';
import { useFormValidation } from '../../hooks/UseFormValidation';
import { ValidatorType } from '../../services/ValidationService';

const CreateAccountForm: React.FC<any> = () => {
  
  const [form, updateForm] = useFormValidation({
    firstName: { value: '', validators: [ValidatorType.REQUIRED] },
    lastName: { value: '', validators: [ValidatorType.REQUIRED] },
    phone: { value: '', validators: [ValidatorType.REQUIRED, ValidatorType.PHONE] },
    email: { value: '', validators: [ValidatorType.REQUIRED, ValidatorType.EMAIL] },
  });
  const [formInvalid, setFormInvalid] = useState(true);

  function submitForm() {
    window.alert('Submitted!');
  }

  function isFormInvalid() {
    const invalid =
      !form.firstName.valid ||
      !form.lastName.valid ||
      !form.phone.valid ||
      !form.email.valid;

    setFormInvalid(invalid);
  }

  function onChange(fieldName: string, value: string) {
    updateForm(fieldName, value);
    isFormInvalid();
  }

  return (
    <>
      <FormContainer>
        <h2>Create Account</h2>
        <FormItem>
          <p>First name: </p>
          <InputText type="text" onChange={(e: any) => onChange('firstName', e.target.value)} value={form.firstName.value}></InputText>
        </FormItem>
        <FormItem>
          <p>Last name:</p>
          <InputText type="text" onChange={(e: any) => onChange('lastName', e.target.value)} value={form.lastName.value}></InputText>
        </FormItem>
        <FormItem>
          <p>Phone:</p>
          { /* todo: move the type into styled component props */ }
          <InputText type="tel" onChange={(e: any) => onChange('phone', e.target.value)} value={form.phone.value} maxLength={14}></InputText>
        </FormItem>
        <FormItem>
          <p>Email: </p>
          <InputText type="text" onChange={(e: any) => onChange('email', e.target.value)} value={form.email.value}></InputText>
        </FormItem>
        <FormItem>
          <InputButton onClick={submitForm} disabled={formInvalid}>Submit</InputButton>
        </FormItem>
      </FormContainer>
    </>
  )
};

export default CreateAccountForm;
