import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from "@nextui-org/react";
import { DataProvider } from './lib/dataContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DataProvider>
    <NextUIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NextUIProvider>
  </DataProvider>
);


