import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import About from './components/About';
import Home from './components/Home';
import Blog from './components/Blog';
import CodeSplitting from './components/CodeSplitting';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/codeplitting">CodeSplitting</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/codeplitting" component={CodeSplitting} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
serviceWorker.register();
export default App;
