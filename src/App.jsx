import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css'; // Import your custom CSS file

import Hero from './components/UI/Hero';
import NavBar from './components/UI/components/NavBar';
import UserSelectDropdown from './components/UI/components/UserSelectDropdown';

const App = () => {
  const users = ['john', 'michal', 'rachel'];

  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/sample-website/navbar" component={NavBar} />
          <Route
            path="/sample-website/userselectdropdown"
            render={() => <UserSelectDropdown users={users} onSelect={(user) => console.log('Selected User:', user)} />}
          />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
