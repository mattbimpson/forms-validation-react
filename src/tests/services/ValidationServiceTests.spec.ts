import expect from 'expect';
import { ValidatorType } from '../../services/ValidationService';
import { ValidationService } from '../../services/ValidationService';

describe('validation service', () => {
  it('should return true for a required field', () => {
    const result = ValidationService.validate('test', [ValidatorType.REQUIRED]);
    expect(result.valid).toEqual(true);
    expect(result.messages.length).toEqual(0);
  });
});
