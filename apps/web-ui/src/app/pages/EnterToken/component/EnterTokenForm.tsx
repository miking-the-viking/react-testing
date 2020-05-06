import { SingleInputForm } from '@react-testing/ui-components';
import React, { useEffect, useCallback } from 'react';
import copy from './EnterTokenForm.copy';

export interface EnterTokenFormProps {
  validate: (value: string) => void;
  setToken: (value: string) => void;
  isValid: boolean;
  value: string;
}

export const EnterTokenForm: React.FC<EnterTokenFormProps> = ({
  validate,
  setToken,
  isValid,
  value
}) => {
  useEffect(() => {
    if (isValid) {
      setToken(value);
    }
  }, [isValid, setToken, value]);

  const handleSubmit = useCallback(
    value => {
      if (value) {
        validate(value);
      }
    },
    [validate]
  );

  return (
    <SingleInputForm
      identifier="enter_token"
      copy={copy}
      submit={handleSubmit}
    />
  );
};

export default EnterTokenForm;
