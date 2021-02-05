import React from 'react';
import App from './App.js';
import CoursePage from './CoursePage.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

let MainRouter = () => {

    return (
        <div className="Router">
            <Router>
                <Switch>
                    <Route exact path='/' component={ App } />
                    <Route exact path='/course/:id' component={ CoursePage } />
                </Switch>
            </Router>
        </div>
    );
}

export default MainRouter;
