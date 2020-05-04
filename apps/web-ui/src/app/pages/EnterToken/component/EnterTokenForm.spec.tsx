import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import EnterTokenForm, { EnterTokenFormProps } from './EnterTokenForm';
import { ThemeProvider } from '@chakra-ui/core';
import copy from './EnterTokenForm.copy';

const SetUpEnterTokenForm: React.FC<Partial<EnterTokenFormProps>> = ({
  validate = () => {
    /** */
  },
  isValid = false,
  setToken = () => {
    /** */
  },
  value = ''
}) => {
  return (
    <ThemeProvider>
      <EnterTokenForm
        validate={validate}
        isValid={isValid}
        value={value}
        setToken={setToken}
      />
    </ThemeProvider>
  );
};

describe(' EnterTokenForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SetUpEnterTokenForm />);
    expect(baseElement).toBeTruthy();
  });

  it('shows the token input', () => {
    const { getByLabelText } = render(<SetUpEnterTokenForm />);
    const input = getByLabelText(copy.input.label);

    expect(input).toBeDefined();
  });

  it('it shows the token submit button', () => {
    const { getByLabelText } = render(<SetUpEnterTokenForm />);
    const button = getByLabelText(copy.submit.text);

    expect(button).toBeDefined();
  });

  it('Validate is not called if value is falsy on submit', () => {
    const validate = jest.fn(token => {
      // Freak out
      fail('Validate should not have been called...');
    });

    const { getByLabelText } = render(
      <SetUpEnterTokenForm validate={validate} />
    );
    const button = getByLabelText(copy.submit.text);

    fireEvent.click(button);
  });
});
