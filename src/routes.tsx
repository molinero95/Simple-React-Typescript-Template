import * as React from 'react'
import { Route } from 'react-router-dom'
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Layout } from './components/layout';


export const routes =
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path="/login" component={Login} />
    </Layout>
