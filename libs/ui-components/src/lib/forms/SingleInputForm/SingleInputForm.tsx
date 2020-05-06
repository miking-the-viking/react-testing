import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input
} from '@chakra-ui/core';
import React, { useCallback, useMemo, useState } from 'react';

export interface SingleInputFormProps {
  copy: {
    input: {
      label: string;
      placeholder: string;
      describe: string;
    };
    submit: {
      text: string;
    };
  };
  submit: (value: string) => void;
  identifier: string;
  buttonVariantColor?: string;
}

export const SingleInputForm: React.FC<SingleInputFormProps> = ({
  copy,
  submit,
  identifier,
  buttonVariantColor = 'green'
}) => {
  const [value, setValue] = useState<string>('');

  const handleSetValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  const decribedBy = useMemo(() => `${identifier}_text`, [identifier]);

  const submitValue = useCallback(() => {
    submit(value);
  }, [submit, value]);

  return (
    <Box display="flex" justifyContent="center">
      <Box maxW="lg" mt={16} borderWidth={1} rounded="lg" shadow="md" p={3}>
        <FormControl>
          <FormLabel htmlFor={identifier}>{copy.input.label}</FormLabel>
          <Input
            id={identifier}
            aria-describedby={decribedBy}
            placeholder={copy.input.placeholder}
            value={value}
            onChange={handleSetValue}
          />
          <FormHelperText id={decribedBy}>{copy.input.describe}</FormHelperText>
        </FormControl>
        <Button
          aria-label={copy.submit.text}
          onClick={() => {
            submitValue();
          }}
          variantColor={buttonVariantColor}
          mt={2}
        >
          {copy.submit.text}
        </Button>
      </Box>
    </Box>
  );
};

export default SingleInputForm;
