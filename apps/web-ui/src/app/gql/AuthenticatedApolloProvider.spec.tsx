import React from 'react';
import { render } from '@testing-library/react';

import AuthenticatedApolloProvider from './AuthenticatedApolloProvider';

describe(' AuthenticatedApolloProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthenticatedApolloProvider />);
    expect(baseElement).toBeTruthy();
  });
});
