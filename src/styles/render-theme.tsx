import { render, RenderResult } from '@testing-library/react';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
