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
                    <Route exact path='/cs97-project/' component={ App } />
                    <Route exact path='/cs97-project/course/:id' component={ CoursePage } />
                </Switch>
            </Router>
        </div>
    );
}

export default MainRouter;
