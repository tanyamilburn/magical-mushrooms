import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/signup'
import Signin from './user/signin'
import Home from './core/home'
import Menu from './core/menu'

const Routes = () => {
    return (
    <BrowserRouter>
        <Switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/signin" exact component={Signin}/>
            <Route path = "/signup" exact component={Signup}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;