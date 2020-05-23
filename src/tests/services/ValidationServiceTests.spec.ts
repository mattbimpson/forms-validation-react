import expect from 'expect';
import { ValidatorType } from '../../services/ValidationService';
import { ValidationService } from '../../services/ValidationService';

describe('validation service', () => {
  it('should return true for a required field', () => {
    const result = ValidationService.validate('test', [ValidatorType.REQUIRED]);
    expect(result.valid).toEqual(true);
    expect(result.messages.length).toEqual(0);
  });

  it('should return true for a valid email', () => {
    const result = ValidationService.validate('test@test.com', [ValidatorType.EMAIL]);
    expect(result.valid).toEqual(true);
    expect(result.messages.length).toEqual(0);
  });

  it('should return false and contain failure message for an invalid email', () => {
    const result = ValidationService.validate('test@test', [ValidatorType.EMAIL]);
    expect(result.valid).toEqual(false);
    expect(result.messages.length).toEqual(1);
  });
});
