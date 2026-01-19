import type { Preview, Decorator } from '@storybook/react-vite';
import * as React from 'react';
import '../src/styles/globals.css';

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light';

  React.useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Also update the story root for proper background
    const storyRoot = document.getElementById('storybook-root');
    if (storyRoot) {
      storyRoot.style.backgroundColor = theme === 'dark' ? '#20212C' : '#F4F7FD';
      storyRoot.style.minHeight = '100vh';
      storyRoot.style.padding = '1rem';
    }
  }, [theme]);

  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
