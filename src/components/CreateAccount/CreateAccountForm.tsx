import React from 'react';
import { FormContainer, InputText, FormItem, InputButton } from './Styles';

const CreateAccountForm: React.FC<any> = () => {

  function submitForm() {
    
  }

  return (
    <>
      <FormContainer>
        <h2>Create Account</h2>
        <FormItem>
          <p>First name: </p>
          <InputText type="text"></InputText>
        </FormItem>
        <FormItem>
          <p>Last name:</p>
          <InputText type="text"></InputText>
        </FormItem>
        <FormItem>
          <p>Phone:</p>
          { /* todo: move the type into styled component props */ }
          <InputText type="tel"></InputText>
        </FormItem>
        <FormItem>
          <InputButton value="Submit" onClick={submitForm}></InputButton>
        </FormItem>
      </FormContainer>
    </>
  )
};

export default CreateAccountForm;
