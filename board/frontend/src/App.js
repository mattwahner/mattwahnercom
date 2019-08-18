import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardPage from "./components/BoardPage";
import HomePage from "./components/HomePage";
import './app.css';
import BrowserRouter from 'react-router-dom/BrowserRouter';

const App = () => (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={BoardPage} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default App;
