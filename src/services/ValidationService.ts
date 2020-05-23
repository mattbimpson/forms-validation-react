export enum ValidatorType {
    REQUIRED,
    EMAIL,
    PHONE,
    NONE,
    NOWHITESPACE
  }
  
  export class ValidationService {
  
    private static rules = [
      {
        type: ValidatorType.REQUIRED,
        regex: /^(?!\s*$).+/,
        message: 'Please enter a value.'
      },
      {
        type: ValidatorType.NOWHITESPACE,
        regex: /^\S+(?: \S+)*$/,
        message: 'Spaces cannot be entered before or after.'
      },
      {
        type: ValidatorType.EMAIL,
        regex: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
        message: 'Please enter a valid email address.'
      },
      {
        type: ValidatorType.PHONE,
        regex: /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
        message: 'Please enter a valid phone number.'
      }
    ];
  
    static validate(input: string, validators: ValidatorType[]) {
      let valid = (input === null || typeof input === undefined) ? false : true;
      const messages: string[] = [];
  
      for (const validator of validators) {
        const rule = this.rules.find(x => x.type === validator);
        if (rule) {
          const regex = RegExp(rule.regex);
          const result = regex.test(input);
          if (!result) {
            valid = false;
            if (!rule.message) {
              continue;
            }
          }
        }
      }
  
      return {
        valid, messages
      };
    }
  }
  