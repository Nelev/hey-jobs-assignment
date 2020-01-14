import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';

import Login from "./views/Login/index";
import Jobs from "./views/Jobs/index";
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
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Jobs} />
                        </Switch>
                    </BrowserRouter>
                </Login>
            </Provider>
        </IntlProvider>
    </ThemeProvider>
);

ReactDOM.render(App, document.getElementById("root"));
