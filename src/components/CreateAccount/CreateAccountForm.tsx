import React from 'react';
import { FormContainer, InputText } from './Styles';

const CreateAccountForm: React.FC<any> = () => {
  return (
    <>
      <FormContainer>
        <h2>Create Account</h2>
        <p>First name: </p>
        <InputText></InputText>
      </FormContainer>
    </>
  )
};

export default CreateAccountForm;
