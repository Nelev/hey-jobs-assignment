import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { ThemeProvider } from '@material-ui/core/styles';

import Login from "./views/Login/index";
import Root from "./views/Root/index";
import { theme } from "./theme"

import messagesEn from "./messages/en";
import store from "./store";

import "./index.css";

// TODO: get the current broswer language and load the locale one.
// const language = navigator.language.split(/[-_]/)[0]
const language = "en";
const messages = { en: messagesEn };

const App = (
    <ThemeProvider theme={theme}>
        <IntlProvider locale={language} messages={messages[language]}>
            <Provider store={store}>
                <Login>
                    <Root />
                </Login>
            </Provider>
        </IntlProvider>
    </ThemeProvider>
);

ReactDOM.render(App, document.getElementById("root"));
