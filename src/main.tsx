import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { Notifications } from '@mantine/notifications';
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Notifications position="top-right" />
      <App />
    </I18nextProvider>
  </StrictMode>,
);
