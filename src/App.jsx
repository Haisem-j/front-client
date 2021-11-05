import React from "react";
import 'styles/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";

import { RouterConfig } from "navigation/RouterConfig";
import { store } from "redux/store";
// Entry point

const App = () => {

    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <RouterConfig />
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App