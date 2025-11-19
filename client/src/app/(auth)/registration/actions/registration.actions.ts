interface RequiredPassword {
  isValid: boolean;
  required: {
    minLength: boolean;
    atLeastOneUpperCase: boolean;
    atLeastOneDigit: boolean;
    atLeastOneSpecialCharacter: boolean;
  };
  password: string;
}
export function checkingPasswords(passOne: string, passTwo: string): boolean {
  const requiredPassword = {
    minLength: passOne.length >= 8,
    atLeastOneUpperCase: /[A-Z]/.test(passOne),
    atLeastOneDigit: /\d/.test(passOne),
    atLeastOneSpecialCharacter: /[^a-zA-Z0-9]/.test(passOne),
  };

  return (
    requiredPassword.minLength &&
    requiredPassword.atLeastOneUpperCase &&
    requiredPassword.atLeastOneDigit &&
    requiredPassword.atLeastOneSpecialCharacter &&
    passOne === passTwo
  );
}
