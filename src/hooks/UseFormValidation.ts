import { useState } from 'react';
import { ValidationService } from '../services/ValidationService';

export const useFormValidation = (initialValues: any) => {
    const [form, setForm] = useState(initialValues);

    function updateForm(fieldName: string, value: string) {
      const item = form[fieldName];
      const result = ValidationService.validate(value, item.validators);
      const updatedField = {
        ...form[fieldName],
        valid: result.valid,
        value,
        messages: result.messages
      };

      setForm({ ...form, [fieldName]: updatedField});
    }
  
    return [form, updateForm];
};
