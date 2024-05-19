// import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import LoginContext from './context/LoginContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <LoginContext>
            <App />
        </LoginContext>
    </BrowserRouter>);
