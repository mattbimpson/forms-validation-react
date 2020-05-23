import { useState } from 'react';
import { ValidationService } from '../services/ValidationService';

export const useFormValidation = (initialValues: any) => {
    const [form, setForm] = useState(initialValues);

    function updateForm(fieldName: string, value: string) {
      for (const item of form) {
        if (fieldName && item.fieldName === fieldName) {
          item.value = value;
        }
        const result = ValidationService.validate(item.value, item.validators);
        item.valid = result.valid;
        item.messages = result.messages;
      }
  
      setForm(form);
    }
  
    return {form, updateForm};
};
