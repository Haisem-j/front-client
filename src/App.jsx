import React from "react";
import 'styles/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { RouterConfig } from "navigation/RouterConfig";
import { store } from "redux/store";
import { AuthProvider } from './context/AuthContext'

// Entry point

const App = () => {
    return (
        <>
            <Provider store={store}>
                <AuthProvider>
                    <BrowserRouter>
                        <RouterConfig />
                    </BrowserRouter>
                </AuthProvider>
            </Provider>
        </>
    )
}

export default App