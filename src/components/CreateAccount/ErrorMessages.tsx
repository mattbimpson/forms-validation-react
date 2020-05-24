import React from 'react';
import { ErrorMessage } from './Styles';

const ErrorMessages: React.FC<any> = (props) => {
  
  const { messages } = props;

  return (
    <>
      {
        messages?.length ?
        messages.map((x: any) => <ErrorMessage>{x}</ErrorMessage>) : null
      }
    </>
  )
};

export default ErrorMessages;
