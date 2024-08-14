import React from 'react';

import UserSelectDropdown from './components/UserSelectDropdown';
import ThemeToggle from './components/ThemeToggle';
import NavItemSelector from './components/NavItemSelector';
import NavBar from './components/NavBar';


const components = {
  UserSelectDropdown: {
    component: <UserSelectDropdown users={[{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]} onSelect={() => { }} />,
    initialCode: `<UserSelectDropdown users={[{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]} onSelect={() => {}} />    
    import React, { useState } from 'react';

const UserSelectDropdown = ({ users, onSelect }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSelect = (user) => {
    setSelectedUser(user);
    onSelect(user);
  };

  return (
    <select onChange={(e) => handleSelect(users[e.target.value])}>
      <option value="">Select a user</option>
      {users.map((user, index) => (
        <option key={user.id} value={index}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserSelectDropdown;
`
  },
  ThemeToggle: {
    component: <ThemeToggle />,
    initialCode: `<ThemeToggle />`
  },
  NavItemSelector: {
    component: <NavItemSelector items={['Home', 'About', 'Contact']} onSelect={() => { }} />,
    initialCode: `<NavItemSelector items={['Home', 'About', 'Contact']} onSelect={() => {}} />`
  },
  NavBar: {
    component: <NavBar items={['Home', 'About', 'Contact']} logo="logo.png" />,
    initialCode: `<NavBar items={['Home', 'About', 'Contact']} logo="logo.png" />`
  }
};



const ComponentShowcase = () => {
  return (
    <div className="component-showcase ">
      <code>Code name ='love'</code>
    </div>
  );
};

export default ComponentShowcase;
