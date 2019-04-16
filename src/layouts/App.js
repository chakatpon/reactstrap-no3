import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainNavbar from '../components/MainNavbar';
import Footer from './Footer';
import Login from './Login';
import Categories from '../views/Categories';
import Dashboard from '../views/Dashboard';
import Details from '../views/Details';
import Posts from '../views/Posts';
import Profile from '../views/Profile';
import Settings from '../views/Settings';
import Users from '../views/Users';

class App extends React.Component {
    render() {
        return(
            <div>
                <MainNavbar/>
                    <Switch>
                        <Route path="/app/login" component={Login}/>
                        <Route path="/app/categories" component={Categories}/>
                        <Route path="/app/dashboard" component={Dashboard}/>
                        <Route path="/app/details" component={Details}/>
                        <Route path="/app/posts" component={Posts}/>
                        <Route path="/app/profile" component={Profile}/>
                        <Route path="/app/settings" component={Settings}/>
                        <Route path="/app/users" component={Users}/>
                    </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;