import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Logon from './pages/Logon';
import Register from './pages/Register';
import NewPost from './pages/NewPost';
import Profile from './pages/Profile';


export default function Routes(){


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/home" component={Home} />
                <Route path="/posts/new" component={NewPost} />
                {/* <Route path="/profile" component={Profile} /> */}
                <Route path="/profile/:id" component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}