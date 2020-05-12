import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

addDecorator(withKnobs);
addDecorator(story => (
  <ThemeProvider>
    {' '}
    <CSSReset />
    {story()}
  </ThemeProvider>
));
configure(require.context('../src/lib', true, /\.stories\.tsx?$/), module);
