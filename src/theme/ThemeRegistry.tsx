'use client';

import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Theme } from './theme';
export default function ThemeRegistry({ children, }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'dark' | 'light'>('dark');

  const theme = React.useMemo(() => Theme(mode), [mode]);

  return (
    <AppRouterCacheProvider options={{ key: 'mui' }} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

