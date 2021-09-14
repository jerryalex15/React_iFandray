import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Message from './messages/Message';
import Accueil from './accueils/Accueil';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact >
                    <Accueil />
                </Route>
                <Route path="/message" exact>
                    <Message />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;