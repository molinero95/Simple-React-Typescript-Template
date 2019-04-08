import * as ReactDOM from "react-dom";
import * as React from 'react'
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from "react-router-dom";
import { routes } from "./routes";



ReactDOM.render(
    <AppContainer>
        <HashRouter children={ routes } />
    </AppContainer>
, document.getElementById("root"))