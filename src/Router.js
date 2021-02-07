// Component for routing. Renders components based on given path.


import React from 'react';
import App from './App.js';
import CoursePage from './CoursePage.js';
import AddCourse from './AddCourse.js';
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
                    <Route exact path='/cs97-project/addcourse' component={ AddCourse } />
                </Switch>
            </Router>
        </div>
    );
}

export default MainRouter;
