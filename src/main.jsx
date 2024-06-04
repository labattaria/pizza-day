// import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import LoginContext from './context/LoginContext.jsx';
import { Provider } from 'react-redux'
import { store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <LoginContext>
            <Provider store={store}>
                <App />
            </Provider>
        </LoginContext>
    </BrowserRouter>);
