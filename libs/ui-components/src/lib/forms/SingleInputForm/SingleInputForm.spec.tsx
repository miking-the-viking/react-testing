import React from 'react';
import { render } from '@testing-library/react';

import SingleInputForm from './SingleInputForm';

describe(' SingleInputForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SingleInputForm />);
    expect(baseElement).toBeTruthy();
  });
});
