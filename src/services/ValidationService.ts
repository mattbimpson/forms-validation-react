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
        failMessage: 'Please enter a value.'
      },
      {
        type: ValidatorType.NOWHITESPACE,
        regex: /^\S+(?: \S+)*$/,
        failMessage: 'Spaces cannot be entered before or after.'
      },
      {
        type: ValidatorType.EMAIL,
        regex: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
        failMessage: 'Please enter a valid email address.'
      },
      {
        type: ValidatorType.PHONE,
        regex: /^\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/,
        failMessage: 'Please enter a valid phone number.'
      }
    ];
  
    static validate(input: string, validators: ValidatorType[], fieldName: string = '') {
      let valid = (input === null || typeof input === undefined) ? false : true;
      const failMessages: string[] = [];
  
      for (const validator of validators) {
        const rule = this.rules.find(x => x.type === validator);
        if (rule) {
          const regex = RegExp(rule.regex);
          const result = regex.test(input);
          if (!result) {
            valid = false;
            if (!rule.failMessage) {
              continue;
            }
            const replacement = fieldName ? fieldName.replace(/([A-Z])/g, ' $1').toLowerCase() : '';
            failMessages.push(rule.failMessage.replace('<FIELD_NAME>', replacement));
          }
        }
      }
  
      return {
        valid, failMessages
      };
    }
  }
  