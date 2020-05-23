import React from 'react';
import { FormContainer, InputText, FormItem } from './Styles';

const CreateAccountForm: React.FC<any> = () => {
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
      </FormContainer>
    </>
  )
};

export default CreateAccountForm;
