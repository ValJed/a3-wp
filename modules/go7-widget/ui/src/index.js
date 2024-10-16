import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

export default () => {
  apos.util.widgetPlayers.reactWeather = {
    selector: '[data-react-widget]',
    player(el) {
      // Render your React component instead
      const rootEl = el.querySelector('#react-app');
      if (!rootEl) {
        return;
      }

      const root = createRoot(el);
      root.render(<App />);
    }
  };
};
