import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import App from './components/App';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
