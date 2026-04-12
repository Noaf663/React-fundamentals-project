import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider>
            <App />
        </Provider>
    </StrictMode>,
<<<<<<< HEAD
);
=======
);
>>>>>>> f9e297bea3be80f7ee5ab6727ff0fc1f6d2ef13a
